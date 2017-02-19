function main(lines) {
  const vals = lines.pop().split(' ').map(Number);
  const total = vals.reduce((a, b) => a + b);
  const max = Math.max.apply(null, vals);
  const min = Math.min.apply(null, vals);

  const result = [total - max, total - min].join(' ');
  return [result];
}

module.exports = main;
