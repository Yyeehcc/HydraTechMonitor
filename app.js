'use strict';
// ── i18n ───────────────────────────────────────────────────
const LANG = {
  ru: {
    region:'Жамбылская область, Казахстан', subtitle:'· Мониторинг гидротехнических сооружений РГП «Казводхоз»',
    hdr_objects:'Объектов', hdr_critical:'Критических', hdr_sensors:'Датчиков онлайн',
    filters:'Фильтры', status_label:'Статус объекта', f_all:'Все', f_ok:'Норма', f_warning:'Осмотр', f_critical:'Ремонт',
    district:'Район', water_source:'Источник воды', build_year:'Год постройки', wear_max:'Износ (макс.)',
    alerts_only:'Только с тревогами датчиков', search:'Поиск', search_ph:'Название / район / ID...',
    statistics:'Статистика', objects:'Объекты', condition:'Состояние',
    s_ok:'Норма', s_warning:'Требует осмотра', s_critical:'Требует ремонта',
    offline:'Датчик офлайн', reservoir:'Водохранилище', refresh:'Обновить', click_hint:'Нажмите на объект на карте для просмотра данных датчиков',
    sensors_title:'Данные датчика', diag_gts:'Диагностика ГТС', sensor_fault:'Неисправность датчика',
    obj_info:'Характеристики объекта', remedy_label:'Рекомендуемые меры:', fix_label:'Способ устранения:',
    btn_report:'Отчёт', btn_track:'Отслеживать', risk_label:'Индекс риска',
    all_districts:'Все районы', all_sources:'Все источники',
    sl_flow:'Скорость течения', sl_temp:'Температура воды', sl_level:'Уровень воды',
    sl_turb:'Мутность', sl_ph:'Кислотность', sl_cond:'Проводимость',
    u_flow:'м/с', u_m:'м', u_cond:'мкС/см', u_cap:'м³/с', u_len:'км', u_area:'га', u_vol:'млн м³', u_mo:'мес.',
    meta_updated:'Обновлено:', meta_battery:'Батарея:',
    og_year:'Год постройки', og_source:'Источник воды', og_cap:'Пропускная способность',
    og_len:'Протяжённость', og_area:'Площадь орошения', og_kpd:'КПД проектный / факт',
    og_wear:'Износ', og_structs:'Сооружений', og_insp:'Осмотр каждые',
    mini_title:'Скорость течения — последние 24 ч', online:'● Онлайн', offline_dot:'○ Офлайн',
    res_label:'Водохранилище', res_river:'Река:', res_volume:'Объём:', res_year:'Год постройки:',
    pp_state:'Состояние:', pp_sensor:'Датчик:', pp_defect:'Дефект:', pp_temp:'Температура',
    type_canal:'Оросительный канал', type_reservoir:'Водохранилище',
    prio_high:'⬆ Высокий', prio_medium:'→ Средний', prio_low:'⬇ Низкий',
    alerts_word:'ТРЕВОГИ', more_objects:'ещё', objects_gen:'объектов', fault_prefix:'Неисправность:',
    yr_from:'с 1920', yr_to:'до 2026', reset_btn:'Сбросить', btn_3d:'3D Схема', wear_upto:'до',
    wear_help:'Износ сооружения в %. Показывает объекты с износом не выше выбранного.',
    alerts_help:'Только объекты с активной тревогой датчиков.',
    d3_canal:'Схема установки датчиков в канале', d3_res:'Схема установки датчиков: водохранилище',
    oblast_label:'ЖАМБЫЛСКАЯ ОБЛАСТЬ', collapse_list:'↑ Свернуть список',
    rep_title:'Технический отчёт', rep_obj:'Объект:', rep_type:'Тип:', rep_district:'Район:', rep_date:'Дата отчёта:',
    rep_sensors:'Данные датчиков (текущие показания)', rep_param:'Параметр', rep_value:'Значение', rep_assess:'Оценка',
    rep_high:'⚠ Высокая', rep_norm:'✓ Норма', rep_elev:'⚠ Повышена', rep_highm:'⚠ Высокий', rep_dev:'⚠ Отклонение',
    rep_sstate:'Состояние датчика', rep_online:'Онлайн', rep_offline:'Офлайн', rep_batt:'АКБ',
    rep_fault:'Неисправность датчика:', rep_code:'Код:', rep_prio:'Приоритет:', rep_flt:'Неисправность:', rep_desc:'Описание:', rep_fix:'Способ устранения:',
    rep_tech:'Техническое состояние объекта', rep_status:'Статус', rep_risk:'Индекс риска', rep_wear:'Износ',
    rep_age:'Возраст сооружения', rep_years:'лет (с', rep_kpddrop:'Снижение КПД',
    rep_defect:'Выявленный дефект', rep_urg:'Срочность:', rep_remedy:'Рекомендуемые меры:',
    rep_sched:'График обслуживания', rep_period:'Периодичность осмотра: каждые', rep_next:'Следующий осмотр:',
    rep_critnote:'⚠ Требуется немедленное вмешательство. Объект в критическом состоянии.',
    rep_warnnote:'Рекомендуется плановый осмотр для оценки необходимости ремонта.',
    rep_oknote:'Объект в нормативном состоянии. Плановое обслуживание.',
    print_title:'HydroTechMonitor — Технический отчёт', print_header:'HydroTechMonitor | Жамбылская область',
    track_on:'Добавлен в мониторинг:', track_off:'Отслеживание снято:', refreshed:'Данные датчиков обновлены',
  },
  en: {
    region:'Zhambyl Region, Kazakhstan', subtitle:'· Hydraulic Structure Monitoring — RSE «Kazvodkhoz»',
    hdr_objects:'Objects', hdr_critical:'Critical', hdr_sensors:'Sensors online',
    filters:'Filters', status_label:'Object status', f_all:'All', f_ok:'Normal', f_warning:'Inspect', f_critical:'Repair',
    district:'District', water_source:'Water source', build_year:'Year built', wear_max:'Wear (max.)',
    alerts_only:'With sensor alerts only', search:'Search', search_ph:'Name / district / ID...',
    statistics:'Statistics', objects:'Objects', condition:'Condition',
    s_ok:'Normal', s_warning:'Needs inspection', s_critical:'Needs repair',
    offline:'Sensor offline', reservoir:'Reservoir', refresh:'Refresh', click_hint:'Click on a map object to view sensor data',
    sensors_title:'Sensor data', diag_gts:'GTS Diagnostics', sensor_fault:'Sensor fault',
    obj_info:'Object parameters', remedy_label:'Recommended actions:', fix_label:'Fix procedure:',
    btn_report:'Report', btn_track:'Track', risk_label:'Risk index',
    all_districts:'All districts', all_sources:'All sources',
    sl_flow:'Flow speed', sl_temp:'Water temperature', sl_level:'Water level',
    sl_turb:'Turbidity', sl_ph:'Acidity', sl_cond:'Conductivity',
    u_flow:'m/s', u_m:'m', u_cond:'µS/cm', u_cap:'m³/s', u_len:'km', u_area:'ha', u_vol:'M m³', u_mo:'mo',
    meta_updated:'Updated:', meta_battery:'Battery:',
    og_year:'Year built', og_source:'Water source', og_cap:'Capacity',
    og_len:'Length', og_area:'Irrigated area', og_kpd:'Efficiency design / actual',
    og_wear:'Wear', og_structs:'Structures', og_insp:'Inspect every',
    mini_title:'Flow speed — last 24 h', online:'● Online', offline_dot:'○ Offline',
    res_label:'Reservoir', res_river:'River:', res_volume:'Volume:', res_year:'Year built:',
    pp_state:'Condition:', pp_sensor:'Sensor:', pp_defect:'Defect:', pp_temp:'Temperature',
    type_canal:'Irrigation canal', type_reservoir:'Reservoir',
    prio_high:'⬆ High', prio_medium:'→ Medium', prio_low:'⬇ Low',
    alerts_word:'ALERTS', more_objects:'more', objects_gen:'objects', fault_prefix:'Fault:',
    yr_from:'from 1920', yr_to:'to 2026', reset_btn:'Reset', btn_3d:'3D View', wear_upto:'up to',
    wear_help:'Structure wear in %. Shows objects with wear no higher than selected.',
    alerts_help:'Only objects with an active sensor alert.',
    d3_canal:'Sensor installation diagram — canal', d3_res:'Sensor installation diagram — reservoir',
    oblast_label:'ZHAMBYL REGION', collapse_list:'↑ Collapse list',
    rep_title:'Technical Report', rep_obj:'Object:', rep_type:'Type:', rep_district:'District:', rep_date:'Report date:',
    rep_sensors:'Sensor data (current readings)', rep_param:'Parameter', rep_value:'Value', rep_assess:'Assessment',
    rep_high:'⚠ High', rep_norm:'✓ Normal', rep_elev:'⚠ Elevated', rep_highm:'⚠ High', rep_dev:'⚠ Deviation',
    rep_sstate:'Sensor status', rep_online:'Online', rep_offline:'Offline', rep_batt:'Battery',
    rep_fault:'Sensor fault:', rep_code:'Code:', rep_prio:'Priority:', rep_flt:'Fault:', rep_desc:'Description:', rep_fix:'Fix procedure:',
    rep_tech:'Technical condition', rep_status:'Status', rep_risk:'Risk index', rep_wear:'Wear',
    rep_age:'Structure age', rep_years:'years (since', rep_kpddrop:'Efficiency drop',
    rep_defect:'Identified defect', rep_urg:'Urgency:', rep_remedy:'Recommended actions:',
    rep_sched:'Maintenance schedule', rep_period:'Inspection interval: every', rep_next:'Next inspection:',
    rep_critnote:'⚠ Immediate intervention required. Object in critical condition.',
    rep_warnnote:'A scheduled inspection is recommended to assess repair needs.',
    rep_oknote:'Object in normative condition. Routine maintenance.',
    print_title:'HydroTechMonitor — Technical Report', print_header:'HydroTechMonitor | Zhambyl Region',
    track_on:'Added to monitoring:', track_off:'Tracking removed:', refreshed:'Sensor data updated',
  }
};
let currentLang = 'ru';

