const solutionInfo = require('../../test-helpers').solutionInfo(__filename);
const { expect } = require('chai');
const funcs = require(solutionInfo.filename);

for (const key in funcs) {
  const func = funcs[key];

  describe(`${solutionInfo.name}: ${key}`, () => {
    it('returns true for the same string', () => {
      let str = 'abcdef';
      expect(func(str, str)).to.be.true;
      str = 'a1b2c3d4';
      expect(func(str, str)).to.be.true;
    });

    [
      ['pale', 'ple'],
      ['pales', 'pale'],
      ['pale', 'bale'],
      ['pale', 'pxle'],
      ['pale', 'pate'],
      ['pale', 'pald'],
      ['answers', 'answer'],
      ['technology', 'etechnology'],
    ].forEach((args) => {
      it(`returns true for strings that are one edit: '${args[0]}' & '${args[1]}'`, () => {
        expect(func(args[0], args[1])).to.be.true;
      });
    });

    [
      ['pale', 'pl'],
      ['paless', 'pale'],
      ['pale', 'bales'],
      ['abcdefghiz', 'ihgfedcbaa'],
      ['1122334455667788', '9911223344556677'],
      ['45678', '1239'],
      ['abcd', 'dcba'],
    ].forEach((args) => {
      it(`returns false for strings that are more than one edit: '${args[0]}' & '${args[1]}'`, () => {
        expect(func(args[0].split(''), args[1].split(''))).to.be.false;
      });
    });
  });
}
