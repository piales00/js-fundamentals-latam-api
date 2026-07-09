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
  const response = await fetch(`https://countries.dev/name/${selectedRegion}`);

  console.log(response);
}
main("peru");
