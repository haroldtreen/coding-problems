class DynamicArray {

  constructor(n) {
    this.n = n;
    this.lastAns = 0;
    this.seqs = Array.apply(null, { length: n }).map(() => []);
  }

  update(x, y) {
    const seq = this.seqs[this.toIndex(x)];
    this.lastAns = seq[y % seq.length];

    return this.lastAns;
  }

  append(x, y) {
    const seq = this.seqs[this.toIndex(x)];
    seq.push(y);
  }

  toIndex(x) {
    return (x ^ this.lastAns) % this.n;
  }
}

// Manual tests
// const assert = require('chai').assert;
// dynamicArray.append(0, 5);
// dynamicArray.append(1, 7);
// dynamicArray.append(0, 3);
//
// assert.equal(dynamicArray.update(1, 0), 7);
// assert.equal(dynamicArray.update(1, 1), 3);

function processData(input) {
  const lines = input.split('\n').map(line => line.split(' ').map(Number));
  const N = lines[0][0];
  const dynamicArray = new DynamicArray(N);
  lines.forEach((line) => {
    if (line.length < 3) { return; }
    if (line[0] === 1) {
      dynamicArray.append(line[1], line[2]);
    } else {
      console.log(dynamicArray.update(line[1], line[2]));
    }
  });
}

let input = '';
process.stdin.resume();
process.stdin.setEncoding('ascii');
process.stdin.on('data', (data) => {
  input += data;
});

process.stdin.on('end', () => {
  processData(input);
});
