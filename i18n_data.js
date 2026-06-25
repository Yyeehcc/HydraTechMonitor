'use strict';
// English translations for catalog-based data (defects, faults, reservoirs, enums).
// Keyed by the stable codes/ids in data.js so data.js stays single-language.

const DEFECT_EN = {
  D01: { name:'Piping and tubular seepage', desc:'Soil washout through the structure body (piping). Signs: turbid seepage at the toe, sinkholes on the crest.', remedy:'Immediate cement grouting of the structure body, installation of an anti-seepage diaphragm.' },
  D02: { name:'Slope stability failure', desc:'Landslide deformation of the upstream or downstream dam slope. Cracks at 30-45° to the axis.', remedy:'Slope unloading, gravel counterberm, drilling of drainage wells.' },
  D03: { name:'Critical excessive seepage', desc:'Water losses >40% of supply. Breakthrough seepage in the canal foundation.', remedy:'Urgent anti-seepage cutoff, HDPE geomembrane lining over the whole bed.' },
  D04: { name:'Complete lining failure', desc:'Concrete lining destroyed over >60% of the area. Slope erosion.', remedy:'Major repair: M200 concrete lining 10 cm thick on geotextile.' },
  D05: { name:'Outlet gate failure', desc:"Gate won't open/close due to corrosion or frame deformation. Risk of uncontrolled discharge.", remedy:'Replace the gate drive, overhaul guides and seals, lubricate the spindle.' },
  D06: { name:'Cracks in the canal body', desc:'Longitudinal cracks 3-8 mm wide along the crest. Possible breach during floods.', remedy:'Crack routing, cement grout filling, installation of crack gauges.' },
  D07: { name:'Increased seepage (efficiency below norm)', desc:'Actual efficiency >20% below design. Water losses 15-40%.', remedy:'Install piezometers along the canal, map seepage losses, grouting reinforcement.' },
  D08: { name:'Wave erosion of slopes', desc:'Surface erosion from wave action. Washouts 5-15 cm deep, exposed sub-base.', remedy:'Repair slope protection: gravel riprap or monolithic reinforced-concrete slabs.' },
  D09: { name:'Drainage system clogging', desc:'Drainage flow reduced >30%. Rising groundwater at the toe.', remedy:'Flush drainage pipe filters at 0.3 MPa, replace clogged sections.' },
  D10: { name:'Uneven crest settlement', desc:'Differential settlement 5-12 cm along the structure. Formwork deformation.', remedy:'Geodetic leveling of benchmarks, foundation soil analysis, reinforcement if needed.' },
  D11: { name:'Scheduled inspection', desc:'Structure in normative condition. Routine inspection per RSE «Kazvodkhoz» regulations.', remedy:'Perform a visual inspection, measure seepage flows, level the benchmarks.' },
  D12: { name:'Biological overgrowth of slopes', desc:'Partial overgrowth of banks with aquatic vegetation (reed, cattail). Flow reduced by 5%.', remedy:'Mechanical clearing of the channel from aquatic vegetation, mowing once per season.' },
  D13: { name:'Gate seal wear', desc:'Minor leakage through gate seals (<0.5 l/s). Seal service life exhausted.', remedy:'Scheduled replacement of rubber seals during annual maintenance.' },
};

const FAULT_EN = {
  SF01: { component:'Flow sensor (ultrasonic)', fault:'Transducer fouling by sediment', detail:'Signal unstable ±0.3 m/s. Sediment and biofilm on the ultrasonic transducers block the acoustic beam, reducing flow-speed accuracy.', fix:'Mechanical brush cleaning of transducers + 5% citric-acid flush. Verify calibration against a reference flow.' },
  SF02: { component:'Water-level sensor (radar)', fault:'Zero-point shift after ice drift', detail:'Readings overstated by 0.15-0.25 m. The benchmark reference was disturbed by ice-floe impact during the ice drift.', fix:'Re-calibrate against the staff gauge, check and tighten the mounting bracket.' },
  SF03: { component:'Temperature sensor (Pt100)', fault:'Electrochemical corrosion of the probe', detail:'Probe overstates readings (+2-4°C). Contact oxidation of the housing in mineralized water (conductivity >700 µS/cm).', fix:'Replace the Pt100 probe with AISI-316 stainless steel, apply anti-corrosion coating to the housing.' },
  SF04: { component:'Turbidity sensor (turbidimeter)', fault:'Biofouling of the optical lens', detail:'Turbidity overstated 2-3×. Algae and biofilm on the optical lens cause false scattering of the light beam.', fix:'Install an automatic wiper cleaner + dose 0.5 mg/l copper sulfate.' },
  SF05: { component:'pH electrode', fault:'Clogging of the electrode diaphragm', detail:'pH drift ±0.4 units. The porous diaphragm is clogged by calcium deposits (water hardness up to 8 meq/l).', fix:'Replace the electrode, flush with 0.1M hydrochloric acid, install a protective mesh cap.' },
  SF06: { component:'Communication line (RS-485)', fault:'Cable break due to ice load', detail:'Sensor fully offline. Mechanical break of the underwater cable in the shore zone during ice drift.', fix:'Lay a backup cable in an HDPE Ø50 mm protective conduit 0.5 m below the canal bed.' },
  SF07: { component:'Sensor battery (AGM 12V)', fault:'Battery degradation under temperature swings', detail:'Charge <20%, autonomy down from 72 to 8 hours. The -35..+45°C range destroys the battery plates within 2-3 seasons.', fix:'Replace the AGM battery 12V/26Ah, install a 50 mm polyurethane thermal-insulation box.' },
  SF08: { component:'Conductivity electrode', fault:'Carbonate deposits on electrodes', detail:'Readings understated by 15-20%. CaCO3 scale on the platinum electrodes at high mineralization >800 mg/l.', fix:'Clean electrodes with 5% acetic acid, re-calibrate against a KCl standard solution.' },
  SF09: { component:'Level-gauge float', fault:'Vegetation wound on the cable', detail:'Level reading does not change (float stuck). Aquatic vegetation and branches wound onto the cable during the flood.', fix:'Clean the cable and guides, install a Ø200 mm stainless-mesh protective cylinder.' },
};

