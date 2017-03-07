function getValues(line) {
  return line.split(' ').map(Number);
}

function processData(input) {
  const lines = input.split('\n');
  const values = getValues(lines[1]);
  const edges = [];
  for (let i = 2; i < lines.length; i++) {
    const v = getValues(lines[i]);
    edges.push({ src: v[0] - 1, dest: v[1] - 1 });
  }
  main(values, edges);
}

function calculateSum(values, edges, removedEdge) {
  let done = false;
  let sum = values[removedEdge.src];
  let remainingEdges = edges;
  const leftTree = {
    [removedEdge.src]: values[removedEdge.src],
  };
  const rightTree = {
    [removedEdge.dest]: true,
  };

  while (!done) {
    done = true;
    remainingEdges = remainingEdges.filter((edge) => {
      if (edge === removedEdge) { return false; }
      if (leftTree[edge.src]) {
        sum += values[edge.dest];
        leftTree[edge.dest] = values[edge.dest];
        done = false;
        return false;
      } else if (leftTree[edge.dest]) {
        sum += values[edge.src];
        leftTree[edge.src] = values[edge.src];
        done = false;
        return false;
      } else if (rightTree[edge.dest] || rightTree[edge.src]) {
        return false;
      }
      return true;
    });
  }
  return sum;
}

function main(values, edges) {
  const total = values.reduce((sum, val) => sum + val, 0);
  const diffs = edges.map((removedEdge) => {
    const leftSum = calculateSum(values, edges, removedEdge);
    const rightSum = total - leftSum;
    return Math.abs(leftSum - rightSum);
  });
  console.log(Math.min(...diffs));
}

process.stdin.resume();
process.stdin.setEncoding('ascii');
_input = '';
process.stdin.on('data', (input) => {
  _input += input;
});

process.stdin.on('end', () => {
  processData(_input);
});
