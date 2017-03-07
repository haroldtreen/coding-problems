const solutionInfo = require('../../test-helpers').solutionInfo(__filename);
const { expect } = require('chai');
const funcs = require(solutionInfo.filename);

for (const key in funcs) {
  const func = funcs[key];

  describe(`${solutionInfo.name}: ${key}`, () => {
    [
      ['abcdefghi', 'ihgfedcba'],
      ['1a1', 'a11'],
      ['1234567812345678', '8877665544332211'],
      ['icarraci', 'carcarii'],
    ].forEach((args) => {
      it(`returns true for strings that are permutations: '${args[0]}' & '${args[1]}'`, () => {
        expect(func(args[0].split(''), args[1].split(''))).to.be.true;
      });
    });

    [
      ['abcdefghiz', 'ihgfedcbaa'],
      ['1a1', '11'],
      ['1122334455667788', '9911223344556677'],
      ['45678', '1239'],
    ].forEach((args) => {
      it(`returns false for strings that are not permutations: '${args[0]}' & '${args[1]}'`, () => {
        expect(func(args[0].split(''), args[1].split(''))).to.be.false;
      });
    });
  });
}
