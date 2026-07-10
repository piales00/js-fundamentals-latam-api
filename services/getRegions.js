if (typeof define !== "function") {
  var define = require("amdefine")(module);
}

define([], () => {
  // devuelve una promesa con la data con todas las regiones
  function getRegions() {
    return fetch("https://countries.dev/regions")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        return data;
      })
      .catch((error) => {
        console.error(`Fallo al conseguir las regiones: ${error.message}`);
        throw error;
      });
  }

  // enumera todas las regiones, guarda una array de objetos, con id y region
  function enumerateRegions(subRegions) {
    let index = 0;
    const enumerateRegions = subRegions.map((region) => ({
      id: index++,
      region: region,
    }));
    return enumerateRegions;
  }

  return {
    getRegions: getRegions,
    enumerateRegions: enumerateRegions,
  };
});
