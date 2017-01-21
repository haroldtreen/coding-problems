class StackQueue {
  constructor() {
    this.stackOne = [];
    this.stackTwo = [];
  }

  enqueue(val) {
    while (this.stackTwo.length > 0) {
      this.stackOne.push(this.stackTwo.pop());
    }
    this.stackOne.push(val);
  }

  dequeue() {
    while (this.stackOne.length > 0) {
      this.stackTwo.push(this.stackOne.pop());
    }

    return this.stackTwo.pop();
  }

  peek() {
    while (this.stackTwo.length > 0) {
      this.stackOne.push(this.stackTwo.pop());
    }
    return this.stackOne[0];
  }
}

function main(lines) {
  lines.shift(); // Discard N
  lines = lines.filter(l => l !== ''); // eslint-disable-line

  const queue = new StackQueue();
  const outputs = [];
  const operations = { 1: 'enqueue', 2: 'dequeue', 3: 'print' };
  lines.forEach((l) => {
    const parts = l.split(' ');
    const op = operations[parts[0]];

    if (op === 'print') {
      outputs.push(queue.peek());
    } else {
      queue[op](parts[1]);
    }
  });
  return outputs;
}

module.exports = main;
