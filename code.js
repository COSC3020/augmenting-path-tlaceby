function augmentingPath(graph, start, end) {
  // If start and end are the same, return the single node list.
  // solve using bfs.
  // Keep track of paths encountered before?
  // explore each neighbor of the current node;
  // consider neighbors connected by a positive edge.
  // Check if we've reached the end node. and return path.

  console.log(graph, start, end);
}

module.exports = { augmentingPath };
