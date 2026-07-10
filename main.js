if (typeof define !== "function") {
  var define = require("amdefine")(module);
}

define([
  "node:readline/promises",
  "node:process",
  "./services/getRegions",
  "./services/api",
  "./utils/tranform",
  ",/utils/exportJson",
  "./utils/sleep",
], (
  readline,
  process,
  regions,
  getCountriesInfo,
  transformApiData,
  exportJson,
  sleep,
) => {
  function main() {
    const input = process.stdin;
    const output = process.stdout;
    const { getRegions, enumerateRegions } = regions;
  }
});