function applyI18n() {
  const t = LANG[currentLang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const k = el.getAttribute('data-i18n');
    if (t[k] !== undefined) el.textContent = t[k];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const k = el.getAttribute('data-i18n-placeholder');
    if (t[k] !== undefined) el.placeholder = t[k];
  });
  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    const k = el.getAttribute('data-i18n-title');
    if (t[k] !== undefined) el.title = t[k];
  });
  // Dynamic labels
  const aDist = document.getElementById('zoneFilter')?.options[0];
  if (aDist) aDist.textContent = t.all_districts;
  const aSrc = document.getElementById('sourceFilter')?.options[0];
  if (aSrc) aSrc.textContent = t.all_sources;
  const wm = document.getElementById('wearMax');
  if (wm) updateWearLabel(wm);
  const ol = document.querySelector('.oblast-label');
  if (ol) ol.textContent = t.oblast_label;
}

function toggleLang() {
  currentLang = currentLang === 'ru' ? 'en' : 'ru';
  document.getElementById('btnLang').textContent = currentLang === 'ru' ? 'EN' : 'RU';
  applyI18n();
  // Re-render dynamic content so data (panel, popups, list, alerts) follows language
  if (typeof filteredCanals !== 'undefined' && filteredCanals) {
    renderMarkers(filteredCanals);
    renderList(filteredCanals);
    renderReservoirs();
    drawChart(filteredCanals);
  }
  rebuildAlertTicker();
  if (selectedId != null) showDetail(selectedId, selectedIsReservoir);
}

// ── i18n data helpers (EN overrides from i18n_data.js, fall back to RU data) ──
const EN = () => currentLang === 'en';
function tt(k) { return (LANG[currentLang] && LANG[currentLang][k]) || k; }
function tZone(z)   { return EN() && ZONE_EN[z]   ? ZONE_EN[z]   : (z || ''); }
function tSource(s) { return EN() && SOURCE_EN[s] ? SOURCE_EN[s] : (s || '—'); }
function tUrgency(u){ return EN() && URGENCY_EN[u]? URGENCY_EN[u]: u; }
function tStatus(st){ return tt({ ok:'s_ok', warning:'s_warning', critical:'s_critical' }[st] || 's_ok'); }
function tDefect(obj) {
  // obj is a canal or reservoir; obj.defect has code; reservoirs override by id
  const d = obj.defect; if (!d) return null;
  if (EN()) {
    if (obj.id && RES_TEXT_EN[obj.id] && RES_TEXT_EN[obj.id].defect) {
      const r = RES_TEXT_EN[obj.id].defect;
      return { code:d.code, name:r.name, desc:r.desc, remedy:r.remedy, urgency:tUrgency(d.urgency) };
    }
    if (DEFECT_EN[d.code]) {
      const e = DEFECT_EN[d.code];
      return { code:d.code, name:e.name, desc:e.desc, remedy:e.remedy, urgency:tUrgency(d.urgency) };
    }
  }
  return d;
}
function tFault(f) {
  if (!f) return null;
  if (EN() && FAULT_EN[f.code]) {
    const e = FAULT_EN[f.code];
    return { code:f.code, priority:f.priority, component:e.component, fault:e.fault, detail:e.detail, fix:e.fix };
  }
  return f;
}
function tAlert(a, fault) {
  if (!EN()) return a.msg;
  if (a.msg && a.msg.startsWith('Неисправность:') && fault) return `${tt('fault_prefix')} ${tFault(fault).fault}`;
  return ALERT_EN[a.msg] || a.msg;
}
function tResDesc(obj) { return (EN() && RES_TEXT_EN[obj.id]) ? RES_TEXT_EN[obj.id].desc : obj.desc; }
function tResName(obj) { return (EN() && RES_NAME_EN[obj.id]) ? RES_NAME_EN[obj.id] : obj.name; }

// ── Theme ──────────────────────────────────────────────────
// Theme cycles: dark → light → dark
let currentTheme = 'dark';
const TILES = {
  dark:      'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
  light:     'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
  satellite: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
};
const THEME_CYCLE = ['dark', 'light'];
const THEME_ICONS = { dark: 'fa-solid fa-sun', light: 'fa-solid fa-moon' };
const THEME_TIPS  = { dark: 'Переключить на светлую тему', light: 'Переключить на тёмную тему' };

// ── Collapsible panels ─────────────────────────────────────
function togglePanel(side) {
  if (side === 'left') {
    const sb = document.getElementById('sidebar');
    const btn = document.getElementById('toggleLeft');
    const collapsed = sb.classList.toggle('collapsed');
    btn.classList.toggle('collapsed', collapsed);
    btn.querySelector('i').className = collapsed ? 'fa-solid fa-chevron-right' : 'fa-solid fa-chevron-left';
    btn.title = collapsed ? 'Развернуть панель' : 'Свернуть панель';
  } else {
    const dp = document.getElementById('detailPanel');
    const btn = document.getElementById('toggleRight');
    const collapsed = dp.classList.toggle('collapsed');
    btn.classList.toggle('collapsed', collapsed);
    btn.querySelector('i').className = collapsed ? 'fa-solid fa-chevron-left' : 'fa-solid fa-chevron-right';
    btn.title = collapsed ? 'Развернуть панель' : 'Свернуть панель';
  }
  setTimeout(() => { if (window.map) map.invalidateSize(); }, 300);
}

function toggleTheme() {
  const idx = THEME_CYCLE.indexOf(currentTheme);
  currentTheme = THEME_CYCLE[(idx + 1) % THEME_CYCLE.length];
  document.body.classList.toggle('light', currentTheme === 'light');
  document.body.classList.remove('lightmap');
  const btn = document.getElementById('btnTheme');
  btn.querySelector('i').className = THEME_ICONS[currentTheme];
  btn.title = THEME_TIPS[currentTheme];
  if (window._tileLayer) { map.removeLayer(window._tileLayer); }
  window._tileLayer = L.tileLayer(TILES[currentTheme], {
    attribution: '© OpenStreetMap © CARTO', maxZoom: 18
  }).addTo(map);
  window._tileLayer.bringToBack();
  drawChart(filteredCanals);
  showToast(THEME_TIPS[currentTheme]);
}

// ── Rivers data — REAL coordinates from OpenStreetMap (see geo_data.js) ─
const RIVER_LINES = (typeof REAL_RIVERS !== 'undefined') ? REAL_RIVERS : {};

// District label centers for Zhambyl Oblast
const DISTRICT_LABELS = [
  { name:'Байзакский р-н',   lat:42.58, lon:71.20 },
  { name:'Жамбылский р-н',   lat:43.15, lon:71.00 },
  { name:'Жуалынский р-н',   lat:42.55, lon:69.90 },
  { name:'Кордайский р-н',   lat:43.25, lon:73.90 },
  { name:'Меркенский р-н',   lat:43.55, lon:70.70 },
  { name:'Мойынкумский р-н', lat:44.10, lon:72.80 },
  { name:'Рыскуловский р-н', lat:42.90, lon:72.50 },
  { name:'Шуский р-н',       lat:43.40, lon:72.20 },
  { name:'Таласский р-н',    lat:42.35, lon:71.60 },
  { name:'Таразский а/о',    lat:42.88, lon:71.40 },
];

let riverLayer = null;
let districtLayer = null;

// ── State ──────────────────────────────────────────────────
let map, markersGroup, reservoirGroup, currentFilter = 'all', selectedId = null, selectedIsReservoir = false;
let sensorViewOn = false, filteredCanals = [...CANALS_DATA];
const trackedIds = new Set();
let sensorInterval = null;
let listLimit = 120;

// ── Init ───────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initMap();
  populateFilters();
  updateStats(CANALS_DATA);
  renderList(CANALS_DATA);
  drawChart(CANALS_DATA);
  buildAlertTicker();
  updateTime();
  setInterval(updateTime, 1000);
  sensorInterval = setInterval(simulateSensorUpdate, 8000);
  applyI18n();
});

function updateTime() {
  const d = new Date();
  document.getElementById('header-time').textContent = d.toLocaleTimeString('ru-RU');
}

// ── Map ────────────────────────────────────────────────────
function initMap() {
  map = L.map('map', { zoomControl: false, preferCanvas: true })
    .setView([42.90, 71.37], 8);

  window._tileLayer = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: '© Esri, Maxar, Earthstar Geographics', maxZoom: 19
  }).addTo(map);

  markersGroup = L.layerGroup().addTo(map);
  reservoirGroup = L.layerGroup().addTo(map);
  addZhambyOblast();
  renderMarkers(CANALS_DATA);
  renderReservoirs();
}

function addZhambyOblast() {
  // Real Zhambyl Oblast boundary from geoBoundaries (ADM1) — see geo_data.js
  const coords = (typeof JAMBYL_BOUNDARY !== 'undefined') ? JAMBYL_BOUNDARY : [];
  L.polygon(coords, {
    color: '#ef4444',
    weight: 2,
    opacity: 0.85,
    fillColor: '#ef4444',
    fillOpacity: 0.04,
    interactive: false
  }).addTo(map);

  // Oblast label
  L.marker([44.20, 71.80], {
    icon: L.divIcon({
      className: '',
      html: `<div class="oblast-label" style="font-size:13px;font-weight:800;color:#ef4444;opacity:0.85;white-space:nowrap;text-shadow:0 1px 4px rgba(0,0,0,0.8);letter-spacing:0.05em">${tt('oblast_label')}</div>`,
      iconAnchor: [80, 8]
    }),
    interactive: false
  }).addTo(map);

  // Add district labels
  districtLayer = L.layerGroup().addTo(map);
  DISTRICT_LABELS.forEach(d => {
    L.marker([d.lat, d.lon], {
      icon: L.divIcon({
        className: '',
        html: `<div style="font-size:9px;color:#94a3b8;opacity:0.75;white-space:nowrap;text-shadow:0 1px 2px rgba(0,0,0,0.9);pointer-events:none">${d.name}</div>`,
        iconAnchor: [40, 6]
      }),
      interactive: false
    }).addTo(districtLayer);
  });
}