const RES_TEXT_EN = {
  r1: { desc:'Multi-year flow regulation of the Shu River. Surface area 620 km², volume 1120 M m³. Irrigates 130,000 ha of Shu district.',
        defect:{ name:'Scheduled inspection', desc:'Structure in working condition. Routine survey of the dam and spillway required.', remedy:'Visual inspection of the dam body, seepage measurement, crest leveling.' } },
  r2: { desc:'Water supply for Taraz and irrigation of 75,000 ha. Volume 580 M m³. Earth dam 68 m high.',
        defect:{ name:'Increased seepage through the dam body', desc:'Water losses through the dam body exceed the norm by 18%. Recorded by piezometers P-12, P-17.', remedy:'Install additional piezometers, analyze the seepage flow. If confirmed — cement cutoff.' } },
  r3: { desc:'Multi-purpose reservoir on the Ters River. Irrigation of Zhambyl district, volume 310 M m³.',
        defect:{ name:'Biological overgrowth of the basin', desc:'Overgrowth of shallows with aquatic vegetation. Useful volume reduced by 3-5%.', remedy:'Mechanical clearing of shallow zones once every 2 years. Bathymetry monitoring.' } },
  r4: { desc:'Small irrigation reservoir. Volume 85 M m³. Dam requires major repair.',
        defect:{ name:'Downstream slope stability failure', desc:'Landslide deformation on the downstream dam slope. A 47 m crack at elevation 842 m. Critical condition.', remedy:'Slope unloading, gravel counterberm, drainage-well drilling. URGENT.' } },
  r5: { desc:'Seasonal flow regulation for irrigation of Korday district. Volume 42 M m³.',
        defect:{ name:'Spillway gate seal wear', desc:'Minor leakage through the bottom-outlet seals. Leakage ~0.3 l/s.', remedy:'Scheduled replacement of rubber seals at the next maintenance.' } },
  r6: { desc:'Flood regulation of the lower Shu River. Volume 95 M m³.',
        defect:{ name:'Uneven dam-crest settlement', desc:'Differential crest settlement of 8 cm over the last 3 years. Exceeds normative values.', remedy:'Leveling of benchmark marks (12 pcs), foundation soil analysis. If confirmed — reinforcement.' } },
};

const URGENCY_EN = {
  'немедленно':'immediately', '1-3 дня':'1-3 days', '1 месяц':'1 month',
  '2 недели':'2 weeks', '3 месяца':'3 months', '6 месяцев':'6 months', 'по графику':'as scheduled',
};

const ZONE_EN = {
  'Тараз':'Taraz', 'Шу':'Shu', 'Жуалы':'Zhualy', 'Мойынкум':'Moyynkum',
  'Байзак':'Baizak', 'Мерки':'Merke', 'Кордай':'Korday', 'Жамбыл':'Zhambyl',
  'Таласский':'Talas',
};

const SOURCE_EN = {
  'р. Шу (Чу)':'Shu (Chu) River', 'р. Талас':'Talas River', 'р. Аса':'Asa River',
  'р. Аспара':'Aspara River', 'р. Боралдай':'Boraldai River',
  'Тасоткельское вдхр.':'Tasotkel Reservoir', 'Терс-Ащибулакское вдхр.':'Ters-Ashchibulak Reservoir',
  // reservoir "river" fields
  'р. Шу':'Shu River', 'р. Терс':'Ters River', 'р. Байдибек':'Baidibek River',
};

const RES_NAME_EN = {
  r1:'Tasotkel Reservoir', r2:'Kirov Reservoir', r3:'Ters-Ashchibulak Reservoir',
  r4:'Baidibek Reservoir', r5:'Aspara Reservoir', r6:'Shaulder Reservoir',
};

// fixed alert messages (condition-based)
const ALERT_EN = {
  'Критический уровень воды':'Critical water level',
  'Высокая мутность':'High turbidity',
  'Повышенная температура воды':'Elevated water temperature',
  'Датчик не в сети':'Sensor offline',
};
