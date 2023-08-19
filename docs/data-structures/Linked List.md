# Linked List

# Linked Lists: Connecting the Dots

A **Linked List** is a data structure made up of nodes that together represent a sequence. Unlike arrays, where elements are stored in consecutive memory locations, linked list elements can be scattered throughout memory, connected by references or pointers.

## What is a Linked List?

Imagine a treasure hunt where each clue points to the next. A linked list is similar: each element (or "node") contains a reference to the next element in the list.

## Types of Linked Lists

### 1. Singly Linked List

In a **singly linked list**, each node points to the next one but not to the previous. It's like a one-way treasure hunt.

### 2. Doubly Linked List

A **doubly linked list** has nodes that point to both the next and the previous node. It's like a two-way treasure hunt where you can move forwards and backwards.

## Common Operations

- **Insertion**: Adding an element at a specific position.
- **Deletion**: Removing an element from a specific position.
- **Traversal**: Going through each element one by one.
- **Search**: Finding a specific element.

## Example in Code

Here's a simple example in Java of how you might create a singly linked list:

```java
class Node {
  int data;
  Node next;

  Node(int data) {
    this.data = data;
    this.next = null;
  }
}

public class Main {
  public static void main(String[] args) {
    Node head = new Node(10);
    head.next = new Node(20);
    head.next.next = new Node(30);

    System.out.println(head.next.data); // Outputs 20
  }
}
```