function showRiverForSource(srcName) {
  if (riverLayer) { map.removeLayer(riverLayer); riverLayer = null; }
  if (!srcName || !RIVER_LINES[srcName]) return;
  riverLayer = L.layerGroup().addTo(map);
  const coords = RIVER_LINES[srcName];
  if (coords.length > 2) {
    L.polyline(coords, {
      color: '#38bdf8',
      weight: 3.5,
      opacity: 0.85,
      smoothFactor: 1.5,
      className: 'river-line'
    }).addTo(riverLayer);
    // Animated flow dots
    L.polyline(coords, {
      color: '#bae6fd',
      weight: 1.5,
      opacity: 0.5,
      dashArray: '8 12',
      className: 'river-dash'
    }).addTo(riverLayer);
  }
  // River name label at midpoint
  const mid = coords[Math.floor(coords.length / 2)];
  L.marker(mid, {
    icon: L.divIcon({
      className: '',
      html: `<div style="font-size:10px;font-weight:700;color:#38bdf8;white-space:nowrap;text-shadow:0 1px 3px rgba(0,0,0,0.9);background:rgba(15,17,23,0.6);padding:1px 5px;border-radius:4px">${srcName}</div>`,
      iconAnchor: [30, 8]
    }),
    interactive: false
  }).addTo(riverLayer);
}

function renderMarkers(canals) {
  markersGroup.clearLayers();
  canals.forEach(c => {
    let iconHtml, sz;
    if (sensorViewOn) {
      const spd = c.sensors.flow_speed;
      sz = Math.max(16, Math.min(36, spd * 24 + 12));
      iconHtml = `<div class="sensor-marker" style="width:${sz}px;height:${sz}px">${spd.toFixed(1)}</div>`;
    } else {
      const offline = !c.sensors.online;
      const sel = (!selectedIsReservoir && c.id === selectedId) ? ' marker-selected' : '';
      iconHtml = `<div class="custom-marker ${offline ? 'offline' : c.status}${sel}"></div>`;
      sz = 13;
    }
    const icon = L.divIcon({ className: '', html: iconHtml, iconSize: [sz, sz], iconAnchor: [sz/2, sz/2] });
    L.marker([c.lat, c.lon], { icon, zIndexOffset: (c.id === selectedId ? 1000 : 0) })
      .bindPopup(popupHtml(c), { maxWidth: 260 })
      .on('click', () => showDetail(c.id, false))
      .addTo(markersGroup);
  });
}

function renderReservoirs() {
  reservoirGroup.clearLayers();
  RESERVOIRS.forEach(r => {
    const iconHtml = `<div class="reservoir-marker ${r.status}">💧</div>`;
    const icon = L.divIcon({ className: '', html: iconHtml, iconSize: [18, 18], iconAnchor: [9, 9] });
    L.marker([r.lat, r.lon], { icon })
      .bindPopup(reservoirPopupHtml(r), { maxWidth: 280 })
      .on('click', () => showReservoirDetail(r.id))
      .addTo(reservoirGroup);
  });
}

function popupHtml(c) {
  const col = { ok: '#22c55e', warning: '#f59e0b', critical: '#ef4444' }[c.status];
  const s = c.sensors;
  return `<div style="min-width:210px">
    <div style="font-weight:700;font-size:13px;margin-bottom:6px">${c.name}</div>
    <div style="font-size:11px;color:#06b6d4;margin-bottom:6px"><i class="fa fa-location-dot"></i> ${tZone(c.zone)}</div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:4px;margin-bottom:6px;font-size:11px">
      <div style="background:#222636;border-radius:5px;padding:4px 6px;text-align:center">
        <div style="color:#94a3b8;font-size:9px">${tt('sl_flow')}</div>
        <div style="font-weight:700;color:#06b6d4">${s.flow_speed} ${tt('u_flow')}</div>
      </div>
      <div style="background:#222636;border-radius:5px;padding:4px 6px;text-align:center">
        <div style="color:#94a3b8;font-size:9px">${tt('pp_temp')}</div>
        <div style="font-weight:700;color:#f97316">${s.temperature} °C</div>
      </div>
      <div style="background:#222636;border-radius:5px;padding:4px 6px;text-align:center">
        <div style="color:#94a3b8;font-size:9px">${tt('sl_level')}</div>
        <div style="font-weight:700;color:#3b82f6">${s.water_level} ${tt('u_m')}</div>
      </div>
      <div style="background:#222636;border-radius:5px;padding:4px 6px;text-align:center">
        <div style="color:#94a3b8;font-size:9px">${tt('sl_turb')}</div>
        <div style="font-weight:700;color:#a78bfa">${s.turbidity} NTU</div>
      </div>
    </div>
    <div style="display:flex;justify-content:space-between;font-size:11px">
      <span style="color:#94a3b8">${tt('pp_state')}</span>
      <span style="color:${col};font-weight:600">${tStatus(c.status)}</span>
    </div>
    <div style="display:flex;justify-content:space-between;font-size:11px;margin-top:3px">
      <span style="color:#94a3b8">${tt('pp_sensor')}</span>
      <span style="color:${s.online?'#22c55e':'#ef4444'}">${s.online?tt('online'):tt('offline_dot')}</span>
    </div>
    ${c.defect ? `<div style="margin-top:6px;font-size:10px;color:#94a3b8;border-top:1px solid #2d3148;padding-top:5px">⚠ <b>${tt('pp_defect')}</b> ${tDefect(c).name}</div>` : ''}
  </div>`;
}

function reservoirPopupHtml(r) {
  const col = { ok: '#22c55e', warning: '#f59e0b', critical: '#ef4444' }[r.status];
  return `<div style="min-width:230px">
    <div style="font-weight:700;font-size:13px;margin-bottom:4px">💧 ${tResName(r)}</div>
    <div style="font-size:11px;color:#06b6d4;margin-bottom:8px"><i class="fa fa-location-dot"></i> ${tZone(r.zone)}</div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:4px;margin-bottom:6px;font-size:11px">
      <div style="background:#222636;border-radius:5px;padding:4px 6px;text-align:center">
        <div style="color:#94a3b8;font-size:9px">${tt('res_volume').replace(':','')}</div>
        <div style="font-weight:700;color:#3b82f6">${r.capacity_mln} ${tt('u_vol')}</div>
      </div>
      <div style="background:#222636;border-radius:5px;padding:4px 6px;text-align:center">
        <div style="color:#94a3b8;font-size:9px">${tt('og_year')}</div>
        <div style="font-weight:700;color:#06b6d4">${r.year}</div>
      </div>
    </div>
    <div style="font-size:11px;color:#94a3b8;margin-bottom:5px">${tResDesc(r)}</div>
    <div style="display:flex;justify-content:space-between;font-size:11px">
      <span style="color:#94a3b8">${tt('pp_state')}</span>
      <span style="color:${col};font-weight:600">${tStatus(r.status)}</span>
    </div>
    ${r.defect ? `<div style="margin-top:5px;font-size:10px;color:#94a3b8;border-top:1px solid #2d3148;padding-top:5px">⚠ <b>${tt('pp_defect')}</b> ${tDefect(r).name}</div>` : ''}
  </div>`;
}

function fitAll() {
  const pts = [
    ...filteredCanals.map(c => [c.lat, c.lon]),
    ...RESERVOIRS.map(r => [r.lat, r.lon])
  ];
  if (!pts.length) return;
  map.fitBounds(L.latLngBounds(pts), { padding: [40, 40] });
}

function toggleSensorView() {
  sensorViewOn = !sensorViewOn;
  document.getElementById('sensorViewBtn').classList.toggle('active', sensorViewOn);
  renderMarkers(filteredCanals);
  showToast(sensorViewOn ? 'Режим датчиков: размер маркера = скорость течения' : 'Стандартный режим');
}

// ── Filters ────────────────────────────────────────────────
function setFilter(f, el) {
  currentFilter = f;
  document.querySelectorAll('.filter-chips .chip').forEach(c => c.classList.remove('active'));
  el.classList.add('active');
  applyFilters();
}

function applyFilters() {
  const src = document.getElementById('sourceFilter').value;
  const zone = document.getElementById('zoneFilter').value;
  const yFrom = parseInt(document.getElementById('yearFrom').value) || 0;
  const yTo = parseInt(document.getElementById('yearTo').value) || 9999;
  const wMax = parseFloat(document.getElementById('wearMax').value);
  const search = document.getElementById('searchInput').value.toLowerCase();
  const alertsOnly = document.getElementById('alertsOnly').checked;

  listLimit = 120;
  filteredCanals = CANALS_DATA.filter(c => {
    if (currentFilter !== 'all' && c.status !== currentFilter) return false;
    if (src && c.source !== src) return false;
    if (zone && c.zone !== zone) return false;
    if (c.year && (c.year < yFrom || c.year > yTo)) return false;
    if (c.wear > wMax) return false;
    if (alertsOnly && c.sensors.alerts.length === 0) return false;
    if (search) {
      const hay = `${c.name} ${c.district} ${c.zone} ${c.id}`.toLowerCase();
      if (!hay.includes(search)) return false;
    }
    return true;
  });

  renderMarkers(filteredCanals);
  renderList(filteredCanals);
  drawChart(filteredCanals);
  updateStats(filteredCanals);
  showRiverForSource(src);
}

function resetFilters() {
  currentFilter = 'all';
  document.querySelectorAll('.filter-chips .chip').forEach(c => c.classList.remove('active'));
  document.querySelector('.chip-all').classList.add('active');
  ['sourceFilter','zoneFilter'].forEach(id => document.getElementById(id).value = '');
  ['yearFrom','yearTo'].forEach(id => document.getElementById(id).value = '');
  document.getElementById('wearMax').value = 1;
  document.getElementById('wearLabel').textContent = 'до 100%';
  document.getElementById('searchInput').value = '';
  document.getElementById('alertsOnly').checked = false;
  filteredCanals = [...CANALS_DATA];
  renderMarkers(filteredCanals);
  renderList(filteredCanals);
  drawChart(CANALS_DATA);
  updateStats(CANALS_DATA);
  showRiverForSource(null);
}

function updateWearLabel(el) {
  document.getElementById('wearLabel').textContent = `${tt('wear_upto')} ${Math.round(parseFloat(el.value)*100)}%`;
}

