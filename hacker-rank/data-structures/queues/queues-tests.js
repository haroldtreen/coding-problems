const queueUsingTwoStacks = require('./queue-using-two-stacks');
const castleOnTheGrid = require('./castle-on-the-grid');
const utils = require('../../../helpers/js-utils');

describe('queues', () => {
  describe('castle-on-the-grid', () => {
    const modulePath = require.resolve('./castle-on-the-grid');

    it('solves example 1', () => {
      const example = [
        '3',
        '.X.',
        '.X.',
        '...',
        '0 0 0 2',
      ];
      const output = ['3'];
      expect(castleOnTheGrid(example)).toEqual(output);
    });

    it('solves test case 6', () => {
      const input = utils.loadInputLines(modulePath, 6);
      const output = utils.loadOutputLines(modulePath, 6);

      expect(castleOnTheGrid(input)).toEqual(output);
    });

    it('solves test case 0', () => {
      const input = utils.loadInputLines(modulePath, 0);
      const output = utils.loadOutputLines(modulePath, 0);

      expect(castleOnTheGrid(input)).toEqual(output);
    });

    it('solves test case 2', () => {
      const input = utils.loadInputLines(modulePath, 2);
      const output = utils.loadOutputLines(modulePath, 2);

      expect(castleOnTheGrid(input)).toEqual(output);
    });
  });

  describe('queue-using-two-stacks', () => {
    it('solves example 1', () => {
      const input = ['10', '1 42', '2', '1 14', '3', '1 28', '3', '1 60', '1 78', '2', '2'];
      const output = ['14', '14'];

      expect(queueUsingTwoStacks(input)).toEqual(output);
    });

    it('solves test case 4', () => {
      const modulePath = require.resolve('./queue-using-two-stacks.js');
      const input = utils.loadInputLines(modulePath, 4);
      const output = utils.loadOutputLines(modulePath, 4);

      expect(queueUsingTwoStacks(input)).toEqual(output);
    });
  });
});
