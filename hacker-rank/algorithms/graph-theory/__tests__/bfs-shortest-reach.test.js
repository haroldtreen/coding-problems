const utils = require('../../../../helpers/js-utils');
const bfsShortestReach = require('../bfs-shortest-reach');

describe('Graph Theory', () => {
  describe('bfs-shortest-reach', () => {
    it('solves example 1', () => {
      const example = [
        '2',
        '4 2',
        '1 2',
        '1 3',
        '1',
        '3 1',
        '2 3',
        '2',
      ];
      const output = ['6 6 -1', '-1 6'];

      expect(bfsShortestReach(example)).toEqual(output);
    });

    xit('solves test case 5', () => {
      const modulePath = require.resolve('./bfs-shortest-reach');
      const input = utils.loadInputLines(modulePath, 5);
      const output = utils.loadOutputLines(modulePath, 5);

      expect(bfsShortestReach(input)).toEqual(output);
    });
  });
});
