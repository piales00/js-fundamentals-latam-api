export const getSubRegions = async () => {
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
};
