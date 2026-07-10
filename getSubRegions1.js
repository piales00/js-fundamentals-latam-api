if (typeof define !== "function") {
  var define = require("amdefine")(module);
}

define([], () => {
  // devuelve una promesa con la data con todas las subregiones
  function getSubRegions() {
    return fetch("https://countries.dev/regions")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        return data;
      })
      .catch((error) => {
        throw error;
      });
  }

  // enumera todas, guarda una array de objetos, con id y region
  function enumerateSubRegions(subRegions) {
    let index = 0;
    const enumerateRegions = subRegions.map((region) => ({
      id: index++,
      region: region,
    }));
    return enumerateRegions;
  }

  return {
    getSubRegions: getSubRegions,
    enumerateRegions: enumerateSubRegions,
  };
});
