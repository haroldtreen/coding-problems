function main(lines) {
  const socks = lines[1].split(' ').map(Number);

  const results = socks.reduce((_prev, curr) => {
    const prev = _prev;
    if (prev.unmatched[curr]) {
      prev.total += 1;
      delete prev.unmatched[curr];
    } else {
      prev.unmatched[curr] = true;
    }
    return prev;
  }, { unmatched: {}, total: 0 });

  console.log(results.total);
}

const example = [
  '9',
  '10 20 20 10 10 30 50 10 20',
];

main(example);
