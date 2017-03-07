function main(lines) {
  lines.shift();

  const charSets = lines.map(l => new Set(l.split('')));

  const gemstones = charSets.reduce((gemstoneSet, set) => {
    const values = gemstoneSet.values();
    return new Set(Array.from(values).filter(e => set.has(e)));
  }, charSets[0]).values();

  return [Array.from(gemstones).length.toString()];
}

module.exports = main;
