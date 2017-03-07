const solutionInfo = require('../../test-helpers').solutionInfo(__filename);
const { expect } = require('chai');
const funcs = require(solutionInfo.filename);

for (const key in funcs) {
  const func = funcs[key];

  describe(`${solutionInfo.name}: ${key}`, () => {
    it('returns input where null/undefined', () => {
      expect(func(null)).to.be.null;
      expect(func(undefined)).to.be.undefined;
    });

    it('returns input where empty string', () => {
      expect(func('')).to.equal('');
    });

    [
      'a',
      'aa',
      'abc',
      'aabbcc',
      'ababababccab',
    ].forEach((arg) => {
      it(`returns input string where compression doesn't use less space: '${arg}'`, () => {
        expect(func(arg)).to.eql(arg);
      });
    });

    [
      { arg: 'aaa', out: '3a' },
      { arg: 'bbbbbb', out: '6b' },
      { arg: 'abbbbbbc', out: '1a6b1c' },
      { arg: 'aaabccc', out: '3a1b3c' },
      { arg: 'hhellllllllooooo!', out: '2h1e8l5o1!' },
      { arg: 'woorrrllllddddd', out: '1w2o3r4l5d' },
    ].forEach((context) => {
      it(`returns ${context.out} with string ${context.arg}`, () => {
        expect(func(context.arg)).to.eql(context.out);
      });
    });
  });
}
