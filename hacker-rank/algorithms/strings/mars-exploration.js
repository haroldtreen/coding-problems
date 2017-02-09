function main(lines) {
  const chars = lines[0].split('');
  return [chars.reduce((acc, char, i) => {
    const rem = i % 3;

    if (rem === 0 || rem === 2) {
      if (char !== 'S') {
        return acc + 1;
      }
    } else if (rem === 1) {
      if (char !== 'O') {
        return acc + 1;
      }
    }
    return acc;
  }, 0)];
}

module.exports = main;
