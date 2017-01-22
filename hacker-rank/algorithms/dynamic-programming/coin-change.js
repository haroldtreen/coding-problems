function solutionsCount(target, coins) {
  const table = coins.map(() =>
    Array.apply(null, { length: target + 1 }).map(() => 0) // eslint-disable-line
  );

  table.forEach(r => r[0] = 1); // eslint-disable-line

  for (let i = 0; i < coins.length; i += 1) {
    for (let j = 1; j < table[i].length; j += 1) {
      const prevRow = table[i - 1] || [];
      const withoutCoin = (prevRow[j] || 0);
      const withCoin = (table[i][j - coins[i]] || 0);

      table[i][j] = withCoin + withoutCoin;
    }
  }

  return table.pop().pop();
}

function main(lines) {
  const target = Number(lines[0].split(' ')[0]);
  const coins = lines[1].split(' ').map(Number).sort((a, b) => a - b);

  return [solutionsCount(target, coins).toString()];
}

module.exports = main;