function populateFilters() {
  const sources = [...new Set(CANALS_DATA.map(c => c.source).filter(Boolean))].sort();
  const srcSel = document.getElementById('sourceFilter');
  sources.forEach(s => { const o = document.createElement('option'); o.value = s; o.textContent = s; srcSel.appendChild(o); });

  const zones = [...new Set(CANALS_DATA.map(c => c.zone).filter(Boolean))].sort();
  const zoneSel = document.getElementById('zoneFilter');
  zones.forEach(z => { const o = document.createElement('option'); o.value = z; o.textContent = z; zoneSel.appendChild(o); });
}

// ── Stats ──────────────────────────────────────────────────
function updateStats(canals) {
  const ok = canals.filter(c => c.status === 'ok').length;
  const warn = canals.filter(c => c.status === 'warning').length;
  const crit = canals.filter(c => c.status === 'critical').length;
  const online = canals.filter(c => c.sensors.online).length;
  document.getElementById('stat-ok').textContent = ok;
  document.getElementById('stat-warning').textContent = warn;
  document.getElementById('stat-critical').textContent = crit;
  document.getElementById('hdr-total').textContent = canals.length;
  document.getElementById('hdr-critical').textContent = crit;
  document.getElementById('hdr-sensors').textContent = `${online}/${canals.length}`;
}

// ── Canvas Donut ───────────────────────────────────────────
function drawChart(canals) {
  const canvas = document.getElementById('statusChart');
  const ctx = canvas.getContext('2d');
  const ok = canals.filter(c => c.status === 'ok').length;
  const warn = canals.filter(c => c.status === 'warning').length;
  const crit = canals.filter(c => c.status === 'critical').length;
  const total = ok + warn + crit || 1;
  const dpr = window.devicePixelRatio || 1;
  const W = canvas.offsetWidth || 220, H = 120;
  canvas.width = W * dpr; canvas.height = H * dpr;
  ctx.scale(dpr, dpr);
  ctx.clearRect(0, 0, W, H);

  const cx = 55, cy = 58, r = 45, ir = 26;
  const segs = [
    { val: ok, color: '#22c55e' },
    { val: warn, color: '#f59e0b' },
    { val: crit, color: '#ef4444' },
  ];
  let start = -Math.PI / 2;
  segs.forEach(s => {
    const a = (s.val / total) * 2 * Math.PI;
    ctx.beginPath(); ctx.moveTo(cx, cy); ctx.arc(cx, cy, r, start, start + a); ctx.closePath();
    ctx.fillStyle = s.color; ctx.fill(); start += a;
  });
  const bg2 = getComputedStyle(document.body).getPropertyValue('--bg2').trim() || '#1a1d27';
  ctx.beginPath(); ctx.arc(cx, cy, ir, 0, 2*Math.PI); ctx.fillStyle = bg2; ctx.fill();
  const textColor = getComputedStyle(document.body).getPropertyValue('--text').trim() || '#e2e8f0';
  ctx.fillStyle = textColor; ctx.font = `bold 18px Segoe UI`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText(total, cx, cy - 5);
  ctx.font = '9px Segoe UI'; ctx.fillStyle = getComputedStyle(document.body).getPropertyValue('--text2').trim() || '#94a3b8';
  ctx.fillText(tt('objects_gen'), cx, cy + 9);

  const lx = 118, labels = [tt('f_ok'), tt('f_warning'), tt('f_critical')];
  segs.forEach((s, i) => {
    const y = 16 + i * 28;
    ctx.fillStyle = s.color; ctx.beginPath(); ctx.arc(lx, y, 4, 0, 2*Math.PI); ctx.fill();
    ctx.fillStyle = '#94a3b8'; ctx.font = '10px Segoe UI'; ctx.textAlign = 'left'; ctx.textBaseline = 'middle';
    ctx.fillText(labels[i], lx + 8, y);
    ctx.fillStyle = '#e2e8f0'; ctx.font = 'bold 11px Segoe UI'; ctx.textAlign = 'right';
    ctx.fillText(s.val, W - 2, y);
  });
}

// ── Canal List ─────────────────────────────────────────────
function renderList(canals) {
  document.getElementById('list-count').textContent = canals.length;
  const el = document.getElementById('canalList');
  el.innerHTML = '';
  canals.slice(0, listLimit).forEach(c => {
    const div = document.createElement('div');
    div.className = `canal-item${selectedId === c.id && !selectedIsReservoir ? ' selected' : ''}`;
    div.innerHTML = `
      <div class="canal-dot ${c.status}"></div>
      <span class="canal-item-name">${c.name}<span class="canal-item-zone">${tZone(c.zone)}</span></span>
      <span class="canal-item-sensor ${c.sensors.online?'online':'offline'}">
        <i class="fa-solid fa-${c.sensors.online?'wifi':'wifi-slash'}" style="font-size:9px"></i>
      </span>
      <span class="canal-item-wear">${c.sensors.flow_speed}${tt('u_flow')}</span>`;
    div.onclick = () => { map.flyTo([c.lat, c.lon], 11, {duration:0.7}); showDetail(c.id, false); };
    el.appendChild(div);
  });
  if (canals.length > listLimit) {
    const more = document.createElement('button');
    more.className = 'list-more-btn';
    more.textContent = `+ ${tt('more_objects')} ${canals.length - listLimit} ${tt('objects_gen')}`;
    more.onclick = () => { listLimit += 120; renderList(canals); };
    el.appendChild(more);
  } else if (listLimit > 120 && canals.length > 120) {
    const less = document.createElement('button');
    less.className = 'list-more-btn';
    less.textContent = tt('collapse_list');
    less.onclick = () => { listLimit = 120; renderList(canals); el.scrollIntoView({block:'start'}); };
    el.appendChild(less);
  }
}

// ── Alert Ticker ───────────────────────────────────────────
function rebuildAlertTicker() {
  const ticker = document.getElementById('alertTicker');
  if (ticker) ticker.innerHTML = '';
  buildAlertTicker();
}

function buildAlertTicker() {
  const allAlerts = [];
  CANALS_DATA.forEach(c => {
    c.sensors.alerts.forEach(a => {
      allAlerts.push({ canal: c.name, zone: c.zone, fault: c.sensors.fault, ...a });
    });
  });
  const ticker = document.getElementById('alertTicker');
  if (!allAlerts.length) { ticker.style.display = 'none'; return; }
  ticker.style.display = '';

  const inner = document.createElement('div');
  inner.className = 'ticker-inner';
  const label = document.createElement('div');
  label.className = 'ticker-label';
  label.innerHTML = `<i class="fa fa-triangle-exclamation"></i> ${tt('alerts_word')}`;

  const scroll = document.createElement('div'); scroll.className = 'ticker-scroll';
  allAlerts.forEach(a => {
    const span = document.createElement('span');
    span.className = `ticker-alert-item ${a.type}`;
    span.innerHTML = `<i class="fa-solid fa-circle-dot"></i> <b>${a.canal}</b> (${tZone(a.zone)}) — ${tAlert(a, a.fault)}`;
    inner.appendChild(span);
  });
  scroll.appendChild(inner);
  ticker.appendChild(label);
  ticker.appendChild(scroll);
}

