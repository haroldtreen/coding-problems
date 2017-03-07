import { expect } from 'chai';
const { Tree } = require('../helpers');

const solutionInfo = require('../../test-helpers').solutionInfo(__filename);
const funcs = require(solutionInfo.filename);

for (const key in funcs) {
  const func = funcs[key];

  describe(`${solutionInfo.name}: ${key}`, () => {
    beforeEach(function () {
      this.tree = new Tree();
    });

    it('returns true for null tree or root', function () {
      expect(func(null)).to.be.true;
      expect(func(this.tree)).to.be.true;
    });

    it('returns true for single node tree', function () {
      this.tree.add(10);
      expect(func(this.tree)).to.be.true;
    });

    it('returns false for left heavy tree', function () {
      this.tree.add(10);
      this.tree.add(9);
      this.tree.add(8);
      expect(func(this.tree)).to.be.false;
    });

    it('returns false with equal max height tree but uneven', function () {
      this.tree.add(10);
      this.tree.add(11);
      this.tree.add(12);
      this.tree.add(13);
      this.tree.add(9);
      this.tree.add(8);
      this.tree.add(7);
      expect(func(this.tree)).to.be.false;
    });

    it('returns true for larger balanced tree', function () {
      this.tree.add(8);
      expect(func(this.tree), 'root').to.be.true;
      this.tree.add(4);
      this.tree.add(12);
      expect(func(this.tree), 'depth 1').to.be.true;
      this.tree.add(2);
      this.tree.add(6);
      this.tree.add(10);
      this.tree.add(14);
      expect(func(this.tree), 'depth 2').to.be.true;
      this.tree.add(1);
      this.tree.add(3);
      this.tree.add(5);
      this.tree.add(7);
      expect(func(this.tree), '1/2 depth 3').to.be.true;
      this.tree.add(9);
      this.tree.add(11);
      this.tree.add(13);
      this.tree.add(15);
      expect(func(this.tree), 'depth 3').to.be.true;
      this.tree.add(16);
      expect(func(this.tree), '1 depth 4').to.be.true;
    });
  });
}
