//TODO: investigar api y terminar de hacer el fetch

if (typeof define !== "function") {
  var define = require("amdefine")(module);
}

define([], () => {
  function getCountriesInfo(selectedRegion) {
    return fetch(
      `https://countries.dev/alpha/${selectedRegion}?fields=name,population,capital`,
    ).then((response) => response.json());
  }

  getCountriesInfo("PE").then((data) => console.log(data));
  return {
    getCountriesInfo: getCountriesInfo,
  };
});
/*
export const getApiData = async (selectedRegion) => {
  try {
    const response = await fetch(
      `https://countries.dev/alpha/${selectedRegion}?fields=name,population,subregion`,
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching data:", error.message);
    throw error;
  }
};

async function main(selectedRegion) {
  const country = await fetch(
    `https://countries.dev/alpha/${selectedRegion}?fields=name,population,capital`,
  ).then((r) => r.json());

  console.log(country);
}
main("PE");
*/
