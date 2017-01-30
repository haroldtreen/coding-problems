const utils = require('../../../helpers/js-utils');
const twoCharacters = require('./two-characters');
const richieRich = require('./richie-rich');

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

  describe('richie rich', () => {
    it('solves example 1', () => {
      const input = ['4 1', '3943'];
      const output = ['3993'];

      expect(richieRich(input)).toEqual(output);
    });

    it('solves example 2', () => {
      const input = ['6 3', '092282'];
      const output = ['992299'];

      expect(richieRich(input)).toEqual(output);
    });

    it('solves example 3', () => {
      const input = ['4 1', '0011'];
      const output = ['-1'];

      expect(richieRich(input)).toEqual(output);
    });

    it('solves test case 6', () => {
      const input = ['5 1', '12321'];
      const output = ['12921'];

      expect(richieRich(input)).toEqual(output);
    });
  });
});
