# Trees

# Trees: A Hierarchical Data Structure

A **Tree** is a hierarchical data structure that consists of nodes connected by edges. It represents a structure with a root, branches, and leaves, similar to a family tree.

## Characteristics of Trees

### 1. Root Node

The topmost node in the tree. Think of it as the starting point or the "ancestor" of all other nodes.

### 2. Parent and Child Nodes

Each node, except the root, has one parent and zero or more children.

### 3. Leaves

Nodes that have no children are called leaves.

### 4. Depth and Height

The depth of a node is the number of edges from the root to that node. The height of the tree is the number of edges in the longest path from the root to a leaf.

## Types of Trees

### 1. Binary Tree

A tree in which each node has up to two children.

### 2. Binary Search Tree (BST)

A binary tree where the left subtree contains only nodes with values less than the node's value, and the right subtree only nodes with values greater.

### 3. Balanced Tree

A tree where the depth of all the leaves differs by at most one, ensuring efficient operations.

## Example in Code

Here's a simple example in Java of how you might create a binary tree:

```java
class Node {
  int data;
  Node left, right;

  Node(int data) {
    this.data = data;
    left = right = null;
  }
}

public class Main {
  public static void main(String[] args) {
    Node root = new Node(10);
    root.left = new Node(5);
    root.right = new Node(15);

    System.out.println(root.left.data); // Outputs 5
  }
}
```

## **Applications of Trees**

Trees are used in many computer science applications, including:

- **Database Systems**: For indexing and query optimization.
- **File Systems**: Representing the directory structure.
- **Game Trees**: In AI for games to evaluate possible moves.

## **Conclusion**

Trees are a rich and fundamental data structure, providing efficient ways to represent hierarchical relationships, organize data, and perform various algorithms. Understanding trees lays a strong foundation for exploring more advanced data structures and algorithms.