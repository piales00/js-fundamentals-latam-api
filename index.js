import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const countries = [
  "North America",
  "Africa",
  "Oceania",
  "South America",
  "Europe",
  "Asia",
  "Antarctica",
];
const rl = readline.createInterface({ input, output });
console.log("\n╔════════════════════════════════════════════════════════╗");
console.log("║    Bienvenido a la API de JS Fundamentals Latam   ║");
console.log("╚════════════════════════════════════════════════════════╝\n");
console.log("Selecciona un continente para conocer más detalles:\n");
console.log(countries);

const respuesta = await rl.question(
  "¿Cuál continente quieres conocer? (Escribe el número correspondiente) \n1. North America \n2. Africa \n3. Oceania \n4. South America \n5. Europe \n6. Asia \n7. Antarctica\n",
);
rl.close();

export const selectedContinent = countries[respuesta - 1];
