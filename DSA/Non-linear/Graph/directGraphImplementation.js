
class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, new Set());
    }
  }

  addEdge(v1, v2) {
    this.addVertex(v1);
    this.addVertex(v2);

    this.adjacencyList.get(v1).add(v2);
  }

  removeEdge(v1, v2) {
    this.adjacencyList.get(v1)?.delete(v2);
  }

  removeVertex(vertex) {
    if (!this.adjacencyList.has(vertex)) return;

    this.adjacencyList.delete(vertex);

    for (const edges of this.adjacencyList.values()) {
      edges.delete(vertex);
    }
  }

  hasVertex(vertex) {
    return this.adjacencyList.has(vertex);
  }

  hasEdge(v1, v2) {
    return this.adjacencyList.get(v1)?.has(v2) ?? false;
  }

  display() {
    for (const [vertex, edges] of this.adjacencyList) {
      console.log(`${vertex} -> ${[...edges].join(', ')}`);
    }
  }
}

const graph = new Graph();

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('D', 'C');

graph.display();

console.log('Has vertex A:', graph.hasVertex('A'));
console.log('Has edge A -> B:', graph.hasEdge('A', 'B'));
console.log('Has edge B -> A:', graph.hasEdge('B', 'A'));

graph.removeEdge('A', 'C');
graph.removeVertex('D');

console.log('After deletion:');
graph.display();
