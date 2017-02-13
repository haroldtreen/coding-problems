const stringPatterns = require('./string-patterns');
const spiralArray = require('./spiral-matrix-traversal');

describe('Miscelaneous', () => {
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
        [9, 10]
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
