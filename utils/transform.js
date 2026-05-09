//tratamiento de los datos de la API

export const transformApiData = (apiData) => {
  const totalCountries = apiData.length;
  const totalPopulation = apiData.reduce((population, country) => {
    return population + country.population;
  }, 0);
  const countries = apiData.map((countrie) => ({
    name: countrie.name.common,
    population: countrie.population,
  }));

  return {
    totalCountries: totalCountries,
    totalPopulation: totalPopulation,
    countries: countries,
  };
};
