import { selectedRegion } from "../index.js";

export const getApiData = async () => {
  try {
    const response = await fetch(
      `https://restcountries.com/v3.1/subregion/${selectedRegion}?fields=name,population,subregion`,
    );

    console.log(response);

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
