const countSyllables = (text) => {
  if (text === null) {
    return 0;
  }
  if (text === "") {
    return 0;
  }
  const syllables = text.split("-").length;
  return syllables;
};

module.exports = countSyllables;
