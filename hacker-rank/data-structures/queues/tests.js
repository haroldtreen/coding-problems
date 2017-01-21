const queueUsingTwoStacks = require('./queue-using-two-stacks');
const utils = require('../../../helpers/js-utils');

describe('queues', () => {
  describe('queue-using-two-stacks', () => {
    it('solves example 1', () => {
      const input = ['10', '1 42', '2', '1 14', '3', '1 28', '3', '1 60', '1 78', '2', '2'];
      const output = ['14', '14'];

      expect(queueUsingTwoStacks(input)).toEqual(output);
    });

    it('solves test case 4', () => {
      const modulePath = `${__dirname}/queue-using-two-stacks.js`;
      const input = utils.loadInputLines(modulePath, 4);
      const output = utils.loadOutputLines(modulePath, 4);

      expect(queueUsingTwoStacks(input)).toEqual(output);
    });
  });
});
