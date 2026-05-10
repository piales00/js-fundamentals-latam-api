# js-fundamentals-latam-api

An interactive Node.js CLI that consumes the public [REST Countries API](https://restcountries.com) to explore country data by subregion — with colored output, input validation, and JSON export.

---

## What it does

1. Fetches all available subregions from the REST Countries API
2. Displays an interactive menu so the user can select a subregion
3. Validates the input — up to 3 attempts before exiting
4. Fetches all countries within the selected subregion
5. Calculates total population and country count
6. Exports the result to `output/<subregion>_info.json`
7. Asks the user if they want to query another subregion

---

## Stack

- Node.js v20+ (no external dependencies — plain JS)
- API: [restcountries.com/v3.1](https://restcountries.com)
- Native modules: `readline`, `fs`

---

## Project structure

```
js-fundamentals-latam-api/
├── index.js                   # Entry point — orchestrates the full flow
├── services/
│   ├── api.js                 # Fetches countries by subregion
│   └── getSubRegions.js       # Fetches and enumerates all subregions
├── utils/
│   ├── transform.js           # Maps and reduces raw API data
│   ├── exportJson.js          # Writes the result to a JSON file
│   └── sleep.js               # Promise-based delay helper
└── output/                    # Generated JSON files (git-ignored)
```

---

## How to run

```bash
# Clone the repo
git clone https://github.com/piales00/js-fundamentals-latam-api.git
cd js-fundamentals-latam-api

# No install needed — plain Node.js
node index.js
```

---

## Output example

```json
{
  "totalCountries": 12,
  "totalPopulation": 430759766,
  "countries": [
    { "name": "Argentina", "population": 45376763 },
    { "name": "Brazil", "population": 214326223 }
  ]
}
```

The file is saved as `output/<subregion>_info.json` (e.g. `output/South America_info.json`).

---

## JS concepts practiced

| Concept | Where |
|---|---|
| `async/await` + `fetch` | `services/api.js`, `services/getSubRegions.js` |
| `.map()` | Transform raw API response into clean objects |
| `.reduce()` | Sum total population across countries |
| `.filter()` + `Set` | Deduplicate and clean subregion list |
| Destructuring | Throughout — function params and forEach callbacks |
| `try/catch` | Error handling on all fetch calls |
| `JSON.stringify()` | Serialize output before writing |
| `fs/promises` | Async file writing |
| `readline` | Interactive terminal input |
| Arrow functions | All array callbacks |

---

Piero Pérez
