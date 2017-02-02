class Grid {
  constructor(grid) {
    this.grid = grid.map(r => r.split(''));
  }

  iterate(start, nextFn) {
    const points = [];
    const isIndex = v => v >= 0 && v < this.grid.length;
    let next = nextFn(start);

    while (isIndex(next.x) && isIndex(next.y) && this.grid[next.x][next.y] !== 'X') {
      points.push(next);
      next = nextFn(next);
    }
    return points;
  }

  adjacents(point) {
    const searchUp = ({ x, y }) => ({ x: x + 1, y });
    const searchDown = ({ x, y }) => ({ x: x - 1, y });
    const searchLeft = ({ x, y }) => ({ x, y: y - 1 });
    const searchRight = ({ x, y }) => ({ x, y: y + 1 });

    return [
      searchUp, searchDown, searchLeft, searchRight,
    ].reduce((acc, curr) => acc.concat(this.iterate(point, curr)), []);
  }

  minSteps(start, end) {
    let queue = [start];
    const distances = this.grid.map(r => r.map(() => Number.MAX_VALUE));

    let current = start;
    let currentDistance;
    distances[current.x][current.y] = 0;

    const updateDistances = (a) => {
      distances[a.x][a.y] = currentDistance + 1;
    };

    const distanceNotSet = a => distances[a.x][a.y] > currentDistance + 1;

    while (queue.length > 0) {
      current = queue.shift();
      currentDistance = distances[current.x][current.y];

      if (current.x === end.x && current.y === end.y) {
        break;
      }

      const adjacent = this.adjacents(current).filter(distanceNotSet);
      adjacent.forEach(updateDistances);
      queue = queue.concat(adjacent);
    }
    return currentDistance;
  }
}

function main(lines) {
  lines.shift();
  if (!lines[lines.length - 1]) {
    lines.pop();
  }
  const coords = lines.pop().split(' ').map(Number);
  const start = { x: coords[0], y: coords[1] };
  const end = { x: coords[2], y: coords[3] };

  const map = new Grid(lines);

  return [map.minSteps(start, end).toString()];
}

module.exports = main;
