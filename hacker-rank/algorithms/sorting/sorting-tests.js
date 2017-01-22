const bubbleSort = require('./bubble-sort');

describe('Sorting', () => {
  describe('bubble sort', () => {
    it('solves example 2', () => {
      const example = [
        '3',
        '3 2 1',
      ];
      const output = [
        'Array is sorted in 3 swaps.',
        'First Element: 1',
        'Last Element: 3',
      ];

      expect(bubbleSort(example)).toEqual(output);
    });
  });
});
