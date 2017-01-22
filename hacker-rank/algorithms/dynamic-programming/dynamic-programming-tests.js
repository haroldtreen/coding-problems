const utils = require('../../../helpers/js-utils');
const coinChange = require('./coin-change');

describe('Dynamic Programming', () => {
  describe('coin change', () => {
    it('solves example 1', () => {
      const example = ['4 3', '1 2 3'];
      const output = ['4'];

      expect(coinChange(example)).toEqual(output);
    });

    it('solves example 2', () => {
      const example = ['10 4', '2 5 3 6'];
      const output = ['5'];

      expect(coinChange(example)).toEqual(output);
    });

    it('solves test case 10', () => {
      const modulePath = `${__dirname}/coin-change.js`;
      const input = utils.loadInputLines(modulePath, 10);
      const output = utils.loadOutputLines(modulePath, 10);

      expect(coinChange(input)).toEqual(output);
    });
  });
});
