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

const main = async () => {
  const subRegions = enumerateSubRegions(await getSubRegions());
  const rl = readline.createInterface({ input, output });

  console.log("\n╔════════════════════════════════════════════════════════╗");
  console.log("║    Bienvenido a la API de JS Fundamentals Latam   ║");
  console.log("╚════════════════════════════════════════════════════════╝\n");
  await sleep(1500);
  console.log("Selecciona una región para conocer más detalles:\n");
  await sleep(1000);
  subRegions.forEach((subRegion) => {
    console.log(`${subRegion.id}. ${subRegion.name}`);
  });

  let selected;

  for (let attempt = 1; attempt <= 3; attempt++) {
    const respuesta = await rl.question("Ingresa el número de la región: ");
    selected = subRegions.find(({ id }) => id === parseInt(respuesta));

    if (selected) break;

    const remaining = 3 - attempt;
    if (remaining > 0) {
      console.log(`Opción inválida. Te quedan ${remaining} intento(s).`);
    }
  }

  rl.close();

  if (!selected) {
    console.error("Máximo de intentos alcanzado. Saliendo.");
    process.exit(1);
  }

  const selectedRegion = selected.name;

  const apiData = await getApiData(selectedRegion);

  const transformedData = transformApiData(apiData);

  await exportJson(transformedData, selectedRegion);

  console.log(
    `\nInformación sobre países en la subregión ${selectedRegion}:\n`,
  );
  await sleep(1000);
  console.log(transformedData);
  console.log(`información guardada en output/${selectedRegion}_info.json\n`);
};

main().catch((error) => {
  console.error("Error during the process:", error.message);
  process.exit(1);
});
