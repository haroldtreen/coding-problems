const solutionInfo = require('../../test-helpers').solutionInfo(__filename);
const { expect } = require('chai');
const funcs = require(solutionInfo.filename);

for (const key in funcs) {
  const func = funcs[key];

  describe(`${solutionInfo.name}: ${key}`, () => {
    [
      'abcdefghi',
      'jklpoiuqwerzxcvmnsadf',
      '1234567890',
      'AaBbCcDdeFg1234567890(*&^%$#@!)',
    ].forEach((arg) => {
      it(`returns true for unique string: '${arg}'`, () => {
        expect(func(arg.split(''))).to.be.true;
      });
    });

    [
      'abcadef',
      'aaaaaaaaaa',
      'abcdefghijklmnopqrstuvwxyza',
      '1234567890asdklf1',
      '!@#$%^&*()(*#($&#(*$&#*($&#()))))',
    ].forEach((arg) => {
      it(`returns false for string with dupes: '${arg}'`, () => {
        expect(func(arg.split(''))).to.be.false;
      });
    });
  });
}
