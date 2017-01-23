const utils = require('../../../helpers/js-utils');
const bubbleSort = require('./bubble-sort');
const mergeSort = require('./merge-sort-inversions');

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

  describe('merge short with inversions', () => {
    it('solves the example', () => {
      const example = [
        '2',
        '5',
        '1 1 1 2 2',
        '5',
        '2 1 3 1 2',
      ];
      const output = ['0', '4'];
      expect(mergeSort(example)).toEqual(output);
    });

    it('solved test case 4', () => {
      const modulePath = require.resolve('./merge-sort-inversions');
      const input = utils.loadInputLines(modulePath, 4);
      const output = utils.loadOutputLines(modulePath, 4);

      expect(mergeSort(input)).toEqual(output);
    });
  });
});
