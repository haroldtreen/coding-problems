import { expect } from 'chai';

const solutionInfo = require('../../test-helpers').solutionInfo(__filename);
const funcs = require(solutionInfo.filename);

for (const key in funcs) {
  const func = funcs[key];

  describe(`${solutionInfo.name}: ${key}`, () => {
    it('returns project where there is only one project', () => {
      expect(func([11], [])).to.eql([11]);
    });

    it('returns projects in the reverse of supplied order with no dependencies', () => {
      expect(func([9, 1, 5, 6], [])).to.eql([6, 5, 1, 9]);
    });

    it('returns in the right order with simple chain of dependencies', () => {
      expect(func([9, 1, 5, 6], [
        [6, 5],
        [5, 1],
        [1, 9],
      ])).to.eql([9, 1, 5, 6]);
    });

    it('throws an error when dependences are cyclic', () => {
      expect(() => func([9, 1, 5, 6], [
        [6, 5],
        [5, 1],
        [1, 9],
        [9, 5],
      ])).to.throw('dependencies are cyclic');
    });

    it('correctly orders with larger acyclic graph', () => {
      expect(func([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], [
        [2, 1],
        [3, 1],
        [4, 2],
        [6, 2],
        [5, 3],
        [7, 3],
        [8, 4],
        [11, 8],
        [12, 8],
        [10, 6],
        [10, 5],
        [9, 7],
        [13, 10],
        [13, 9],
        [14, 13],
      ])).to.eql([15, 1, 3, 7, 9, 5, 2, 6, 10, 13, 14, 4, 8, 12, 11]);
    });
  });
}
