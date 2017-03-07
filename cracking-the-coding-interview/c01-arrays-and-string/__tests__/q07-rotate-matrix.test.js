const solutionInfo = require('../../test-helpers').solutionInfo(__filename);
const { expect } = require('chai');
const funcs = require(solutionInfo.filename);

function copyMatrix(matrix) {
  const newMatrix = [];
  matrix.forEach(m => newMatrix.push(m.slice(0)));
  return newMatrix;
}

for (const key in funcs) {
  const func = funcs[key];

  describe(`${solutionInfo.name}: ${key}`, () => {
    it('throws an error when null/undefined/empty matrix', () => {
      expect(() => func(null)).to.throw('invalid matrix');
      expect(() => func(undefined)).to.throw('invalid matrix');
      expect(() => func([])).to.throw('invalid matrix');
    });

    it('returns matrix unchanged with 1,1 matrix', () => {
      const matrix = [[0]];
      expect(func(matrix)).to.eql(matrix);
    });

    [
      [
        [[1, 2], [3, 4]],
        [[3, 1], [4, 2]],
        [[4, 3], [2, 1]],
        [[2, 4], [1, 3]],
      ],
      [
        [[1, 2, 3], [4, 5, 6], [7, 8, 9]],
        [[7, 4, 1], [8, 5, 2], [9, 6, 3]],
        [[9, 8, 7], [6, 5, 4], [3, 2, 1]],
        [[3, 6, 9], [2, 5, 8], [1, 4, 7]],
      ],
      [
        [
          [1, 2, 3, 4],
          [5, 6, 7, 8],
          [9, 10, 11, 12],
          [13, 14, 15, 16],
        ],
        [
          [13, 9, 5, 1],
          [14, 10, 6, 2],
          [15, 11, 7, 3],
          [16, 12, 8, 4],
        ],
        [
          [16, 15, 14, 13],
          [12, 11, 10, 9],
          [8, 7, 6, 5],
          [4, 3, 2, 1],
        ],
        [
          [4, 8, 12, 16],
          [3, 7, 11, 15],
          [2, 6, 10, 14],
          [1, 5, 9, 13],
        ],
      ],
    ].forEach((context) => {
      it(`can rotate a ${context[0].length}x${context[0].length} matrix back to original positions`, () => {
        const matrix = copyMatrix(context[context.length - 1]);
        for (let i = 0; i < context.length; ++i) {
          expect(func(matrix)).to.eql(context[i]);
        }
      });
    });
  });
}
