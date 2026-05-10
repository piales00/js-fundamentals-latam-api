export const getSubRegions = async () => {
  try {
    const subRegionsResponse = await fetch(
      `https://restcountries.com/v3.1/all?fields=subregion`,
    );

    const dataSubRegions = await subRegionsResponse.json();

    const subRegions = [
      ...new Set(dataSubRegions.map((country) => country.subregion)),
    ].filter(
      (subregion) =>
        subregion !== undefined && subregion !== null && subregion !== "",
    );

    return subRegions;
  } catch (error) {
    console.error("Error fetching subregions:", error.message);
    throw error;
  }
};

export const enumerateSubRegions = (subRegions) => {
  const enumeratedSubRegions = subRegions.map((subRegion, index) => ({
    id: index + 1,
    name: subRegion,
  }));

  return enumeratedSubRegions;
};
