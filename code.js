function augmentingPath(graph, start, end) {
  if (start === end) return [start];
  // Check if start and end are actually in the graph
  if (!(start in graph) || !(end in graph)) {
    console.error("The (Start or End) node is not in the graph");
    return [];
  }

  let queue = [start];
  let visited = new Set();
  let prev = { [start]: null }; // dict of key: predecessors

  // Berform bfs
  while (queue.length > 0) {
    let current = queue.shift();
    visited.add(current);

    for (let neighbor in graph[current]) {
      if (!visited.has(neighbor) && graph[current][neighbor] > 0) {
        queue.push(neighbor);
        prev[neighbor] = current;

        if (neighbor === end) {
          let path = [];

          while (neighbor) {
            path.unshift(neighbor);
            neighbor = prev[neighbor];
          }

          return path;
        }
      }
    }
  }

  return [];
}

module.exports = { augmentingPath };
