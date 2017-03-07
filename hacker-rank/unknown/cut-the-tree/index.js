const fs = require('fs');

const inputData = fs.readFileSync('./input10.txt', 'utf-8');
// const outputDate = fs.readFileSync('./output10.txt', 'utf-8');

class Stack {
  constructor() {
    this.data = [];
  }

  push(el) {
    this.data.push(el);
  }

  pop(el) {
    return this.data.pop(el);
  }

  getData() {
    return this.data;
  }
}

const getValues = function getValues(line) {
  return line.split(' ').map(Number);
};

function removeEdge(graph, edge) {
  const srcIdx = graph[edge.src].neighbours.indexOf(edge);
  const destIdx = graph[edge.dest].neighbours.indexOf(edge);
  graph[edge.src].neighbours.splice(srcIdx, 1);
  graph[edge.dest].neighbours.splice(destIdx, 1);

  return graph;
}

function addEdge(graph, edge) {
  graph[edge.src].neighbours.push(edge);
  graph[edge.dest].neighbours.push(edge);
  return graph;
}


const buildGraph = function buildGraph(values, edges) {
  let graph = values.map((value, index) => ({ index, value, neighbours: [] }));
  edges.forEach((edge) => {
    graph = addEdge(graph, edge);
  });

  return graph;
};

const addNeighbours = function addNeighbours(stack, node, graph, visited) {
  node.neighbours.forEach((edge) => {
    const neighbour = graph[edge.src];
    if (!visited[neighbour.index]) {
      visited[neighbour.index] = true;
      stack.push(graph[neighbour.index]);
    }
  });
};

let total;

function calculateSum(start, graph, limit) {
  const stack = new Stack();
  const visited = {};
  let sum = 0;

  stack.push(start);
  while (stack.getData().length > 0) {
    const node = stack.pop();
    sum += node.value;

    if ((2 * sum) - total >= limit) {
      console.log('short');
      return sum;
    }

    if (node.neighbours.length > 0) {
      addNeighbours(stack, node, graph, visited);
    }
  }
  return sum;
}

function toKey(obj) {
  return `${obj.src}|${obj.dest}`;
}

function pushEdges(stack, node, visited) {
  node.neighbours.forEach((edge) => {
    if (!visited[toKey(edge)]) {
      visited[toKey(edge)] = true;
      stack.push(edge);
    }
  });
}

function main(values, edges) {
  total = values.reduce((sum, val) => sum + val, 0);
  const graph = buildGraph(values, edges);
  const visited = {};
  let minDiff = total;
  const stack = new Stack();
  let iters = 0;

  pushEdges(stack, graph[0], visited);
  while (stack.getData().length > 0) {
    iters++;
    const edge = stack.pop();
    const edgeKey = toKey(edge);
    pushEdges(stack, graph[edge.src], visited);
    pushEdges(stack, graph[edge.dest], visited);

    removeEdge(graph, edge);
    const leftSum = calculateSum(graph[edge.src], graph, minDiff);
    addEdge(graph, edge);
    const diff = Math.abs((2 * leftSum) - total);
    if (diff < minDiff) {
      minDiff = diff;
    }
  }
  console.log(minDiff);
}

const processData = function processData(input) {
  const lines = input.split('\n');
  const values = getValues(lines[1]);
  const edges = [];
  for (let i = 2; i < lines.length; i += 1) {
    const v = getValues(lines[i]);

    const src = Math.min(v[0] - 1, v[1] - 1);
    const dest = Math.max(v[0] - 1, v[1] - 1);
    edges.push({ src, dest });
  }
  main(values, edges);
};


processData(inputData);
