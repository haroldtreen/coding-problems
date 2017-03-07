const { expect } = require('chai');
const { isBalanced } = require('../helpers');
const solutionInfo = require('../../test-helpers').solutionInfo(__filename);
const funcs = require(solutionInfo.filename);

for (const key in funcs) {
  const func = funcs[key];

  describe(`${solutionInfo.name}: ${key}`, () => {
    it('returns empty tree with no values', () => {
      let tree = func(null);
      expect(tree.root).to.be.null;
      tree = func([]);
      expect(tree.root).to.be.null;
    });

    it('returns tree with root node set with one value', () => {
      const tree = func([10]);
      expect(tree.root.val).to.equal(10);
    });

    it('returns a balanced tree with 10 nodes', () => {
      const tree = func([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
      expect(isBalanced(tree)).to.be.true;
    });

    it('returns a balanced tree with 13 nodes', () => {
      const tree = func([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);
      expect(isBalanced(tree)).to.be.true;
    });

    it('returns a balanced tree with 255 nodes', () => {
      const values = [];
      for (let i = 1; i <= 255; ++i) {
        values.push(i);
      }
      const tree = func(values);
      expect(isBalanced(tree)).to.be.true;
    });
  });
}
