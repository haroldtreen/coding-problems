const { expect } = require('chai');
const { Tree } = require('../helpers');

const solutionInfo = require('../../test-helpers').solutionInfo(__filename);
const funcs = require(solutionInfo.filename);

function toArrayOfArrays(lists) {
  return lists.map(l => l.toArray());
}

for (const key in funcs) {
  const func = funcs[key];

  describe(`${solutionInfo.name}: ${key}`, () => {
    beforeEach(function () {
      this.tree = new Tree();
    });

    it('returns empty list for empty tree', function () {
      expect(toArrayOfArrays(func(this.tree))).to.eql([]);
    });

    it('returns true for single node tree', function () {
      this.tree.add(10);
      expect(toArrayOfArrays(func(this.tree))).to.eql([[10]]);
    });

    it('returns single value lists for left heavy tree', function () {
      [10, 9, 8].forEach(v => this.tree.add(v));
      expect(toArrayOfArrays(func(this.tree))).to.eql([
        [10],
        [9],
        [8],
      ]);
    });

    it('returns 2 value lists for upside down V shaped tree', function () {
      [10, 11, 12, 13, 9, 8, 7].forEach(v => this.tree.add(v));
      expect(toArrayOfArrays(func(this.tree))).to.eql([
        [10],
        [9, 11],
        [8, 12],
        [7, 13],
      ]);
    });

    it('returns true for larger balanced tree', function () {
      const expected = [];
      this.tree.add(8);
      expected.push([8]);
      expect(toArrayOfArrays(func(this.tree)), 'root').to.be.eql(expected);
      this.tree.add(4);
      this.tree.add(12);
      expected.push([4, 12]);
      expect(toArrayOfArrays(func(this.tree)), 'depth 1').to.eql(expected);
      this.tree.add(2);
      this.tree.add(6);
      this.tree.add(10);
      this.tree.add(14);
      expected.push([2, 6, 10, 14]);
      expect(toArrayOfArrays(func(this.tree)), 'depth 2').to.eql(expected);
      this.tree.add(1);
      this.tree.add(3);
      this.tree.add(5);
      this.tree.add(7);
      expected.push([1, 3, 5, 7]);
      expect(toArrayOfArrays(func(this.tree)), '1/2 depth 3').to.eql(expected);
      this.tree.add(9);
      this.tree.add(11);
      this.tree.add(13);
      this.tree.add(15);
      expected[expected.length - 1].push(9, 11, 13, 15);
      expect(toArrayOfArrays(func(this.tree)), 'depth 3').to.eql(expected);
      this.tree.add(16);
      expected.push([16]);
      expect(toArrayOfArrays(func(this.tree)), '1 depth 4').to.eql(expected);
    });
  });
}
