function main(lines) {
  const scores1 = lines.shift().split(' ').map(Number);
  const scores2 = lines.shift().split(' ').map(Number);

  return [scores1.reduce((scores, val1, i) => {
    const val2 = scores2[i];

    if (val1 > val2) {
      scores[0]++;
    } else if (val1 < val2) {
      scores[1]++;
    }
    return scores;
  }, [0, 0]).join(' ')];
}

module.exports = main;
