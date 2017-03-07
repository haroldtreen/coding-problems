const helpers = require('../helpers');
const { expect } = require('chai');

const solutionInfo = require('../../test-helpers').solutionInfo(__filename);
const funcs = require(solutionInfo.filename);

for (const key in funcs) {
  const func = funcs[key];

  describe(`${solutionInfo.name}: ${key}`, () => {
    [
      [1, 2, 1],
      [1, 1],
      [2, 1, 3, 3, 1, 2],
      [2, 1, 3, 8, 9, 16, 16, 9, 8, 3, 1, 2],
      [2, 1, 3, 8, 9, 16, 11, 16, 9, 8, 3, 1, 2],
    ].forEach((arg) => {
      it(`returns true for list ${arg}`, () => {
        const list = helpers.arrayToLinkedList(arg);
        expect(func(list)).to.be.true;
        // verify list is umodified
        expect(helpers.linkedListToArray(list)).to.eql(arg);
      });
    });

    [
      [1, 2, 2],
      [2, 1],
      [2, 1, 5, 4, 3, 2],
    ].forEach((arg) => {
      it(`returns false for list ${arg}`, () => {
        const list = helpers.arrayToLinkedList(arg);
        expect(func(list)).to.be.false;
        // verify list is umodified
        expect(helpers.linkedListToArray(list)).to.eql(arg);
      });
    });
  });
}
