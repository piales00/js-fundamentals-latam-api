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

const reset = "\x1b[0m";
const cyan = "\x1b[36m";
const bold = "\x1b[1m";
const dim = "\x1b[2m";
const yellow = "\x1b[33m";
const green = "\x1b[32m";
const red = "\x1b[31m";

const main = async () => {
  const subRegions = enumerateSubRegions(await getSubRegions());
  const rl = readline.createInterface({ input, output });

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
    `║${reset}             ${dim}Explorá subregiones del mundo${reset}              ${cyan}║`,
  );
  console.log(
    `║${reset}                                                        ${cyan}║`,
  );
  console.log(
    `╚════════════════════════════════════════════════════════╝${reset}\n`,
  );

  await sleep(1500);
  console.log(
    `${cyan}Selecciona una región para conocer más detalles:${reset}\n`,
  );
  await sleep(1000);

  subRegions.forEach(({ id, name }) => {
    console.log(`  ${cyan}${id}.${reset} ${name}`);
  });

  let selected;

  for (let attempt = 1; attempt <= 3; attempt++) {
    const respuesta = await rl.question(
      `\n${bold}Ingresá el número de la región:${reset} `,
    );
    selected = subRegions.find(({ id }) => id === parseInt(respuesta));

    if (selected) break;

    const remaining = 3 - attempt;
    if (remaining > 0) {
      console.log(
        `${yellow}⚠ Opción inválida. Te quedan ${remaining} intento(s).${reset}`,
      );
    }
  }

  rl.close();

  if (!selected) {
    console.error(`${red}✗ Máximo de intentos alcanzado. Saliendo.${reset}`);
    process.exit(1);
  }

  const selectedRegion = selected.name;

  console.log(`\n${yellow}→ Cargando información, por favor espera...${reset}`);
  await sleep(2000);
  const apiData = await getApiData(selectedRegion);

  console.log(`${yellow}→ Transformando datos...${reset}`);
  await sleep(1000);
  const transformedData = transformApiData(apiData);

  console.log(`${yellow}→ Exportando datos a JSON...${reset}`);
  await sleep(1000);
  await exportJson(transformedData, selectedRegion);

  console.log(
    `\n${cyan}${bold}Información sobre países en la subregión ${selectedRegion}:${reset}\n`,
  );
  await sleep(1000);
  console.log(
    `  ${dim}Población total:${reset}  ${bold}${transformedData.totalPopulation}${reset}`,
  );
  console.log(
    `  ${dim}Número de países:${reset} ${bold}${transformedData.totalCountries}${reset}`,
  );
  console.table(transformedData.countries);
  console.log(
    `\n${green}✓ Información guardada en output/${selectedRegion}_info.json${reset}\n`,
  );
};

main().catch((error) => {
  console.error(`${red}✗ Error: ${error.message}${reset}`);
  process.exit(1);
});
