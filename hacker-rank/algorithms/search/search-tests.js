const connectedCellsInAGrid = require('./connected-cells-in-a-grid');

describe('Search', () => {
  describe('connected-cells-in-a-grid', () => {
    it('solves example 1', () => {
      const example = [
        '4',
        '4',
        '1 1 0 0',
        '0 1 1 0',
        '0 0 1 0',
        '1 0 0 0',
      ];
      const output = ['5'];
      expect(connectedCellsInAGrid(example)).toEqual(output);
    });

    it('solves test case 1', () => {
      const input = [
        '5',
        '4',
        '0 0 1 1',
        '0 0 1 0',
        '0 1 1 0',
        '0 1 0 0',
        '1 1 0 0',
      ];
      const output = ['8'];
      expect(connectedCellsInAGrid(input)).toEqual(output);
    });

    it('solves test case 6', () => {
      const input = [
        '8',
        '9',
        '0 1 0 0 0 0 1 1 0',
        '1 1 0 0 1 0 0 0 1',
        '0 0 0 0 1 0 1 0 0',
        '0 1 1 1 0 1 0 1 1',
        '0 1 1 1 0 0 1 1 0',
        '0 1 0 1 1 0 1 1 0',
        '0 1 0 0 1 1 0 1 1',
        '1 0 1 1 1 1 0 0 0',
      ];
      const output = ['29'];
      expect(connectedCellsInAGrid(input)).toEqual(output);
    });
  });
});
