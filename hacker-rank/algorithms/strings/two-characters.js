/*
Time complexity:

# chars -> 27
n -> Length of string

O (# chars * # chars * n + n) => O (27 ^ 2 * n) => O (n)
*/

function lengthOfT(str, c1, c2) {
  if (c1 === c2) {
    return 0;
  }

  let length = 0;
  let startFound = false;
  let seekingC1 = false;

  for (let i = 0; i < str.length; i++) {
    if (!startFound && (str[i] === c1 || str[i] === c2)) {
      startFound = true;
      seekingC1 = str[i] === c2;
      length = 1;
    } else if (startFound && seekingC1 && str[i] === c2) {
      return 0;
    } else if (startFound && !seekingC1 && str[i] === c1) {
      return 0;
    } else if (startFound && ((seekingC1 && str[i] === c1) || (!seekingC1 && str[i] === c2))) {
      seekingC1 = !seekingC1;
      length++;
    }
  }
  return length;
}

function longestT(str) { // String with two repeating characters
  const charsSet = [].reduce.call(str, (set, c) => {
    set[c] = true;
    return set;
  }, {});
  const chars = Object.keys(charsSet);

  const tLengths = [];
  for (let i = 0; i < chars.length; i++) {
    for (let j = 0; j < chars.length; j++) {
      tLengths.push(lengthOfT(str, chars[i], chars[j]));
    }
  }
  return Math.max(...tLengths);
}

function main(lines) {
    lines.shift();
    return [longestT(lines.shift()).toString()];
}

module.exports = main;
