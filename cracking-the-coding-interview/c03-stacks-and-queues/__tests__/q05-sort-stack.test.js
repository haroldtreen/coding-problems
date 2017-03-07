const solutionInfo = require('../../test-helpers').solutionInfo(__filename);
const { expect } = require('chai');
const funcs = require(solutionInfo.filename);

for (const key in funcs) {
  const func = funcs[key];

  describe(`${solutionInfo.name}: ${key}`, () => {
    it('does not crash on an empty list', () => {
      const stack = [];
      expect(() => func(stack)).to.not.throw(Error).and.to.equal(stack);
    });

    it('works with a single element stack', () => {
      expect(func([4])).to.eql([4]);
    });

    [
      [5, 3, 1, 4, 6, 2],
      [9, 8, 7, 6, 5, 4, 3, 2, 1],
      [1, 2, 1, 2, 1, 2, 1, 2],
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
      [100, 15, 20, 30, 10, 80, 50, 45, 75, 35, 85, 55, 40, 99],
    ].forEach((arg) => {
      it(`correctly sorts ${arg}`, () => {
        const expected = arg.slice(0).sort((a, b) => a < b ? 1 : a > b ? -1 : 0);

        expect(func(arg)).to.eql(expected);
      });
    });

    it('correctly sorts with 100 random numbers', () => {
      const stack = [];
      for (let i = 0; i < 100; ++i) {
        stack.push(Math.trunc(Math.random() * 9999999));
      }
      const expected = stack.slice(0).sort((a, b) => a < b ? 1 : a > b ? -1 : 0);
      expect(func(stack)).to.eql(expected);
    });
  });
}
