const { expect } = require('chai');

const solutionInfo = require('../../test-helpers').solutionInfo(__filename);
const classes = require(solutionInfo.filename);

for (const key in classes) {
  const Stack = classes[key];

  describe(`${solutionInfo.name}: ${key}`, () => {
    beforeEach(function () {
      this.stack = new Stack();
    });

    it('min is undefined when stack is empty', function () {
      expect(this.stack.isEmpty()).to.be.true;
      expect(this.stack.min()).to.be.undefined;
    });

    it('can push values in ascending order and min stays the same', function () {
      const values = [2, 4, 6, 8, 10, 12];

      values.forEach((v) => {
        this.stack.push(v);
        expect(this.stack.min()).to.equal(2);
      });

      values.reverse().forEach((v) => {
        expect(this.stack.min()).to.equal(2);
        expect(this.stack.pop()).to.equal(v);
      });

      expect(this.stack.min()).to.be.undefined;
    });

    it('can push values in descending order and min is updated', function () {
      const values = [12, 10, 8, 6, 4, 2];

      values.forEach((v) => {
        this.stack.push(v);
        expect(this.stack.min()).to.equal(v);
      });

      values.reverse().forEach((v) => {
        expect(this.stack.min()).to.equal(v);
        expect(this.stack.pop()).to.equal(v);
      });

      expect(this.stack.min()).to.be.undefined;
    });
  });
}
