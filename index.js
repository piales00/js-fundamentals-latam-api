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

  const reset = "\x1b[0m";
  const cyan = "\x1b[36m";
  const bold = "\x1b[1m";
  const dim = "\x1b[2m";

  console.log(
    `\n${cyan}╔════════════════════════════════════════════════════════╗`,
  );
  console.log(
    `║${reset}                                                        ${cyan}║`,
  );
  console.log(
    `║${reset}      ${bold}Bienvenido a la API de JS Fundamentals Latam${reset}      ${cyan}║`,
  );
  console.log(
    `║${reset}              ${dim}Explorá subregiones del mundo${reset}             ${cyan}║`,
  );
  console.log(
    `║${reset}                                                        ${cyan}║`,
  );
  console.log(
    `╚════════════════════════════════════════════════════════╝${reset}\n`,
  );
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

  console.log("Cargando información, por favor espera...\n");
  await sleep(2000);
  const selectedRegion = selected.name;

  const apiData = await getApiData(selectedRegion);
  console.log("Transformando datos...\n");
  await sleep(1000);
  const transformedData = transformApiData(apiData);
  console.log("Exportando datos a JSON...\n");
  await sleep(1000);
  await exportJson(transformedData, selectedRegion);

  console.log(
    `\nInformación sobre países en la subregión ${selectedRegion}:\n`,
  );
  await sleep(1000);
  console.log(`Población total: ${transformedData.totalPopulation}`);
  console.log(`Número de países: ${transformedData.totalCountries}`);
  console.table(transformedData.countries);
  console.log(`Información guardada en output/${selectedRegion}_info.json\n`);
};

main().catch((error) => {
  console.error("Error during the process:", error.message);
  process.exit(1);
});
