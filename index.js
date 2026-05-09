//imports
import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import {
  getSubRegions,
  enumerateSubRegions,
} from "./services/getSubRegions.js";

//variables
const subRegions = await enumerateSubRegions(await getSubRegions());
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

export const selectedRegion = subRegions.find(
  (subRegion) => subRegion.id === parseInt(respuesta),
).name;
