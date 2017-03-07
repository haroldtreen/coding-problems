const { expect } = require('chai');

const solutionInfo = require('../../test-helpers').solutionInfo(__filename);
const classes = require(solutionInfo.filename);

for (const key in classes) {
  const Stack = classes[key];

  describe(`${solutionInfo.name}: ${key}`, () => {
    beforeEach(function () {
      this.stack = new Stack(4);
    });

    it('constructor throws error when maxSize isnt passed in', () => {
      expect(() => new Stack()).to.throw('maxSize argument is required');
    });

    it('can push 100 items and pop them in order', function () {
      let i;
      for (i = 1; i <= 100; ++i) {
        this.stack.push(i);
      }

      for (i = 100; i > 0; --i) {
        expect(this.stack.pop()).to.equal(i);
      }
    });

    it('pop works correctly after using popAt to remove one from each stack', function () {
      let i;
      for (i = 1; i <= 16; ++i) {
        this.stack.push(i);
      }
      for (i = 4; i >= 1; --i) {
        expect(this.stack.popAt(i)).to.equal(i * 4);
      }
      for (i = 16; i > 0; --i) {
        if (i % 4) {
          expect(this.stack.pop()).to.equal(i);
        }
      }
    });

    it('can push 20 items and popAt to remove whole stacks worth of items from middle', function () {
      let i;
      for (i = 1; i <= 20; ++i) {
        this.stack.push(i);
      }

      for (i = 0; i < 9; ++i) {
        expect(this.stack.popAt(2)).to.equal(8 + i);
      }

      [20, 19, 18, 17, 7, 6, 5, 4, 3, 2, 1].forEach(v =>
        expect(this.stack.pop()).to.equal(v));
    });
  });
}
