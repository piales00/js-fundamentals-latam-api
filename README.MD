# js-fundamentals-latam-api

Node.js script that consumes the public [restcountries.com](https://restcountries.com) API, filters Latin American countries, calculates the total population, and exports the results to a JSON file.

---

## What it does

1. Queries the REST Countries API filtering the American continent
2. Filters only South American and Central American countries by subregion
3. Maps each country to a clean object with name, capital, population, and ISO code
4. Calculates total regional population using `.reduce()`
5. Exports the result to `output/latam-summary.json`

---

## Stack

- Node.js v20+ (no frameworks, plain JS)
- API: [restcountries.com/v3.1](https://restcountries.com/v3.1/region/americas)
- Native modules: `fs`, `path`

---

## Project structure

```
js-fundamentals-latam-api/
├── index.js               # Entry point — orchestrates the full flow
├── services/
│   └── api.js             # fetch to restcountries.com
├── utils/
│   └── transform.js       # filter, map, reduce on the countries array
├── output/
│   └── latam-summary.json # Generated output (git-ignored)
├── package.json
└── README.md
```

---

## How to run

```bash
# Clone the repo
git clone https://github.com/[your-username]/js-fundamentals-latam-api.git
cd js-fundamentals-latam-api

# No external dependencies — plain Node
node index.js
```

The `output/latam-summary.json` file is generated automatically.

---

## Output example

```json
{
  "region": "Latin America",
  "totalCountries": 20,
  "totalPopulation": 652000000,
  "generatedAt": "2026-05-05T18:00:00.000Z",
  "countries": [
    {
      "name": "Peru",
      "capital": "Lima",
      "population": 32971846,
      "iso": "PE",
      "subregion": "South America"
    }
  ]
}
```

---

## JS concepts practiced

| Concept | Where it's used |
|---|---|
| `async/await` + `fetch` | `services/api.js` |
| `.filter()` | Filter only Latin American countries |
| `.map()` | Transform raw API response to clean object |
| `.reduce()` | Sum total population |
| Destructuring | Extracting fields from country objects |
| `try/catch/finally` | Error handling on fetch calls |
| `JSON.stringify()` | Serialize the output |
| `fs.writeFileSync` | Write the JSON file to disk |
| Arrow functions | All array callbacks |

---

## Connection to SuiteScript 2.x

This project intentionally mirrors the pattern of a real NetSuite script:

```
restcountries API    →  N/https (NetSuite's HTTP module)
fs.writeFileSync     →  record.save() / record.submitFields()
JSON.parse/stringify →  same in SuiteScript
try/catch            →  same pattern + N/log for logging
```

By Week 4, you'll recognize this exact flow inside a `define(['N/https', 'N/record'], function(...) { ... })`.

---

## Week 1 verification checklist

- [ ] I can write `.filter()` on an array of objects without googling the syntax
- [ ] I understand the difference between `undefined` and `null`
- [ ] I can read a JS error and identify on which line and why it occurs
- [ ] The script runs with `node index.js` without errors
- [ ] The `output/latam-summary.json` file is generated correctly
- [ ] The repo is on GitHub with this README

---

Piero Pérez  
