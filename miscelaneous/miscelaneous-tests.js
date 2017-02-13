const stringPatterns = require('./string-patterns');
const mergeSorted = require('./merge-sorted');
const spiralArray = require('./spiral-matrix-traversal');
const consecutiveSum = require('./consecutive-sum');
const kClosest = require('./k-closest-neighbours');

describe('Miscelaneous', () => {
  describe('k-closest-neighbours', () => {
    it('finds the k closest points', () => {
      const points = [
        { x: 6, y: 7 },
        { x: 1, y: 1 },
        { x: 2, y: 2 },
        { x: 2, y: 3 },
        { x: 3, y: 2 },
        { x: 4, y: 4 },
      ];

      const neighbours = kClosest(3, points);
      expect(neighbours.length).toEqual(3);
      expect(neighbours[0]).toEqual({ x: 1, y: 1 });
      expect(neighbours[2]).toEqual({ x: 2, y: 3 });
    });

    it('finds the k closest points', () => {
      const points = [
        { x: 2, y: 2 },
        { x: 3, y: 2 },
        { x: 4, y: 4 },
      ];

      const neighbours = kClosest(3, points);
      expect(neighbours.length).toEqual(3);
      expect(neighbours).toEqual(points);
    });
  });

  describe('largest-consecutive-sum', () => {
    it('finds the largest consecutive sum', () => {
      const example = [1, 3, 4, 0, 100, 1, -10, 1];
      const output = 109;

      expect(consecutiveSum(example)).toEqual(output);
    });

    it('finds the largest consecutive negative sum', () => {
      const example = [-1, -3, -4];
      const output = -1;

      expect(consecutiveSum(example)).toEqual(output);
    });

    it('finds the largest consecutive positive sum', () => {
      const example = [1, 3, 10];
      const output = 14;

      expect(consecutiveSum(example)).toEqual(output);
    });

    it('finds the largest consecutive mixed sum', () => {
      const example = [13, 10, -23, 100, -37, 10, 37, -10, 120];
      const output = 220;

      expect(consecutiveSum(example)).toEqual(output);
    });
  });

  describe('merge-sorted', () => {
    it('merges two sorted lists', () => {
      const n = [1, 3, 6, 8];
      const m = [2, 5, 7, 9, 10, 11];
      const merged = m.concat(n).sort((a, b) => a - b);

      expect(mergeSorted(n, m)).toEqual(merged);
    });
  });

  describe('spiral-matrix-traversal', () => {
    it('traverses a 3x3 array', () => {
      const arr = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ];
      const output = ['1 2 3 6 9 8 7 4 5'];
      expect(spiralArray(arr)).toEqual(output);
    });

    it('traverses a 4x4 array', () => {
      const arr = [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
        [13, 14, 15, 16],
      ];
      const output = ['1 2 3 4 8 12 16 15 14 13 9 5 6 7 11 10'];
      expect(spiralArray(arr)).toEqual(output);
    });

    it('traverses a 2x5 array', () => {
      const arr = [
        [1, 2, 3, 4, 5],
        [6, 7, 8, 9, 10],
      ];
      const output = ['1 2 3 4 5 10 9 8 7 6'];
      expect(spiralArray(arr)).toEqual(output);
    });

    it('traverses a 5x2 array', () => {
      const arr = [
        [1, 2],
        [3, 4],
        [5, 6],
        [7, 8],
        [9, 10],
      ];
      const output = ['1 2 4 6 8 10 9 7 5 3'];
      expect(spiralArray(arr)).toEqual(output);
    });
  });

  describe('string-patterns', () => {
    it('matches "abab" to "redblueredblue"', () => {
      expect(stringPatterns('abab', 'redblueredblue')).toEqual(1);
    });

    it('matches "aaaa" to "asdasdasdasd"', () => {
      expect(stringPatterns('aaaa', 'asdasdasdasd')).toEqual(1);
    });

    it('does not match "aabb" to "xyzabcxzyabc"', () => {
      expect(stringPatterns('aabb', 'xyzabcxzyabc')).toEqual(0);
    });
  });
});
