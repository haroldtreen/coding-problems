const utils = require('../../../helpers/js-utils');
const twoCharacters = require('./two-characters');

describe('Strings', () => {
  describe('two-characters', () => {
    it('solves example 1', () => {
      const example = [
        '10',
        'beabeefeab',
      ];
      const output = [
        '5',
      ];
      expect(twoCharacters(example)).toEqual(output);
    });

    it('solves test case 19', () => {
      const modulePath = require.resolve('./two-characters');
      const input = utils.loadInputLines(modulePath, 19);
      const output = utils.loadOutputLines(modulePath, 19);

      expect(twoCharacters(input)).toEqual(output);
    });
  });
});
