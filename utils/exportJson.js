if (typeof define !== "function") {
  var define = require("amdefine")(module);
}

define(["fs/promises"], (fs) => {
  return function exportjson(data, region) {
    const filePath = `output/${region}_info.json`;
    const jsonData = JSON.stringify(data, null, 2);
    // no uso then porque la resolución correcta de fs es undefined
    return fs.writeFile(filePath, jsonData).catch((error) => {
      console.error(`Falló al guardar el archivo: ${error.message}`);
      throw error;
    });
  };
});
