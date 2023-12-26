const reverse = (string) => {
  let reverseStr = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reverseStr += string[i];
  }
  return reverseStr;
};

module.export = reverse;
