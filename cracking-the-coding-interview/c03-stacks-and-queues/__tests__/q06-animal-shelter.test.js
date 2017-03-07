const solutionInfo = require('../../test-helpers').solutionInfo(__filename);
const { expect } = require('chai');
const classes = require(solutionInfo.filename);

for (const key in classes) {
  const AnimalShelter = classes[key];

  describe(`${solutionInfo.name}: ${key}`, () => {
    beforeEach(function () {
      this.obj = new AnimalShelter();
    });

    it('any returns whichever animal is in queue', function () {
      this.obj.enqueueCat('cat');
      expect(this.obj.dequeueAny()).to.equal('cat');
      expect(this.obj.dequeueAny()).to.be.undefined;

      this.obj.enqueueDog('dog');
      expect(this.obj.dequeueAny()).to.equal('dog');
      expect(this.obj.dequeueAny()).to.be.undefined;
    });

    it('returns animals in the right order', function () {
      for (let i = 0; i < 4; ++i) {
        this.obj.enqueueCat(`cat${i}`);
      }

      for (let i = 0; i < 4; ++i) {
        expect(this.obj.dequeueAny()).to.equal(`cat${i}`);
      }
    });

    it('returns animals in alternating order when enqueued that way', function () {
      for (let i = 20; i > 0; --i) {
        if (i & 1) {
          this.obj.enqueueCat(i);
        } else {
          this.obj.enqueueDog(i);
        }
      }

      for (let i = 20; i > 0; --i) {
        expect(this.obj.dequeueAny()).to.equal(i);
      }
    });

    it('correctly returns animals when enqueued alternating but dequeued one at a time', function () {
      for (let i = 20; i > 0; --i) {
        if (i & 1) {
          this.obj.enqueueCat(i);
        } else {
          this.obj.enqueueDog(i);
        }
      }

      for (let i = 20; i > 10; i -= 2) {
        expect(this.obj.dequeueDog()).to.equal(i);
      }

      for (let i = 19; i > 10; i -= 2) {
        expect(this.obj.dequeueCat()).to.equal(i);
      }

      for (let i = 10; i > 0; --i) {
        expect(this.obj.dequeueAny()).to.equal(i);
      }
    });
  });
}
