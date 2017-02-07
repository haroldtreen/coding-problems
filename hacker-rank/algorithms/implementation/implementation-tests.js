const utils = require('../../../helpers/js-utils');
const acmIcpcTeam = require('./acm-icpc-team');

describe('Implementation', () => {
  describe('acm-icpc-team', () => {
    it('solves test case 4', () => {
      const modulePath = require.resolve('./acm-icpc-team');
      const input = utils.loadInputLines(modulePath, 4);
      const output = utils.loadOutputLines(modulePath, 4);

      expect(acmIcpcTeam(input)).toEqual(output);
    });
  });
});
