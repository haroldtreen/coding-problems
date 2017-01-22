function getNeighbors(matrix, point) {
  const neighbors = [];

  for (let a = -1; a <= 1; a += 1) {
    for (let b = -1; b <= 1; b += 1) {
      const i = point.i + a;
      const j = point.j + b;

      if (i >= matrix.length || i < 0) {
        continue;
      }
      if (j >= matrix[i].length || j < 0) {
        continue;
      }
      if (a === 0 && b === 0) {
        continue;
      }

      if (matrix[i][j] === '1') {
        matrix[i][j] = '0'; // eslint-disable-line
        neighbors.push({ i, j });
      }
    }
  }
  return neighbors;
}

function getRegion(matrix, start) {
  const region = [];
  region.push(start);
  matrix[start.i][start.j] = '0';

  let neighbors = getNeighbors(matrix, start);

  while (neighbors.length > 0) {
    const point = neighbors.pop();
    region.push(point);

    neighbors = neighbors.concat(getNeighbors(matrix, point));
  }
  return region;
}

function getRegions(matrix) {
  const regions = [];

  for (let i = 0; i < matrix.length; i += 1) {
    for (let j = 0; j < matrix[i].length; j += 1) {
      const point = matrix[i][j];

      if (point === '1') {
        const region = getRegion(matrix, { i, j });
        regions.push(region);
      }
    }
  }
  return regions;
}

function largestConnected(matrix) {
  const regions = getRegions(matrix);
  return Math.max(...regions.map(r => r.length));
}

function main(lines) {
  lines.shift();
  lines.shift();

  const matrix = lines.map(l => l.split(/\s+/));

  return [largestConnected(matrix).toString()];
}

module.exports = main;
