if (typeof define !== "function") {
  var define = require("amdefine")(module);
}

define([], () => {
  // filtra por la region seleccionada y devuelve un array de diccionarios con name, population y su capital
  return function getCountriesInfo(selectedRegion) {
    return fetch(
      `https://countries.dev/region/${selectedRegion}?fields=name,population,capital`,
    )
      .then((response) => response.json())
      .then((data) => data)
      .catch((error) => {
        throw error;
      });
  };
});
