const solutionInfo = require('../../test-helpers').solutionInfo(__filename);
const { expect } = require('chai');
const funcs = require(solutionInfo.filename);

for (const key in funcs) {
  const func = funcs[key];

  describe(`${solutionInfo.name}: ${key}`, () => {
    it('returns false with null/undefined as input', () => {
      expect(func(undefined)).to.be.false;
      expect(func(null)).to.be.false;
    });

    it('returns true for an empty array', () => {
      expect(func([])).to.be.true;
    });

    [
      ' ',
      '   ',
      'aabb',
      'ab a b',
      ' a b a b ',
      'sasadfgsadfghjk;hjk;sadfghjk;dfghjk;',
      'sa sadfgsadfgh jk;hjkz;sadfg hjk;dfghjk;',
    ].forEach((arg) => {
      it(`returns true for palindromic string: '${arg}'`, () => {
        expect(func(arg.split(''))).to.be.true;
      });
    });

    [
      'abcadef',
      '1234567890',
      'a b',
    ].forEach((arg) => {
      it(`returns false for non-palindromic string: '${arg}'`, () => {
        expect(func(arg.split(''))).to.be.false;
      });
    });
  });
}
