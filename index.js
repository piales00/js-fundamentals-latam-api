import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const subregions = [
  "Caribbean",
  "Central America",
  "Western Africa",
  "North America",
  "Eastern Africa",
  "Polynesia",
  "South America",
  "Micronesia",
  "Southeast Europe",
  "Northern Europe",
  "Western Asia",
  "Eastern Asia",
  "Central Asia",
  "Southern Europe",
  "South-Eastern Asia",
  "Central Europe",
  "Northern Africa",
  "Eastern Europe",
  "Western Europe",
  "Southern Asia",
  "Middle Africa",
  "Southern Africa",
  "Melanesia",
  "Australia and New Zealand",
];

const rl = readline.createInterface({ input, output });
console.log("\n╔════════════════════════════════════════════════════════╗");
console.log("║    Bienvenido a la API de JS Fundamentals Latam   ║");
console.log("╚════════════════════════════════════════════════════════╝\n");
console.log("Selecciona un continente para conocer más detalles:\n");
console.log(subregions);

const respuesta = await rl.question(
  "¿Cuál subregión quieres conocer? (Escribe el número correspondiente) \n1. Caribe \n2. América Central \n3. África Occidental \n4. América del Norte \n5. África Oriental \n6. Polinesia \n7. América del Sur \n8. Micronesia \n9. Europa del Sureste \n10. Europa del Norte \n11. Asia Occidental \n12. Asia Oriental \n13. Asia Central \n14. Europa del Sur \n15. Asia del Sureste \n16. Europa Central \n17. África del Norte \n18. Europa del Este \n19. Europa Occidental \n20. Asia del Sur \n21. África Central \n22. África del Sur \n23. Melanesia \n24. Australia y Nueva Zelanda\n",
);
rl.close();

export const selectedRegion = subregions[respuesta - 1];
