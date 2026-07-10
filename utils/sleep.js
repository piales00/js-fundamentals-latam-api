if (typeof define !== "function") {
  var define = require("amdefine")(module);
}

define([], () => {
  return function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };
});
//export const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
