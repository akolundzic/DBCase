const haversine = require("haversine-distance");
//https://www.npmjs.com/package/haversine-distance
const parseit = (str) => {
  return parseFloat(str.replace(",", ".").replace(" ", ""));
};

const getDistance = (a, b) => {
  let out = haversine(a, b) / 10 ** 3;
  //    return out.toFixed(2);
  return Math.round(out);
};

module.exports = {
  parseit: parseit,
  getDistance: getDistance,
};
