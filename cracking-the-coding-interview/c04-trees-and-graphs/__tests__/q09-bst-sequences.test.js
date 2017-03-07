import { expect } from 'chai';
import * as helpers from '../helpers';

const solutionInfo = require('../../test-helpers').solutionInfo(__filename);
const funcs = require(solutionInfo.filename);

for (const key in funcs) {
  const func = funcs[key];

  describe(`${solutionInfo.name}: ${key}`, () => {
    beforeEach(function () {
      this.tree = new helpers.Tree();
    });

    it('returns correct permutations for single node tree', function () {
      this.tree.add(1);
      expect(func(this.tree)).to.eql([[1]]);
    });

    it('returns correct permutations for 3 node tree', function () {
      [2, 1, 3].forEach(v => this.tree.add(v));
      expect(func(this.tree)).to.eql([[2, 1, 3], [2, 3, 1]]);
    });

    it('returns correct permutations for 5 node tree', function () {
      [4, 2, 3, 1, 5].forEach(v => this.tree.add(v));
      expect(func(this.tree)).to.eql([
        [4, 2, 1, 3, 5],
        [4, 2, 1, 5, 3],
        [4, 2, 5, 1, 3],
        [4, 5, 2, 1, 3],
        [4, 2, 3, 1, 5],
        [4, 2, 3, 5, 1],
        [4, 2, 5, 3, 1],
        [4, 5, 2, 3, 1],
      ]);
    });
  });
}
