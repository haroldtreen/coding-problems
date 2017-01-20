class MaxStack {
  constructor() {
    this.stack = [];
    this.maxs = [];
  }

  push(v) {
    if (v >= this.max()) {
      this.maxs.push(v);
    }
    this.stack.push(v);
    return v;
  }

  pop() {
    const popped = this.stack.pop();
    if (this.max() === popped) {
      this.maxs.pop();
    }
    return popped;
  }

  max() {
    return this.maxs[this.maxs.length - 1] || 0;
  }
}

function main(lines) {
  lines.shift();
  const cmds = { 1: 'push', 2: 'pop', 3: 'max' };
  const queries = lines.map((q) => {
    const parts = q.split(' ');
    return { cmd: cmds[parts[0]], val: Number(parts[1]) };
  });

  const maxStack = new MaxStack();
  queries.forEach((q) => {
    maxStack[q.cmd](q.val);

    if (q.cmd === 'max') {
      console.log(maxStack.max());
    }
  });
}

const example = [
  '10',
  '1 97',
  '2',
  '1 20',
  '2',
  '1 26',
  '1 20',
  '2',
  '3',
  '1 91',
  '3',
];

main(example);
