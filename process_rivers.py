# -*- coding: utf-8 -*-
"""Build geo_data.js for the app: merge OpenStreetMap river fragments into
ordered polylines, clip them to the real Jambyl Region boundary, simplify, and
emit the boundary plus the river lines (also dumped to rivers_data.json)."""
import json, math, os
from collections import defaultdict

BASE = os.path.dirname(os.path.abspath(__file__))

# Full-resolution oblast boundary, used to clip rivers and points to the region
kaz = json.load(open(BASE + r"\kaz_adm1.geojson", encoding="utf-8"))
jf = [f for f in kaz["features"] if f["properties"]["shapeName"] == "Jambyl Region"][0]
BNDRY = [(p[1], p[0]) for p in jf["geometry"]["coordinates"][0]]  # (lat,lon)

def point_in_poly(lat, lon, poly):
    inside = False
    n = len(poly)
    j = n - 1
    for i in range(n):
        yi, xi = poly[i]
        yj, xj = poly[j]
        if ((xi > lon) != (xj > lon)) and \
           (lat < (yj - yi) * (lon - xi) / ((xj - xi) or 1e-12) + yi):
            inside = not inside
        j = i
    return inside

# OSM waterway fragments grouped by river name (each value is a list of paths)
d = json.load(open(BASE + r"\rivers_raw.json", encoding="utf-8"))
byname = defaultdict(list)
for e in d["elements"]:
    n = e.get("tags", {}).get("name", "?")
    g = e.get("geometry") or []
    if len(g) >= 2:
        byname[n].append([(p["lat"], p["lon"]) for p in g])

def dist(a, b):
    return math.hypot(a[0]-b[0], a[1]-b[1])

def merge_segments(segs):
    """Greedily chain segments by nearest endpoints into one longest polyline."""
    segs = [list(s) for s in segs]
    if not segs:
        return []
    # start from the longest segment
    segs.sort(key=len, reverse=True)
    chain = segs.pop(0)
    changed = True
    TOL = 0.06  # ~6km endpoint snap (bridges OSM fragment gaps)
    while changed and segs:
        changed = False
        best = None  # (idx, where, reversed, gap)
        head, tail = chain[0], chain[-1]
        for i, s in enumerate(segs):
            for (where, anchor) in (("tail", tail), ("head", head)):
                for rev in (False, True):
                    ss = s[::-1] if rev else s
                    gap = dist(anchor, ss[0]) if where == "tail" else dist(anchor, ss[-1])
                    if best is None or gap < best[4]:
                        best = (i, where, rev, ss, gap)
        if best and best[4] < TOL:
            i, where, rev, ss, gap = best
            segs.pop(i)
            if where == "tail":
                chain += ss[1:] if gap < 1e-6 else ss
            else:
                chain = (ss[:-1] if gap < 1e-6 else ss) + chain
            changed = True
    return chain

def clip_inside(line):
    """Return the longest run inside boundary, bridging brief (<=3 pt) exits."""
    runs, cur, out_streak = [], [], 0
    for p in line:
        if point_in_poly(p[0], p[1], BNDRY):
            cur.append(p)
            out_streak = 0
        else:
            out_streak += 1
            if out_streak > 3:
                if len(cur) >= 2:
                    runs.append(cur)
                cur = []
            # else: tolerate brief border excursion, keep building cur
    if len(cur) >= 2:
        runs.append(cur)
    return max(runs, key=len) if runs else []

def simplify(line, max_pts=90):
    if len(line) <= max_pts:
        step = 1
    else:
        step = math.ceil(len(line) / max_pts)
    out = line[::step]
    if out[-1] != line[-1]:
        out.append(line[-1])
    return [[round(p[0], 4), round(p[1], 4)] for p in out]

# source name (app) -> list of OSM names to merge
MAP = {
    "р. Шу (Чу)":                 ["Чу", "Шу", "Чүй", "Чүй / Шу"],
    "р. Талас":                   ["Талас"],
    "р. Аса":                     ["Асса", "Асса "],
    "р. Аспара":                  ["Аспара - Ашмара"],
    "БЧК (Большой Чуйский канал)":["Чоң Чүй каналы"],
    "р. Кара-Балта":              ["Кара-Балта", "Карабалта", "Қарабалта", "р. Кара-Балта"],
    "р. Аксу":                    ["Ақсу", "Аксу"],
    "р. Боралдай":                ["Боралдай"],
}

result = {}
for src, names in MAP.items():
    segs = []
    for nm in names:
        segs += byname.get(nm, [])
    if not segs:
        continue
    merged = merge_segments(segs)
    inside = clip_inside(merged)
    if len(inside) >= 2:
        result[src] = simplify(inside)

# drop rivers that came out too short to be useful (<8 pts)
result = {k: v for k, v in result.items() if len(v) >= 8}

# reservoirs as point-sources (known coords) -> tiny lines so filter highlights them
RESERVOIRS = {
    "Тасоткельское вдхр.":     (43.12, 72.57),
    "Кировское вдхр.":         (42.40, 71.00),
    "Терс-Ащибулакское вдхр.": (43.08, 70.55),
    "Байдибекское вдхр.":      (42.60, 69.80),
    "Аспаринское вдхр.":       (42.68, 72.05),
}
for nm, (la, lo) in RESERVOIRS.items():
    if point_in_poly(la, lo, BNDRY):
        result[nm] = [[round(la-0.04,4), round(lo-0.05,4)], [round(la,4), round(lo,4)], [round(la+0.04,4), round(lo+0.05,4)]]

# boundary simplified for app (downsample full ring)
ring = jf["geometry"]["coordinates"][0]
step = math.ceil(len(ring) / 360)
bnd = [[round(p[1], 4), round(p[0], 4)] for p in ring[::step]]
if bnd[-1] != [round(ring[-1][1], 4), round(ring[-1][0], 4)]:
    bnd.append([round(ring[-1][1], 4), round(ring[-1][0], 4)])

with open(BASE + r"\geo_data.js", "w", encoding="utf-8", newline="\n") as f:
    f.write("// Auto-generated from geoBoundaries (ADM1) + OpenStreetMap rivers\n")
    f.write("const JAMBYL_BOUNDARY=" + json.dumps(bnd, ensure_ascii=True, separators=(",", ":")) + ";\n")
    f.write("const REAL_RIVERS=" + json.dumps(result, ensure_ascii=True, separators=(",", ":")) + ";\n")

# Python-importable copy for the data generator (single source of truth)
with open(BASE + r"\rivers_data.json", "w", encoding="utf-8") as f:
    json.dump({"boundary": bnd, "rivers": result}, f, ensure_ascii=False)

# report
with open(BASE + r"\river_report.txt", "w", encoding="utf-8") as f:
    f.write(f"boundary pts: {len(bnd)}\n")
    for src, line in result.items():
        f.write(f"{src}: {len(line)} pts  start={line[0]} end={line[-1]}\n")
print("done")
