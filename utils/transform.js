if (typeof define !== "function") {
  var define = require("amdefine")(module);
}

define([], () => {
  return function transformAPiData(apiData) {
    const totalCountries = apiData.length;
    const totalPopulation = apiData.reduce((population, country) => {
      return population + country.population;
    }, 0);
    const countries = apiData.map((country) => ({
      name: country.name,
      population: country.population,
    }));

    return {
      totalCountries: totalCountries,
      totalPopulation: totalPopulation,
      countries: countries,
    };
  };
});
