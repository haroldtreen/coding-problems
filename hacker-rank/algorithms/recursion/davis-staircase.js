const climbCache = [0, 1, 2, 4];

function waysToClimb(n) {
  if (n <= 0) {
    return 0;
  }
  climbCache[n] = climbCache[n] || waysToClimb(n - 1) + waysToClimb(n - 2) + waysToClimb(n - 3);
  return climbCache[n];
}

function main(lines) {
  lines.shift();
  const staircases = lines.map(Number);

  return staircases.map(waysToClimb);
}

module.exports = main;
