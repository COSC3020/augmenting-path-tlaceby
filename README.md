[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/NehM89hy)

# Augmenting Paths

When we talked about the Ford-Fulkerson algorithm to find the maximum flow
through a graph, I mentioned the "find an augmenting path" function. You're
going to implement this function. Start with the template I provided in
`code.js`. Use an adjacency list data structure to represent the graph and node
names, not indices, to indicate start and end node. The function returns a list
of node names, starting with the start node and finishing with the end node. If
start and end node are the same, it should return a list containing only this
node. If there is no path, you must return an empty list.

Test your new function; I've provided some basic testing code in `code.test.js`.

To illustrate, here's an example graph:
![example graph](graph.png)

Here's the call for this graph:

```javascript
var graph = { foo: { boo: 7 }, boo: { foo: 3, bar: 2 }, bar: { boo: 4 } };
augmentingPath(graph, "foo", "bar");
```

The call would return `['foo', 'boo', 'bar']`.

Feel free to use other data structures, but you'll have to change the test code
accordingly.

## Runtime Analysis

To find the augmented path I use a **Breadth First Search** aproach. This means the complexity is $\Theta(V + E)$ where $E$ represents edges in the graph and $V$ represents verticies. There is no additional complexity which asymtotic-analysis cares about in my implimentation, therefore this is the worst-case complexity.

## Resources

https://youtu.be/LdOnanfc5TM?si=mQ1t_c8QrBjfXmM2 was used for learning the concept behind what we are trying to do here with the flow-graph.