// ── Detail Panel ───────────────────────────────────────────
function showDetail(id, isReservoir) {
  const c = isReservoir ? RESERVOIRS.find(x => x.id === id) : CANALS_DATA.find(x => x.id === id);
  if (!c) return;
  selectedId = id;
  selectedIsReservoir = !!isReservoir;
  document.getElementById('detailPlaceholder').style.display = 'none';
  document.getElementById('detailContent').style.display = 'block';

  const badge = document.getElementById('dStatusBadge');
  badge.textContent = tStatus(c.status);
  badge.className = `detail-status-badge badge-${c.status}`;

  document.getElementById('dName').textContent = isReservoir ? tResName(c) : c.name;
  document.getElementById('dZone').innerHTML = `<i class="fa-solid fa-location-dot"></i> ${tZone(c.zone)} · ${tt('region')}`;

  if (isReservoir) {
    // Show reservoir in sensor panel area
    const s_html = `<div style="font-size:11px;color:var(--text2);line-height:1.7;padding:6px">
      <b style="color:var(--accent2)">💧 ${tt('res_label')}</b><br>
      ${tt('res_river')} ${tSource(c.river)}<br>${tt('res_volume')} <b>${c.capacity_mln} ${tt('u_vol')}</b><br>
      ${tt('res_year')} <b>${c.year}</b><br><br>
      ${tResDesc(c)}
    </div>`;
    document.getElementById('sSensorStatus').textContent = `— ${tt('res_label')}`;
    document.getElementById('sSensorStatus').className = 'sensor-status online';
    ['flow','temp','level','turb','ph','cond'].forEach(k => {
      document.getElementById(`sv-${k}`).textContent = '—';
      document.getElementById(`sc-${k}`).className = 'sensor-card';
    });
    document.getElementById('sAlerts').innerHTML = '';
    const mw = document.querySelector('.minichart-wrap');
    mw.innerHTML = s_html;
    document.getElementById('sLastUpdate').textContent = '—';
    document.getElementById('sBattery').textContent = '—';
    document.getElementById('sensorFaultSection').style.display = 'none';

    // Object fields
    document.getElementById('dId').textContent = `#${c.id}`;
    document.getElementById('dYear').textContent = c.year || '—';
    document.getElementById('dSource').textContent = tSource(c.river);
    document.getElementById('dCap').textContent = `${c.capacity_mln} ${tt('u_vol')}`;
    document.getElementById('dLen').textContent = '—';
    document.getElementById('dArea').textContent = '—';
    document.getElementById('dKpd').textContent = '—';
    document.getElementById('dWear').textContent = '—';
    document.getElementById('dStructs').textContent = '—';
    document.getElementById('dInsp').textContent = `6 ${tt('u_mo')}`;

    const riskScore = c.status === 'critical' ? 80 : c.status === 'warning' ? 45 : 15;
    const riskCol = c.status === 'critical' ? '#ef4444' : c.status === 'warning' ? '#f59e0b' : '#22c55e';
    document.getElementById('dRiskFill').style.width = `${riskScore}%`;
    document.getElementById('dRiskFill').style.background = riskCol;
    document.getElementById('dRiskVal').textContent = `${riskScore} / 100`;
  } else {
    // Canal detail
    const s = c.sensors;
    document.getElementById('sSensorStatus').textContent = s.online ? tt('online') : tt('offline_dot');
    document.getElementById('sSensorStatus').className = `sensor-status ${s.online?'online':'offline'}`;

    fillSensor('flow', s.flow_speed, tt('u_flow'), s.flow_speed > 2 ? 'alert' : null);
    fillSensor('temp', s.temperature, '°C', s.temperature > 20 ? 'warn' : null);
    fillSensor('level', s.water_level, tt('u_m'), s.water_level > 1.7 ? 'alert' : null);
    fillSensor('turb', s.turbidity, 'NTU', s.turbidity > 30 ? 'warn' : null);
    fillSensor('ph', s.ph, 'pH', (s.ph < 6.5 || s.ph > 8.5) ? 'warn' : null);
    fillSensor('cond', s.conductivity, tt('u_cond'), null);

    const alertsEl = document.getElementById('sAlerts');
    alertsEl.innerHTML = '';
    s.alerts.forEach(a => {
      const div = document.createElement('div');
      div.className = `sensor-alert-item ${a.type}`;
      const icons = { critical:'circle-xmark', warning:'triangle-exclamation', info:'circle-info' };
      div.innerHTML = `<i class="fa-solid fa-${icons[a.type]||'circle-dot'}"></i> ${tAlert(a, s.fault)}`;
      alertsEl.appendChild(div);
    });

    // Restore minichart if it was replaced by reservoir view
    const mw = document.querySelector('.minichart-wrap');
    mw.innerHTML = `<div class="minichart-title"><i class="fa-solid fa-chart-line"></i> ${tt('mini_title')}</div><canvas id="miniChart" height="60"></canvas>`;
    drawMiniChart(s.history);

    document.getElementById('sLastUpdate').textContent = s.last_update;
    document.getElementById('sBattery').textContent = s.battery;

    // Sensor fault section
    const faultSection = document.getElementById('sensorFaultSection');
    if (s.fault) {
      const fl = tFault(s.fault);
      faultSection.style.display = 'block';
      document.getElementById('fComponent').textContent = fl.component;
      document.getElementById('fCode').textContent = fl.code;
      const prioMap = { 'высокий': 'high', 'средний': 'medium', 'низкий': 'low' };
      const prioKey = { 'высокий': 'prio_high', 'средний': 'prio_medium', 'низкий': 'prio_low' };
      const fp = document.getElementById('fPriority');
      fp.textContent = tt(prioKey[s.fault.priority] || 'prio_medium');
      fp.className = `fault-priority ${prioMap[s.fault.priority] || 'medium'}`;
      document.getElementById('fFault').textContent = fl.fault;
      document.getElementById('fDetail').textContent = fl.detail;
      document.getElementById('fFix').textContent = fl.fix;
    } else {
      faultSection.style.display = 'none';
    }

    // Object fields
    document.getElementById('dId').textContent = `#${c.id}`;
    document.getElementById('dYear').textContent = c.year || '—';
    document.getElementById('dSource').textContent = tSource(c.source);
    document.getElementById('dCap').textContent = c.capacity ? `${c.capacity} ${tt('u_cap')}` : '—';
    document.getElementById('dLen').textContent = c.length ? `${c.length} ${tt('u_len')}` : '—';
    document.getElementById('dArea').textContent = c.area ? `${c.area.toLocaleString(currentLang)} ${tt('u_area')}` : '—';
    document.getElementById('dKpd').textContent = `${c.kpd_proj || '—'} / ${c.kpd_fact || '—'}`;
    document.getElementById('dWear').textContent = c.wear ? `${Math.round(c.wear*100)}%` : '—';
    document.getElementById('dStructs').textContent = c.structures || '—';
    document.getElementById('dInsp').textContent = `${c.inspection_months} ${tt('u_mo')}`;

    const riskCol = c.risk_score >= 70 ? '#ef4444' : c.risk_score >= 40 ? '#f59e0b' : '#22c55e';
    document.getElementById('dRiskFill').style.width = `${c.risk_score}%`;
    document.getElementById('dRiskFill').style.background = riskCol;
    document.getElementById('dRiskVal').textContent = `${c.risk_score} / 100`;
  }

  // Defect panel — shown for both canals and reservoirs
  if (c.defect) {
    const d = tDefect(c);
    const ru = c.defect; // urgency class keyed off the stable RU value
    document.getElementById('dDefectCode').textContent = d.code;
    document.getElementById('dDefectName').textContent = d.name;
    document.getElementById('dDefectDesc').textContent = d.desc;
    document.getElementById('dDefectRemedy').textContent = d.remedy;
    const urgEl = document.getElementById('dDefectUrgency');
    urgEl.textContent = d.urgency;
    const urgClass = ru.urgency === 'немедленно' || ru.urgency === '1-3 дня' ? 'u-critical' :
                     ru.urgency.includes('недел') || ru.urgency.includes('месяц') ? 'u-warning' : 'u-ok';
    urgEl.className = `defect-urgency ${urgClass}`;
    document.getElementById('defectPanel').style.display = 'block';
  } else {
    document.getElementById('defectPanel').style.display = 'none';
  }

  // Highlight the selected object in the list and on the map
  if (!selectedIsReservoir) {
    const idx = filteredCanals.findIndex(x => x.id === selectedId);
    if (idx >= listLimit) listLimit = Math.ceil((idx + 1) / 120) * 120;
  }
  renderList(filteredCanals);
  renderMarkers(filteredCanals);
  // Ensure the selected list row is visible
  const selRow = document.querySelector('.canal-item.selected');
  if (selRow) selRow.scrollIntoView({ block: 'nearest' });
}

function showReservoirDetail(id) {
  const r = RESERVOIRS.find(x => x.id === id);
  if (!r) return;
  map.flyTo([r.lat, r.lon], 10, { duration: 0.7 });
  showDetail(r.id, true);
}

function fillSensor(key, val, unit, alertClass) {
  const card = document.getElementById(`sc-${key}`);
  document.getElementById(`sv-${key}`).textContent = val !== undefined ? val : '—';
  card.className = 'sensor-card' + (alertClass ? ` ${alertClass}-card` : '');
}

function drawMiniChart(history) {
  const canvas = document.getElementById('miniChart');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const dpr = window.devicePixelRatio || 1;
  const W = canvas.offsetWidth || 270, H = 60;
  canvas.width = W * dpr; canvas.height = H * dpr;
  ctx.scale(dpr, dpr);
  ctx.clearRect(0, 0, W, H);

  const vals = history.map(h => h.f !== undefined ? h.f : (h.flow_speed || 0));
  const minV = Math.min(...vals), maxV = Math.max(...vals);
  const range = maxV - minV || 0.01;
  const pad = 5;

  ctx.strokeStyle = '#2d3148'; ctx.lineWidth = 0.5;
  [0.25,0.5,0.75].forEach(t => {
    const y = pad + (1 - t) * (H - pad*2);
    ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
  });

  const grad = ctx.createLinearGradient(0, 0, 0, H);
  grad.addColorStop(0, 'rgba(6,182,212,0.3)');
  grad.addColorStop(1, 'rgba(6,182,212,0.0)');
  ctx.beginPath();
  vals.forEach((v, i) => {
    const x = (i / (vals.length - 1)) * W;
    const y = pad + (1 - (v - minV) / range) * (H - pad*2);
    i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
  });
  ctx.lineTo(W, H); ctx.lineTo(0, H); ctx.closePath();
  ctx.fillStyle = grad; ctx.fill();

  ctx.beginPath(); ctx.strokeStyle = '#06b6d4'; ctx.lineWidth = 1.5;
  vals.forEach((v, i) => {
    const x = (i / (vals.length - 1)) * W;
    const y = pad + (1 - (v - minV) / range) * (H - pad*2);
    i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
  });
  ctx.stroke();

  ctx.fillStyle = '#64748b'; ctx.font = '8px Segoe UI'; ctx.textAlign = 'left';
  ctx.fillText(`${maxV.toFixed(2)}`, 2, pad + 7);
  ctx.fillText(`${minV.toFixed(2)}`, 2, H - 2);
  ctx.textAlign = 'right'; ctx.fillText('0ч', W, H - 2);
  ctx.textAlign = 'left'; ctx.fillText('24ч', 2, H - 2);
}

// ── 3D Sensor Diagram ─────────────────────────────────────
function show3DView() {
  const isRes = selectedIsReservoir;
  const obj = isRes ? RESERVOIRS.find(x=>x.id===selectedId) : CANALS_DATA.find(x=>x.id===selectedId);
  const title = isRes ? tt('d3_res') : tt('d3_canal');
  const svgContent = isRes ? build3DReservoirSVG(obj) : build3DCanalSVG(obj);
  document.getElementById('diagram3dTitle').textContent = title;
  document.getElementById('diagram3dBody').innerHTML = svgContent;
  document.getElementById('diagram3dModal').style.display = 'flex';
}
function close3DView() { document.getElementById('diagram3dModal').style.display = 'none'; }

