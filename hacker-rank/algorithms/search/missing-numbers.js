function findMissing(a, b) {
  const toFreq = (acc, n) => {
    acc[n] = (acc[n] || 0) + 1;
    return acc;
  };
  const freqsB = b.reduce(toFreq, {});
  const freqsA = a.reduce(toFreq, {});

  return Object.keys(freqsB).reduce((acc, k) => {
    if (freqsB[k] !== freqsA[k]) {
      acc.push(k);
    }
    return acc;
  }, []).sort();
}

function main(lines) {
  lines.shift();
  const A = lines.shift().split(' ');
  lines.shift();
  const B = lines.shift().split(' ');

  return [findMissing(A, B).join(' ')];
}

module.exports = main;
