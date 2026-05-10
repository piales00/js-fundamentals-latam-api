export const transformApiData = (apiData) => {
  const totalCountries = apiData.length;
  const totalPopulation = apiData.reduce((population, country) => {
    return population + country.population;
  }, 0);
  const countries = apiData.map((country) => ({
    name: country.name.common,
    population: country.population,
  }));

  return {
    totalCountries: totalCountries,
    totalPopulation: totalPopulation,
    countries: countries,
  };
};
