# Graphs

# Graphs: Connecting the Dots

A **Graph** is a collection of nodes (or vertices) connected by edges. They are used to represent various real-world situations like networks, connections between web pages, social networks, etc.

## Characteristics of Graphs

### 1. Nodes (Vertices)

The individual entities in the graph. Think of them as the points on a map.

### 2. Edges

The connections between nodes. Think of them as roads connecting the points on a map.

### 3. Directed vs. Undirected

A **directed graph** has edges with a direction, like one-way streets. An **undirected graph** has edges without direction, like two-way streets.

### 4. Weighted vs. Unweighted

In a **weighted graph**, edges have values called weights, representing distances, costs, etc. An **unweighted graph** has edges without specific values.

### 5. Cyclic vs. Acyclic

A **cyclic graph** contains at least one cycle, while an **acyclic graph** does not.

## Common Types

### 1. Tree

A connected, acyclic undirected graph.

### 2. Directed Acyclic Graph (DAG)

A directed graph with no cycles.

### 3. Complete Graph

A graph where there is an edge between every pair of nodes.

## Example in Code

Here's a simple example in Java of how you might represent an undirected graph using an adjacency list:

```java
import java.util.LinkedList;

public class Main {
  public static void main(String[] args) {
    int vertices = 5;
    LinkedList<Integer>[] graph = new LinkedList[vertices];

    for (int i = 0; i < vertices; i++) {
      graph[i] = new LinkedList<>();
    }

    // Adding edges
    graph[0].add(1);
    graph[0].add(4);
    graph[1].add(3);
    graph[2].add(1);
    graph[3].add(2);
    graph[4].add(3);

    // Print connections
    for (int i = 0; i < vertices; i++) {
      System.out.println("Node " + i + " is connected to: " + graph[i]);
    }
  }
}
```

## **Applications of Graphs**

Graphs are used in many real-world scenarios, such as:

- **Routing**: In navigation systems to find the best path.
- **Social Networks**: Representing connections between people.
- **Internet**: Representing hyperlinks between web pages.

## **Conclusion**

Graphs offer a rich and expressive way to represent and analyze connections and relationships. Understanding graphs lays a foundation for many algorithms and real-world applications, from the most mundane to the most complex systems.