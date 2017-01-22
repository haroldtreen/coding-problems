function buildGraphs(lines) {
  let l = 0;
  const numGraphs = Number(lines[l++]);
  const graphs = [];

  for (let i = 0; i < numGraphs; i += 1) {
    const [numNodes, numEdges] = lines[l++].split(' ').map(Number);
    const graph = {
      numNodes,
      numEdges,
      nodes: Array.apply(null, { length: numNodes + 1 }).map((v, i) => ({ edges: [] })), // eslint-disable-line
    };

    for (let j = 0; j < numEdges; j += 1) {
      const [u, v] = lines[l++].split(' ').map(Number);

      const nodeOne = graph.nodes[u];
      const nodeTwo = graph.nodes[v];

      nodeOne.edges.push(nodeTwo);
      nodeTwo.edges.push(nodeOne);
    }

    graph.start = Number(lines[l++]);
    graphs.push(graph);
  }
  return graphs;
}

function toEdgeDistances(graph) {
  const startNode = graph.nodes[graph.start] || { edges: [] };
  startNode.distance = 0;
  let toVisit = [startNode];
  do {
    const visiting = toVisit.shift();
    toVisit = toVisit.concat(visiting.edges.filter(e => !Number.isInteger(e.distance)));

    visiting.edges.forEach((e) => {
      if (!e.distance) {
        e.distance = visiting.distance + 6;
      }
    });
  } while (toVisit.length > 0);

  const distances = [];
  for (let i = 1; i <= graph.numNodes; i += 1) {
    const node = graph.nodes[i] || {};

    if (node !== startNode) {
      distances.push(node.distance || -1);
    }
  }
  return distances;
}

function main(lines) {
  const graphs = buildGraphs(lines);
  return graphs.map(toEdgeDistances).map((dist) => dist.join(' '));
}

module.exports = main;
