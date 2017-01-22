const utils = require('../../../helpers/js-utils');
const findTheRunningMedian = require('./find-the-running-median');

describe('heaps', () => {
  describe('find-the-running-median', () => {
    it('passes example 1', () => {
      const example = ['6', '12', '4', '5', '3', '8', '7'];
      const output = ['12.0', '8.0', '5.0', '4.5', '5.0', '6.0'];
      expect(findTheRunningMedian(example)).toEqual(output);
    });

    it('passes example 2', () => {
      const example = ['10', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
      const output = ['1.0', '1.5', '2.0', '2.5', '3.0', '3.5', '4.0', '4.5', '5.0', '5.5'];

      expect(findTheRunningMedian(example)).toEqual(output);
    });

    it('passes a random example', () => {
      const example = ['4', '0', '100', '60', '20', '25', '25', '1000', '30', '35', '0', '200', '300', '250', '32'];
      const output = ['0.0', '50.0', '60.0', '40.0', '25.0', '25.0', '25.0', '27.5', '30.0', '27.5', '30.0', '32.5', '35.0', '33.5'];

      expect(findTheRunningMedian(example)).toEqual(output);
    });

    it('passes test case 7', () => {
      const modulePath = `${__dirname}/find-the-running-median.js`;
      const input = utils.loadInputLines(modulePath, 7);
      const output = utils.loadOutputLines(modulePath, 7);

      expect(findTheRunningMedian(input)).toEqual(output);
    });
  });
});
