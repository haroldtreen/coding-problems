function substringCounts(str) {
  const substringSet = {};

  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      const sub = str.substring(i, j).split('').sort().join('');
      substringSet[sub] = (substringSet[sub] || 0) + 1;
    }
  }
  return substringSet;
}

function numPairs(n) {
  if (n < 2) {
    return 0;
  }
  const k = 2;
  const max = Math.max(k, n - k);
  let result = 1;
  for (let i = 1; i <= n - max; i++) {
    result *= (max + i) / i;
  }
  return result;
}

function anagramPairsCount(substringSet) {
  let validAnagrams = 0;
  Object.keys(substringSet).forEach((sub) => {
    validAnagrams += numPairs(substringSet[sub]);
  });
  return validAnagrams;
}

function main(lines) {
  lines.shift();

  return lines.map((str) => {
    const substringSets = substringCounts(str);
    return anagramPairsCount(substringSets).toString();
  });
}

module.exports = main;
