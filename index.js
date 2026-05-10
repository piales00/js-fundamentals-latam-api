//imports
import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import {
  getSubRegions,
  enumerateSubRegions,
} from "./services/getSubRegions.js";

import { getApiData } from "./services/api.js";

import { transformApiData } from "./utils/transform.js";
import { exportJson } from "./utils/exportJson.js";
//variables
try {
  const subRegions = enumerateSubRegions(await getSubRegions());
  const rl = readline.createInterface({ input, output });

  //output
  console.log("\n╔════════════════════════════════════════════════════════╗");
  console.log("║    Bienvenido a la API de JS Fundamentals Latam   ║");
  console.log("╚════════════════════════════════════════════════════════╝\n");
  console.log("Selecciona un continente para conocer más detalles:\n");
  subRegions.forEach((subRegion) => {
    console.log(`${subRegion.id}. ${subRegion.name}`);
  });

  const respuesta = await rl.question("Ingresa el número del continente: ");
  rl.close();

  const selectedRegion = subRegions.find(
    (subRegion) => subRegion.id === parseInt(respuesta),
  ).name;

  const apiData = await getApiData(selectedRegion);

  const transformedData = transformApiData(apiData);

  await exportJson(transformedData, selectedRegion);

  console.log(
    `\nInformación sobre países en la subregión ${selectedRegion}:\n`,
  );

  console.log(`información guardada en output/${selectedRegion}_info.json\n`);

  console.log(transformedData);
} catch (error) {
  console.error("Error fetching or enumerating subregions:", error.message);
  process.exit(1);
}
/*
const fs = require("fs");

// 1. Datos a guardar
const datos = {
  usuario: "juan",
  edad: 30,
  activo: true,
};

// 2. Convertir objeto a cadena JSON
const jsonString = JSON.stringify(datos, null, 2); // '2' para formato legible

// 3. Escribir archivo
fs.writeFile("archivo.json", jsonString, (err) => {
  if (err) {
    console.error("Error al escribir el archivo:", err);
  } else {
    console.log("JSON guardado correctamente");
  }
});
]*/
