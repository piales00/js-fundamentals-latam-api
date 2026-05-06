# 🌎 JS Fundamentals – LATAM API Project

This project is a Node.js script that consumes the [REST Countries API](https://restcountries.com/), filters Latin American countries, calculates their total population, and exports the results into a JSON file.

It follows a common backend data flow:

> fetch → parse → transform → export

---

## 🚀 Features

- Fetch data from an external API
- Filter countries from Latin America
- Calculate total population
- Transform data into a clean structure
- Export results to a JSON file

---

## 🛠️ Tech Stack

- Node.js
- JavaScript (ES6+)
- REST API

---

## 📦 Installation

```bash
git clone https://github.com/your-username/js-fundamentals-latam-api.git
cd js-fundamentals-latam-api
npm install
```

---

## ▶️ Usage

```bash
node index.js
```

---

## 📂 Project Structure

```
.
├── index.js        # Main script
├── services/       # API logic
├── utils/          # Helper functions
└── output.json     # Generated result
```

---

## 📊 Example Output

```json
{
  "totalPopulation": 652000000,
  "countries": [
    {
      "name": "Peru",
      "population": 33000000
    }
  ]
}
```

---

## 🎯 Learning Goals

This project was built to:

- Strengthen JavaScript fundamentals
- Practice working with APIs
- Understand data transformation workflows
- Prepare for SuiteScript development (NetSuite)

---

## 🔄 Data Flow

1. Fetch data from REST Countries API
2. Parse JSON response
3. Filter LATAM countries
4. Transform data structure
5. Export results to JSON file

---

## 📌 Next Steps

- Add error handling improvements
- Refactor using classes (Week 2)
- Adapt code to AMD pattern (SuiteScript style)

---

## 👨‍💻 Author

Piero Pérez  
Backend Developer (Python → JavaScript → NetSuite)
