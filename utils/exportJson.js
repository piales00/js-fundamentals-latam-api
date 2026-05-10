import fs from "fs/promises";

export const exportJson = async (data, subregion) => {
  const filePath = `output/${subregion}_info.json`;
  const jsonData = JSON.stringify(data, null, 2);
  await fs.writeFile(filePath, jsonData);
};
