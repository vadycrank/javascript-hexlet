const convertToString = (num) => {
  if (num === 42) {
    return "the meaning of life and the universe";
  } else if (num === "NaN") {
    return "NaN";
  } else {
    return num.toString();
  }
};
module.exports = convertToString;