function build3DCanalSVG(obj) {
  const s = obj?.sensors || {};
  const fault = s.fault;
  const faultComp = fault ? fault.component : null;
  const isBad = (comp) => faultComp && faultComp.includes(comp);

  const flowCol  = isBad('расхода')    ? '#ef4444' : '#06b6d4';
  const levelCol = isBad('уровня')     ? '#ef4444' : '#3b82f6';
  const tempCol  = isBad('температуры')? '#ef4444' : '#f97316';
  const turbCol  = isBad('мутности')   ? '#ef4444' : '#a78bfa';
  const phCol    = isBad('pH')         ? '#ef4444' : '#22c55e';
  const batCol   = isBad('Аккумулятор')? '#ef4444' : '#22c55e';
  const cableCol = isBad('Кабельная')  ? '#ef4444' : '#64748b';

  const okGate = !fault;
  return `<svg viewBox="0 0 780 500" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-height:70vh">
  <defs>
    <linearGradient id="skyG" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#7dd3fc"/><stop offset="55%" stop-color="#bae6fd"/><stop offset="100%" stop-color="#e0f2fe"/>
    </linearGradient>
    <linearGradient id="waterTop" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#3b82f6"/><stop offset="100%" stop-color="#1d4ed8"/>
    </linearGradient>
    <linearGradient id="waterFront" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#1e40af"/><stop offset="100%" stop-color="#172554"/>
    </linearGradient>
    <linearGradient id="concTop" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#e5e7eb"/><stop offset="100%" stop-color="#cbd5e1"/>
    </linearGradient>
    <linearGradient id="concFront" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#cbd5e1"/><stop offset="100%" stop-color="#94a3b8"/>
    </linearGradient>
    <linearGradient id="concSide" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#94a3b8"/><stop offset="100%" stop-color="#64748b"/>
    </linearGradient>
    <linearGradient id="gateG" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#475569"/><stop offset="100%" stop-color="#334155"/>
    </linearGradient>
    <marker id="fArr" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M0,0 L0,8 L8,4 z" fill="#1e3a8a"/>
    </marker>
  </defs>

  <!-- Sky + ground -->
  <rect width="780" height="500" fill="url(#skyG)" rx="8"/>
  <rect y="250" width="780" height="250" fill="#a3b18a"/>
  <polygon points="0,250 780,250 780,300 0,330" fill="#b7c79a" opacity="0.6"/>

  <!-- Upstream water (top, behind structure) -->
  <polygon points="120,205 660,205 700,255 80,255" fill="url(#waterTop)"/>
  <path d="M150,225 Q250,219 350,225 Q450,231 550,225 Q620,221 640,225" stroke="#93c5fd" stroke-width="1.5" fill="none" opacity="0.7"/>
  <path d="M120,240 Q230,234 340,240 Q470,246 600,240" stroke="#bfdbfe" stroke-width="1" fill="none" opacity="0.5"/>

  <!-- ===== Main concrete gate structure (isometric) ===== -->
  <!-- Left abutment (bank pier) -->
  <polygon points="80,255 150,255 150,400 80,400" fill="url(#concFront)" stroke="#64748b" stroke-width="1"/>
  <polygon points="80,255 150,255 165,240 95,240" fill="url(#concTop)" stroke="#64748b" stroke-width="0.8"/>
  <polygon points="150,255 165,240 165,385 150,400" fill="url(#concSide)" stroke="#64748b" stroke-width="0.8"/>

  <!-- Right abutment -->
  <polygon points="630,255 700,255 700,400 630,400" fill="url(#concFront)" stroke="#64748b" stroke-width="1"/>
  <polygon points="630,255 700,255 715,240 645,240" fill="url(#concTop)" stroke="#64748b" stroke-width="0.8"/>
  <polygon points="700,255 715,240 715,385 700,400" fill="url(#concSide)" stroke="#64748b" stroke-width="0.8"/>

  <!-- Mid piers (between gates) -->
  ${[270, 410, 550].map(x => `
  <polygon points="${x},255 ${x+30},255 ${x+30},395 ${x},395" fill="url(#concFront)" stroke="#64748b" stroke-width="0.8"/>
  <polygon points="${x},255 ${x+30},255 ${x+42},242 ${x+12},242" fill="url(#concTop)" stroke="#64748b" stroke-width="0.6"/>
  <polygon points="${x+30},255 ${x+42},242 ${x+42},382 ${x+30},395" fill="url(#concSide)" stroke="#64748b" stroke-width="0.6"/>`).join('')}

  <!-- Water flowing through gate bays (front face) -->
  <rect x="150" y="300" width="120" height="100" fill="url(#waterFront)"/>
  <rect x="300" y="300" width="110" height="100" fill="url(#waterFront)"/>
  <rect x="440" y="300" width="110" height="100" fill="url(#waterFront)"/>
  <rect x="580" y="300" width="50" height="100" fill="url(#waterFront)"/>

  <!-- Vertical lift gates (3 main bays) -->
  ${[{x:185,n:1},{x:335,n:2},{x:475,n:3}].map(g => `
  <rect x="${g.x}" y="262" width="70" height="55" rx="2" fill="url(#gateG)" stroke="#1e293b" stroke-width="1.2"/>
  <line x1="${g.x+10}" y1="262" x2="${g.x+10}" y2="317" stroke="#1e293b" stroke-width="0.8" opacity="0.5"/>
  <line x1="${g.x+35}" y1="262" x2="${g.x+35}" y2="317" stroke="#1e293b" stroke-width="0.8" opacity="0.5"/>
  <line x1="${g.x+60}" y1="262" x2="${g.x+60}" y2="317" stroke="#1e293b" stroke-width="0.8" opacity="0.5"/>
  <line x1="${g.x}" y1="280" x2="${g.x+70}" y2="280" stroke="#1e293b" stroke-width="0.8" opacity="0.5"/>
  <line x1="${g.x}" y1="298" x2="${g.x+70}" y2="298" stroke="#1e293b" stroke-width="0.8" opacity="0.5"/>
  <text x="${g.x+35}" y="293" text-anchor="middle" fill="#cbd5e1" font-size="11" font-weight="700">${g.n}</text>
  <!-- gate hoist screw -->
  <rect x="${g.x+31}" y="238" width="8" height="26" fill="#9ca3af" stroke="#64748b" stroke-width="0.6"/>`).join('')}

  <!-- Flow arrows through gates -->
  <line x1="200" y1="350" x2="240" y2="350" stroke="#1e3a8a" stroke-width="2.5" marker-end="url(#fArr)" opacity="0.8"/>
  <line x1="350" y1="350" x2="390" y2="350" stroke="#1e3a8a" stroke-width="2.5" marker-end="url(#fArr)" opacity="0.8"/>
  <line x1="490" y1="350" x2="530" y2="350" stroke="#1e3a8a" stroke-width="2.5" marker-end="url(#fArr)" opacity="0.8"/>

  <!-- ===== Service bridge / walkway on top ===== -->
  <polygon points="95,240 715,240 730,228 110,228" fill="url(#concTop)" stroke="#64748b" stroke-width="1"/>
  <polygon points="95,240 715,240 715,232 95,232" fill="#94a3b8"/>
  <!-- Railings -->
  <line x1="110" y1="228" x2="730" y2="228" stroke="#475569" stroke-width="1.5"/>
  ${Array.from({length:13},(_,i)=>`<line x1="${120+i*50}" y1="228" x2="${120+i*50}" y2="216" stroke="#475569" stroke-width="1.2"/>`).join('')}
  <line x1="120" y1="216" x2="720" y2="216" stroke="#475569" stroke-width="1.5"/>

  <!-- ===== Control house on bridge ===== -->
  <rect x="595" y="168" width="86" height="62" fill="#e2e8f0" stroke="#94a3b8" stroke-width="1.2"/>
  <polygon points="595,168 681,168 695,156 609,156" fill="#cbd5e1" stroke="#94a3b8" stroke-width="1"/>
  <polygon points="681,168 695,156 695,218 681,230" fill="#94a3b8" stroke="#64748b" stroke-width="0.8"/>
  <polygon points="595,130 681,130 695,118 609,118 595,130" fill="#dc2626" stroke="#b91c1c" stroke-width="1"/>
  <polygon points="595,168 681,168 695,156 609,156" fill="#b45309"/>
  <polygon points="595,130 595,168 609,156 609,118" fill="#92400e"/>
  <rect x="608" y="182" width="20" height="20" fill="#7dd3fc" stroke="#475569" stroke-width="1"/>
  <rect x="648" y="182" width="20" height="20" fill="#7dd3fc" stroke="#475569" stroke-width="1"/>
  <rect x="630" y="200" width="14" height="30" fill="#94a3b8" stroke="#475569" stroke-width="0.8"/>
  <text x="638" y="150" text-anchor="middle" fill="#1e293b" font-size="8.5" font-weight="700">Пост управления</text>
  <!-- Solar panel + antenna on roof -->
  <polygon points="700,150 740,142 740,154 700,162" fill="#1e3a8a" stroke="#3b82f6" stroke-width="0.8"/>
  <line x1="720" y1="146" x2="720" y2="156" stroke="#3b82f6" stroke-width="0.5"/>
  <line x1="730" y1="144" x2="730" y2="154" stroke="#3b82f6" stroke-width="0.5"/>
  <line x1="690" y1="156" x2="690" y2="120" stroke="#475569" stroke-width="1.5"/>
  <line x1="690" y1="120" x2="698" y2="110" stroke="#475569" stroke-width="1"/>
  <line x1="690" y1="120" x2="682" y2="110" stroke="#475569" stroke-width="1"/>

  <!-- ===== SENSORS with labels ===== -->
  <!-- Water level / radar (on bridge, looking down upstream) -->
  <rect x="155" y="206" width="16" height="14" rx="2" fill="${levelCol}" stroke="#1e293b" stroke-width="0.8"/>
  <line x1="163" y1="220" x2="163" y2="250" stroke="${levelCol}" stroke-width="1" stroke-dasharray="2 2"/>
  <circle cx="163" cy="250" r="2.5" fill="${levelCol}"/>
  <text x="178" y="200" fill="${levelCol}" font-size="9.5" font-weight="700">Уровнемер (радар)</text>
  <text x="178" y="211" fill="#1e293b" font-size="7.5">бесконтактный, НПУ/УМО</text>

  <!-- Flow / ultrasonic (in gate bay 1) -->
  <rect x="208" y="335" width="36" height="11" rx="3" fill="${flowCol}" stroke="#0c4a6e" stroke-width="0.8"/>
  <text x="226" y="343" text-anchor="middle" fill="#fff" font-size="7" font-weight="700">УЗ-расход</text>
  <line x1="226" y1="346" x2="150" y2="430" stroke="${flowCol}" stroke-width="0.9" stroke-dasharray="3 2"/>
  <text x="60" y="438" fill="${flowCol}" font-size="9.5" font-weight="700">Расходомер УЗ</text>
  <text x="60" y="449" fill="#1e293b" font-size="7.5">врезной, ±1% (м³/с)</text>

  <!-- Temperature + pH + turbidity (multiprobe in bay 2) -->
  <rect x="358" y="332" width="24" height="14" rx="3" fill="#0f172a" stroke="#475569" stroke-width="0.8"/>
  <circle cx="364" cy="339" r="2.5" fill="${tempCol}"/>
  <circle cx="370" cy="339" r="2.5" fill="${phCol}"/>
  <circle cx="376" cy="339" r="2.5" fill="${turbCol}"/>
  <line x1="370" y1="346" x2="370" y2="430" stroke="#475569" stroke-width="0.9" stroke-dasharray="3 2"/>
  <text x="390" y="425" fill="#1e293b" font-size="9.5" font-weight="700">Мультизонд качества воды</text>
  <text x="390" y="436" fill="${tempCol}" font-size="7.5">● T° (Pt100)  </text>
  <text x="455" y="436" fill="${phCol}" font-size="7.5">● pH</text>
  <text x="485" y="436" fill="${turbCol}" font-size="7.5">● Мутность (NTU)</text>
  <text x="390" y="447" fill="#1e293b" font-size="7.5">корпус AISI-316, защита нерж. сеткой Ø150мм</text>

  <!-- Gate position / piezometer in pier -->
  <circle cx="490" cy="290" r="5" fill="#f59e0b" stroke="#92400e" stroke-width="0.8"/>
  <text x="500" y="285" fill="#b45309" font-size="9" font-weight="700">Датчик положения затвора</text>

  <!-- Data cable to control house -->
  <path d="M226,346 Q400,360 595,210" stroke="${cableCol}" stroke-width="1.3" stroke-dasharray="5 3" fill="none" opacity="0.7"/>

  <!-- Bank labels -->
  <text x="115" y="475" fill="#3f4d2e" font-size="9" font-style="italic">Левый берег</text>
  <text x="660" y="475" fill="#3f4d2e" font-size="9" font-style="italic">Правый берег</text>
  <text x="390" y="232" text-anchor="middle" fill="#1e3a8a" font-size="8.5" font-weight="600" opacity="0.85">верхний бьеф →</text>

  <!-- Status footer -->
  ${okGate ?
  `<rect x="10" y="482" width="760" height="16" rx="3" fill="rgba(34,197,94,0.15)" stroke="rgba(34,197,94,0.4)" stroke-width="0.8"/>
  <text x="390" y="493" text-anchor="middle" fill="#15803d" font-size="9" font-weight="600">✓ Все датчики в норме · 3 затвора · бетонное водопропускное сооружение · телеметрия 24/7</text>` :
  `<rect x="10" y="482" width="760" height="16" rx="3" fill="rgba(239,68,68,0.15)" stroke="rgba(239,68,68,0.4)" stroke-width="0.8"/>
  <text x="390" y="493" text-anchor="middle" fill="#b91c1c" font-size="9" font-weight="600">⚠ ${fault.fault} — ${fault.fix.substring(0,70)}</text>`}
</svg>`;
}

