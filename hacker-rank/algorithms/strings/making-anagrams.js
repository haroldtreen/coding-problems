function numDeletions(base, extras) {
  let deletionCount = 0;
  Object.keys(extras).forEach((c) => {
    if (base[c] && extras[c] > base[c]) {
      deletionCount += extras[c] - base[c];
    } else if (!base[c]) {
      deletionCount += extras[c];
    }
  });
  return deletionCount;
}

function toFrequency(freqs, c) {
  const updatedFreqs = freqs;
  updatedFreqs[c] = (freqs[c] || 0) + 1;
  return freqs;
}

function anagramDiff(str1, str2) {
  const chars1 = str1.split('');
  const chars2 = str2.split('');

  const freqs1 = chars1.reduce(toFrequency, {});
  const freqs2 = chars2.reduce(toFrequency, {});

  return numDeletions(freqs1, freqs2) + numDeletions(freqs2, freqs1);
}

function main(lines) {
  console.log(anagramDiff(lines[0], lines[1]));
}

const example = [
  'cde',
  'abc',
];

main(example);
