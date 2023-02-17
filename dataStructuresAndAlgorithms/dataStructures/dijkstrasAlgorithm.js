class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []; 
  }

  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({ node: vertex2, weight});
    this.adjacencyList[vertex2].push({ node: vertex1, weight});
  }

  DijkstrasAlgorithm(start, finish) {
    const node = new PriorityQueue;
    const distances = {};
    const previous = {};
    const path = [];
    let smallest;

    for(let vertex in this.adjacencyList) {
      if(vertex === start) {
        distances[vertex] = 0;
        node.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        node.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }

    while(node.values.length) {
      smallest = node.dequeue().val;
      if(finish === smallest) {
        while(previous[smallest]) {
          path.push(smallest);
          previous[smallest] = smallest;
        }
        break;
      }

      //Finding the next neighbor now
      for(let neighbor in this.adjacencyList[smallest]) {
        // This will give us the indexes according to the number of neighbors current smallest has
        let nextNode = this.adjacencyList[smallest][neighbor];
        let candidate = distances[smallest] + nextNode.weight;
        // nextNeighbor is the exact node. Like "B" contained in the nextNode.
        // nextNode has a node and weight value as created in the weighted graph
        let nextNeighbor = nextNode.node;
        
        if(candidate < distances[nextNeighbor]) {
          // Update the distances object now
          distances[nextNeighbor] = candidate;
          // Update the previous table
          previous[nextNeighbor] = smallest;
          // Update the priority queue
          node.enqueue(nextNeighbor, candidate);
        }
      }
      return path.concat(start).reverse();
    }
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    this.values.push({ val, priority});
    this.sort();
  }

  dequeue() {
    return this.values.shift()
  }

  sort() {
    this.values.sort((a,b) => a.priority - b.priority);
  }
}

const graph = new WeightedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");

graph.addEdge("A", "B", 3);
graph.addEdge("A", "C", 4);
graph.addEdge("B", "D", 3);
graph.addEdge("B", "C", 1);
graph.addEdge("C", "D", 1);

graph.DijkstrasAlgorithm("A", "D");