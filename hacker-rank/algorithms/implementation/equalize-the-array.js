function main(lines) {
  const nums = lines.pop().split(' ').map(Number);

  const freqs = nums.reduce((acc, num) => {
    acc[num] = (acc[num] || 0) + 1;
    return acc;
  }, {});

  const keys = Object.keys(freqs);
  const values = keys.map(k => freqs[k]);
  const maxIndex = keys.reduce((maxI, key, index) => {
    if (freqs[key] > values[maxI]) {
      return index;
    }
    return maxI;
  }, 0);

  return [nums.length - values[maxIndex]];
}

module.exports = main;
