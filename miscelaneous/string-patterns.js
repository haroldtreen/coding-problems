/*
Given a pattern and a string input - find if the string follows the same pattern and return 0 or 1.

Examples:

1) Pattern : "abab", input: "redblueredblue" should return 1.

2) Pattern: "aaaa", input: "asdasdasdasd" should return 1.

3) Pattern: "aabb", input: "xyzabcxzyabc" should return 0.
*/


let symbolToStr = {};

function matchHelper(pattern, patternPos, str) {
  if (patternPos === pattern.length) {
    return 1;
  }

  const symbol = pattern[patternPos];
  const symbolStr = symbolToStr[symbol];
  if (!symbolStr) {
    const maxRemoveable = str.length - (pattern.length - patternPos);
    for (let i = 1; i < maxRemoveable; i++) {
      symbolToStr[symbol] = str.substring(0, i);
      if (matchHelper(pattern, patternPos + 1, str.substring(i, str.length))) {
        return 1;
      }
    }
  } else if (str.indexOf(symbolStr) === 0) {
    return matchHelper(pattern, patternPos + 1, str.substring(symbolStr.length, str.length));
  }
  symbolToStr[symbol] = '';
  return 0;
}

function match(pattern, str) {
  symbolToStr = {};
  return matchHelper(pattern, 0, str, 0);
}

function main(pattern, string) {
  if (pattern.length > string.length) {
    return 0;
  }
  return match(pattern, string);
}

module.exports = main;
