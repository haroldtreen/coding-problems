/*
  O(k * n)

  For each point: O(n)
    - See if it's distance is larger than the largest we've kept or if we need more points.
    - If we have too many points, pop off the last (furthest)
    - Insert the point in the right order. ( O(k) )
    - Record the new largest.
*/

function distance(point) {
  return Math.sqrt(Math.pow(point.x, 2) + Math.pow(point.y, 2));
}

function insertOrdered(arr, point) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (distance(arr[i]) < distance(point)) {
      arr.splice(i + 1, 0, point);
      return arr;
    }
  }
  arr.splice(0, 0, point);
  return arr;
}

function main(k, points) {
  let largestDistance = Number.MAX_VALUE;

  return points.reduce((closest, point) => {
    if (distance(point) < largestDistance || closest.length < k) {
      if (closest.length >= k) {
        closest.pop();
      }
      insertOrdered(closest, point);
      largestDistance = distance(closest[closest.length - 1]);
    }
    return closest;
  }, []);
}

/*
  Could also do a O(n * log n) solution.

  Sort points by distance
  Select the first 5.
*/

function mainWSort(k, points) {
  points.sort((a, b) => distance(a) - distance(b));
  return points.slice(0, k);
}

module.exports = mainWSort;
// module.exports = main;
