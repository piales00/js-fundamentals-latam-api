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
import { sleep } from "./utils/sleep.js";
//variables
try {
  const subRegions = enumerateSubRegions(await getSubRegions());
  const rl = readline.createInterface({ input, output });

  //output
  console.log("\n╔════════════════════════════════════════════════════════╗");
  console.log("║    Bienvenido a la API de JS Fundamentals Latam   ║");
  console.log("╚════════════════════════════════════════════════════════╝\n");
  await sleep(1500);
  console.log("Selecciona un continente para conocer más detalles:\n");
  await sleep(1000);
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
  await sleep(1000);
  console.log(transformedData);
  console.log(`información guardada en output/${selectedRegion}_info.json\n`);
} catch (error) {
  console.error("Error during the process:", error.message);
  process.exit(1);
}