function build3DReservoirSVG(obj) {
  return `<svg viewBox="0 0 780 480" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-height:68vh">
  <defs>
    <linearGradient id="rWater" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#1d4ed8" stop-opacity="0.7"/>
      <stop offset="100%" stop-color="#1e3a8a" stop-opacity="0.9"/>
    </linearGradient>
    <linearGradient id="rDam" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#4b5563"/>
      <stop offset="100%" stop-color="#6b7280"/>
    </linearGradient>
    <marker id="rArr" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto">
      <path d="M0,0 L0,7 L7,3.5 z" fill="#60a5fa" opacity="0.7"/>
    </marker>
  </defs>
  <rect width="780" height="480" fill="#0f1117" rx="8"/>

  <!-- Upstream water (reservoir) -->
  <polygon points="0,130 330,230 330,420 0,420" fill="url(#rWater)" opacity="0.85"/>
  <!-- Water surface -->
  <path d="M0,130 Q80,125 160,130 Q240,135 330,130" stroke="#60a5fa" stroke-width="1.5" fill="none"/>

  <!-- Earth dam body -->
  <polygon points="300,120 460,120 500,420 260,420" fill="url(#rDam)"/>
  <!-- Dam crest road -->
  <rect x="300" y="110" width="160" height="15" rx="2" fill="#374151"/>
  <line x1="300" y1="118" x2="460" y2="118" stroke="#6b7280" stroke-width="0.8" stroke-dasharray="8 4"/>
  <!-- Dam label -->
  <text x="380" y="240" text-anchor="middle" fill="#9ca3af" font-size="11" font-weight="700" opacity="0.8">ЗЕМЛЯНАЯ ПЛОТИНА</text>
  <text x="380" y="254" text-anchor="middle" fill="#6b7280" font-size="9">h=50-80 м</text>

  <!-- Downstream -->
  <polygon points="480,230 780,180 780,420 480,420" fill="#1e2235"/>

  <!-- Bottom outlet (водосброс) -->
  <rect x="310" y="370" width="140" height="25" rx="4" fill="#1e3a8a" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="380" y="387" text-anchor="middle" fill="#93c5fd" font-size="9" font-weight="600">Донный водосброс</text>
  <!-- Flow from outlet -->
  <line x1="450" y1="382" x2="490" y2="382" stroke="#60a5fa" stroke-width="2" marker-end="url(#rArr)"/>

  <!-- Piezometer installation in dam -->
  <line x1="360" y1="125" x2="350" y2="340" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="4 2"/>
  <circle cx="350" cy="345" r="5" fill="#f59e0b"/>
  <text x="340" y="330" text-anchor="end" fill="#f59e0b" font-size="8">Пьезометр П-1</text>
  <line x1="400" y1="125" x2="395" y2="350" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="4 2"/>
  <circle cx="395" cy="355" r="5" fill="#f59e0b"/>
  <text x="430" y="340" fill="#f59e0b" font-size="8">Пьезометр П-2</text>

  <!-- Settlement markers on crest -->
  <rect x="325" y="105" width="6" height="12" fill="#22c55e"/>
  <rect x="375" y="105" width="6" height="12" fill="#22c55e"/>
  <rect x="425" y="105" width="6" height="12" fill="#22c55e"/>
  <text x="380" y="100" text-anchor="middle" fill="#22c55e" font-size="8">▲ Нивелирные марки (осадка)</text>

  <!-- Water level sensor on upstream face -->
  <rect x="295" y="165" width="16" height="55" rx="4" fill="#1e293b" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="303" y="200" text-anchor="middle" fill="#3b82f6" font-size="7" writing-mode="tb">УВ</text>
  <line x1="295" y1="182" x2="260" y2="182" stroke="#3b82f6" stroke-width="0.8" stroke-dasharray="3 2"/>
  <text x="255" y="178" text-anchor="end" fill="#3b82f6" font-size="9">Уровнемер</text>
  <text x="255" y="188" text-anchor="end" fill="#64748b" font-size="7.5">НПУ / УМО</text>

  <!-- Seepage meter downstream -->
  <circle cx="510" cy="310" r="12" fill="#06b6d4" opacity="0.8"/>
  <text x="510" y="315" text-anchor="middle" fill="#fff" font-size="7.5" font-weight="700">Ф</text>
  <line x1="522" y1="310" x2="560" y2="300" stroke="#06b6d4" stroke-width="0.8" stroke-dasharray="3 2"/>
  <text x="565" y="296" fill="#06b6d4" font-size="9" font-weight="700">Фильтрация</text>
  <text x="565" y="307" fill="#64748b" font-size="7.5">V-образный водослив</text>

  <!-- Inclinometer -->
  <line x1="430" y1="125" x2="455" y2="370" stroke="#a78bfa" stroke-width="1.5" stroke-dasharray="4 2"/>
  <text x="470" y="260" fill="#a78bfa" font-size="8">Инклинометр</text>
  <text x="470" y="270" fill="#64748b" font-size="7.5">(деформации)</text>

  <!-- Monitoring station -->
  <rect x="650" y="170" width="90" height="65" rx="6" fill="#1e2235" stroke="#4b5563" stroke-width="1.5"/>
  <rect x="663" y="150" width="64" height="22" rx="2" fill="#1e3a8a" stroke="#3b82f6" stroke-width="1"/>
  <line x1="676" y1="150" x2="676" y2="172" stroke="#3b82f6" stroke-width="0.6" opacity="0.7"/>
  <line x1="688" y1="150" x2="688" y2="172" stroke="#3b82f6" stroke-width="0.6" opacity="0.7"/>
  <line x1="700" y1="150" x2="700" y2="172" stroke="#3b82f6" stroke-width="0.6" opacity="0.7"/>
  <text x="695" y="147" fill="#3b82f6" font-size="7.5">☀ солн. панель</text>
  <circle cx="662" cy="185" r="3.5" fill="#22c55e"/>
  <circle cx="672" cy="185" r="3.5" fill="#22c55e"/>
  <circle cx="682" cy="185" r="3.5" fill="#f59e0b"/>
  <text x="695" y="200" text-anchor="middle" fill="#94a3b8" font-size="8">SCADA</text>
  <text x="695" y="212" text-anchor="middle" fill="#94a3b8" font-size="7.5">Мониторинг 24/7</text>
  <line x1="732" y1="172" x2="732" y2="142" stroke="#9ca3af" stroke-width="1.5"/>
  <line x1="732" y1="142" x2="740" y2="130" stroke="#9ca3af" stroke-width="1"/>
  <line x1="732" y1="142" x2="724" y2="130" stroke="#9ca3af" stroke-width="1"/>

  <!-- Cable to dam -->
  <path d="M650,200 Q580,200 500,220" stroke="#64748b" stroke-width="1.2" stroke-dasharray="5 3" fill="none"/>

  <!-- Bottom info bar -->
  <rect x="10" y="440" width="760" height="28" rx="4" fill="rgba(59,130,246,0.08)" stroke="rgba(59,130,246,0.2)" stroke-width="1"/>
  <text x="390" y="458" text-anchor="middle" fill="#93c5fd" font-size="10">Контроль: уровень воды · пьезометры · осадка гребня · инклинометр · фильтрация · затвор</text>
</svg>`;
}

function closeDetail() {
  document.getElementById('detailPlaceholder').style.display = 'flex';
  document.getElementById('detailContent').style.display = 'none';
  selectedId = null;
}

