# HydroTechMonitor

Веб-портал мониторинга гидротехнических сооружений (ГТС) Жамбылской области для РГП «Казводхоз».
Интерактивная карта на спутниковой подложке, симуляция IoT-датчиков, оценка рисков, диагностика дефектов и неисправностей датчиков, генерация отчётов, два языка (RU/EN) и две темы.

> Web portal for monitoring hydraulic structures of Zhambyl Region, Kazakhstan. Interactive satellite map, IoT sensor simulation, risk scoring, defect & sensor-fault diagnostics, report generation, RU/EN languages and light/dark themes.

---

## Возможности / Features
- 🛰️ Интерактивная карта (Leaflet + спутниковые тайлы Esri) с реальной границей области (geoBoundaries) и реальными руслами рек (OpenStreetMap)
- 📊 344 объекта + 6 водохранилищ, размещённых вдоль настоящих рек
- 🔬 Симуляция датчиков: расход, температура, уровень, мутность, pH, проводимость
- ⚠️ Диагностика дефектов ГТС (D01–D13) и неисправностей датчиков (SF01–SF09)
- 🌐 Полностью двуязычный интерфейс **и данные** (русский / English), печать отчёта на языке сайта
- 🎨 Тёмная и светлая темы
- 🧊 3D-схема установки датчиков
- 🔎 Фильтры по статусу, району, источнику воды, году, износу, тревогам

## Как запустить / How to run
Проект — статический сайт, бэкенд не нужен.

**Вариант 1 — просто открыть:** откройте `index.html` в браузере.

**Вариант 2 — локальный сервер (рекомендуется):**
```bash
# Python 3
python -m http.server 3333
# затем откройте http://localhost:3333
```

## Регенерация данных / Rebuild data (опционально)
Требуется Python 3.
```bash
# 1) (опц.) перестроить границу области и русла рек из OSM/geoBoundaries
python process_rivers.py        # -> geo_data.js, rivers_data.json

# 2) перегенерировать объекты и датчики
python gen_data.py              # -> data.js
```
> Если просто меняете интерфейс — эти шаги не нужны, `data.js`/`geo_data.js` уже в репозитории.

## Структура / Structure
| Файл | Назначение |
|------|------------|
| `index.html` | разметка страницы |
| `style.css` | стили, темы, печать |
| `app.js` | логика: карта, фильтры, панель, i18n, отчёты, 3D |
| `i18n_data.js` | английские переводы каталогов (дефекты, неисправности, районы) |
| `data.js` | сгенерированные данные объектов и датчиков |
| `geo_data.js` | граница области + русла рек (реальные координаты) |
| `gen_data.py` | генератор `data.js` |
| `process_rivers.py` | сборка `geo_data.js` из OSM + geoBoundaries |
| `canals_data.json` | исходные данные каналов |
| `lib/` | Leaflet и Font Awesome |

## Источники данных / Data sources
- Границы: [geoBoundaries](https://www.geoboundaries.org/) (ADM1, Kazakhstan)
- Реки: [OpenStreetMap](https://www.openstreetmap.org/) через Overpass API
- Спутниковые тайлы: Esri World Imagery

## Лицензия
Учебный проект (хакатон, команда КС2437). Свободно изменять и использовать.
