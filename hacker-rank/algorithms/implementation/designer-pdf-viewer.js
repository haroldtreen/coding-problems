function main(lines) {
  const word = lines.pop();
  const heights = lines.pop().split(' ').map(Number);

  const ASCII_A = 97;
  const charHeights = [].map.call(word, c => heights[c.charCodeAt(0) - ASCII_A]);

  return [Math.max.apply(null, charHeights) * word.length];
}

module.exports = main;