// ── Live sensor simulation ─────────────────────────────────
function simulateSensorUpdate() {
  if (!selectedId || selectedIsReservoir) return;
  const c = CANALS_DATA.find(x => x.id === selectedId);
  if (!c || !c.sensors.online) return;
  const s = c.sensors;
  const drift = v => +(v + (Math.random()-0.5)*0.06).toFixed(3);
  s.flow_speed = Math.max(0.01, drift(s.flow_speed));
  s.temperature = +(s.temperature + (Math.random()-0.5)*0.3).toFixed(1);
  s.water_level = Math.max(0.1, +(s.water_level + (Math.random()-0.5)*0.04).toFixed(2));
  s.turbidity = Math.max(1, +(s.turbidity + (Math.random()-0.5)*1.5).toFixed(1));
  s.history.push({ h: s.history.length, f: s.flow_speed, t: s.temperature });
  if (s.history.length > 48) s.history.shift();
  fillSensor('flow', s.flow_speed, 'м/с', s.flow_speed > 2 ? 'alert' : null);
  fillSensor('temp', s.temperature, '°C', s.temperature > 20 ? 'warn' : null);
  fillSensor('level', s.water_level, 'м', s.water_level > 1.7 ? 'alert' : null);
  fillSensor('turb', s.turbidity, 'NTU', s.turbidity > 30 ? 'warn' : null);
  drawMiniChart(s.history);
}

// ── Report ──────────────────────────────────────────────────
function generateReport() {
  const c = selectedIsReservoir
    ? RESERVOIRS.find(x => x.id === selectedId)
    : CANALS_DATA.find(x => x.id === selectedId);
  if (!c) return;

  const statLabel = tStatus(c.status);
  const statCol = c.status === 'ok' ? '#22c55e' : c.status === 'warning' ? '#f59e0b' : '#ef4444';
  const d = tDefect(c) || {};
  const loc = currentLang === 'en' ? 'en-US' : 'ru-RU';
  const nextInsp = new Date(); nextInsp.setMonth(nextInsp.getMonth() + (c.inspection_months || 6));

  let sensorSection = '';
  if (!selectedIsReservoir && c.sensors) {
    const s = c.sensors;
    const fl = tFault(s.fault);
    const age = 2026 - (c.year || 1970);
    const kpdDiff = ((c.kpd_proj - c.kpd_fact) / Math.max(c.kpd_proj, 0.01) * 100).toFixed(1);
    sensorSection = `
    <div class="report-section">
      <h4>${tt('rep_sensors')}</h4>
      <table class="report-table">
        <tr><th>${tt('rep_param')}</th><th>${tt('rep_value')}</th><th>${tt('rep_assess')}</th></tr>
        <tr><td>${tt('sl_flow')}</td><td>${s.flow_speed} ${tt('u_flow')}</td><td>${s.flow_speed>2?tt('rep_high'):tt('rep_norm')}</td></tr>
        <tr><td>${tt('sl_temp')}</td><td>${s.temperature} °C</td><td>${s.temperature>20?tt('rep_elev'):tt('rep_norm')}</td></tr>
        <tr><td>${tt('sl_level')}</td><td>${s.water_level} ${tt('u_m')}</td><td>${s.water_level>1.7?tt('rep_highm'):tt('rep_norm')}</td></tr>
        <tr><td>${tt('sl_turb')}</td><td>${s.turbidity} NTU</td><td>${s.turbidity>30?tt('rep_high'):tt('rep_norm')}</td></tr>
        <tr><td>${tt('sl_ph')} (pH)</td><td>${s.ph}</td><td>${(s.ph<6.5||s.ph>8.5)?tt('rep_dev'):tt('rep_norm')}</td></tr>
        <tr><td>${tt('sl_cond')}</td><td>${s.conductivity} ${tt('u_cond')}</td><td>—</td></tr>
        <tr><td>${tt('rep_sstate')}</td><td colspan="2" style="color:${s.online?'#22c55e':'#ef4444'}">${s.online?tt('rep_online'):tt('rep_offline')} · ${tt('rep_batt')} ${s.battery}% · ${s.last_update}</td></tr>
      </table>
    </div>
    ${fl ? `<div class="report-section">
      <h4>${tt('rep_fault')} ${fl.component}</h4>
      <p><b>${tt('rep_code')}</b> ${fl.code} · <b>${tt('rep_prio')}</b> ${tt({'высокий':'prio_high','средний':'prio_medium','низкий':'prio_low'}[s.fault.priority]||'prio_medium')}<br>
      <b>${tt('rep_flt')}</b> ${fl.fault}<br>
      <b>${tt('rep_desc')}</b> ${fl.detail}<br>
      <b>${tt('rep_fix')}</b> ${fl.fix}</p>
    </div>` : ''}
    <div class="report-section">
      <h4>${tt('rep_tech')}</h4>
      <table class="report-table">
        <tr><th>${tt('rep_param')}</th><th>${tt('rep_value')}</th></tr>
        <tr><td>${tt('rep_status')}</td><td style="color:${statCol}">${statLabel}</td></tr>
        <tr><td>${tt('rep_risk')}</td><td>${c.risk_score}/100</td></tr>
        <tr><td>${tt('rep_wear')}</td><td>${Math.round(c.wear*100)}%</td></tr>
        <tr><td>${tt('rep_age')}</td><td>${age} ${tt('rep_years')} ${c.year})</td></tr>
        <tr><td>${tt('rep_kpddrop')}</td><td>${kpdDiff}%</td></tr>
        <tr><td>${tt('og_cap')}</td><td>${c.capacity} ${tt('u_cap')}</td></tr>
        <tr><td>${tt('og_len')}</td><td>${c.length} ${tt('u_len')}</td></tr>
        <tr><td>${tt('og_area')}</td><td>${(c.area||0).toLocaleString(loc)} ${tt('u_area')}</td></tr>
      </table>
    </div>`;
  }

  document.getElementById('reportBody').innerHTML = `
    <div class="report-section">
      <h4>${tt('rep_obj')} ${selectedIsReservoir ? tResName(c) : c.name}</h4>
      <p>${tt('rep_type')} ${selectedIsReservoir ? tt('type_reservoir') : tt('type_canal')}<br>
      ${tt('rep_district')} ${tZone(c.zone)} · ${tt('region')}<br>
      ${tt('rep_date')} ${new Date().toLocaleDateString(loc)} ${new Date().toLocaleTimeString(loc)}</p>
    </div>
    ${sensorSection}
    <div class="report-section">
      <h4>${tt('rep_defect')}</h4>
      <p><b>${tt('rep_code')}</b> ${d.code || '—'} · <b>${tt('rep_urg')}</b> ${d.urgency || '—'}<br>
      <b>${tt('pp_defect')}</b> ${d.name || '—'}<br>
      <b>${tt('rep_desc')}</b> ${d.desc || '—'}<br>
      <b>${tt('rep_remedy')}</b> ${d.remedy || '—'}</p>
    </div>
    <div class="report-section">
      <h4>${tt('rep_sched')}</h4>
      <p><b>${tt('rep_period')}</b> ${c.inspection_months || 6} ${tt('u_mo')}<br>
      <b>${tt('rep_next')}</b> ${nextInsp.toLocaleDateString(loc)}</p>
      ${c.status==='critical'?`<p style="color:#ef4444;margin-top:6px">${tt('rep_critnote')}</p>`:''}
      ${c.status==='warning'?`<p style="color:#f59e0b;margin-top:6px">${tt('rep_warnnote')}</p>`:''}
      ${c.status==='ok'?`<p style="color:#22c55e;margin-top:6px">${tt('rep_oknote')}</p>`:''}
    </div>`;
  document.getElementById('reportModal').style.display = 'flex';
}

function closeReport() { document.getElementById('reportModal').style.display = 'none'; }

function printReport() {
  const body = document.getElementById('reportBody').innerHTML;
  const loc = currentLang === 'en' ? 'en-US' : 'ru-RU';
  const w = window.open('', '_blank', 'width=900,height=700');
  w.document.write(`<!DOCTYPE html><html lang="${currentLang}"><head><meta charset="utf-8">
<title>${tt('print_title')}</title>
<style>
  @page { margin: 15mm 12mm; size: A4 portrait; }
  body { font-family: 'Segoe UI', Arial, sans-serif; color: #000; background: #fff; margin: 0; padding: 16px; font-size: 13px; }
  .report-section h4 { font-size: 14px; margin: 16px 0 6px; border-bottom: 1px solid #999; padding-bottom: 4px; }
  .report-table { width: 100%; border-collapse: collapse; margin-bottom: 12px; }
  .report-table th, .report-table td { border: 1px solid #ccc; padding: 6px 10px; text-align: left; }
  .report-table th { background: #f5f5f5; font-weight: 600; }
  .badge { display: inline-block; padding: 2px 8px; border-radius: 4px; font-size: 11px; font-weight: 600; }
  .badge-ok { background:#d1fae5; color:#065f46; }
  .badge-warning { background:#fef3c7; color:#92400e; }
  .badge-critical { background:#fee2e2; color:#991b1b; }
  p { margin: 3px 0; }
  .print-header { display: flex; justify-content: space-between; font-size: 11px; color: #555; border-bottom: 1px solid #ccc; padding-bottom: 6px; margin-bottom: 12px; }
</style></head><body>
<div class="print-header"><span>${tt('print_header')}</span><span>${new Date().toLocaleString(loc)}</span></div>
${body}
<script>window.onload=function(){window.print();}<\/script>
</body></html>`);
  w.document.close();
}

function trackObject() {
  if (!selectedId) return;
  const c = CANALS_DATA.find(x => x.id === selectedId) || RESERVOIRS.find(x => x.id === selectedId);
  const nm = selectedIsReservoir ? tResName(c) : c.name;
  if (trackedIds.has(selectedId)) { trackedIds.delete(selectedId); showToast(`${tt('track_off')} ${nm}`); }
  else { trackedIds.add(selectedId); showToast(`${tt('track_on')} ${nm}`); }
}

function refreshData() {
  const i = document.querySelector('.btn-refresh i');
  i.style.transition = 'transform 0.5s'; i.style.transform = 'rotate(360deg)';
  setTimeout(() => { i.style.transition = ''; i.style.transform = ''; }, 500);
  simulateSensorUpdate();
  showToast(tt('refreshed'));
}

function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg; t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2800);
}
