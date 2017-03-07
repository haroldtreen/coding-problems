const { expect } = require('chai');

const solutionInfo = require('../../test-helpers').solutionInfo(__filename);
const classes = require(solutionInfo.filename);

for (const key in classes) {
  const Stack = classes[key];

  describe(`${solutionInfo.name}: ${key}`, () => {
    beforeEach(function () {
      this.stack = new Stack();
    });

    it('can push and pop values from middle stack correctly', function () {
      const stack = [];
      for (let i = 1; i < 100; i += 4) {
        const val = Math.trunc(Math.random() * 999999);
        this.stack.push(2, val);
        stack.push(val);
      }

      stack.reverse().forEach(v => expect(this.stack.pop(2)).to.equal(v));
    });

    it('can push, peek and pop values from all 3 stacks correctly', function () {
      const stacks = [[], [], []];
      for (let j = 9; j > 0; --j) {
        for (let i = 1; i <= 3; ++i) {
          const val = i * 10 + j;
          this.stack.push(i, val);
          stacks[i - 1].push(val);
          expect(this.stack.peek(i)).to.equal(val);
        }
      }

      for (let i = 1; i <= 3; ++i) {
        stacks[i - 1].reverse().forEach(v => expect(this.stack.pop(i)).to.equal(v));
        expect(this.stack.isEmpty(i)).to.be.true;
      }
    });
  });
}
