function main(arr) {
  const runningSums = [0];

  arr.forEach((n, i) => {
    runningSums[i + 1] = runningSums[i] + n;
  });
  let maxSum = runningSums[1];

  for (let i = 0; i < runningSums.length; i++) {
    for (let j = i + 1; j < runningSums.length; j++) {
      const newSum = runningSums[j] - runningSums[i];
      if (maxSum < newSum) {
        maxSum = newSum;
      }
    }
  }
  return maxSum;
}

module.exports = main;
