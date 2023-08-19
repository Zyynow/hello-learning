# Queues

# Queues: A First In, First Out Data Structure

A **Queue** is a data structure that operates on a First In, First Out (FIFO) basis. Imagine a line at a ticket counter; the first person in line will be the first person to be served.

## Characteristics of Queues

### 1. FIFO Principle

The first element added to the queue will be the first one removed.

### 2. Enqueue Operation

**Enqueue** is the term used for adding an element to the end of the queue.

### 3. Dequeue Operation

**Dequeue** is the term used for removing the front element from the queue.

### 4. Peek Operation

**Peek** lets you see what's at the front of the queue without removing it.

## Example in Code

Here's a simple example in Java of how you might create and manipulate a queue using the `Queue` interface and `LinkedList` class:

```java
import java.util.LinkedList;
import java.util.Queue;

public class Main {
  public static void main(String[] args) {
    Queue<Integer> queue = new LinkedList<>();

    queue.add(10); // Adding 10 to the queue
    queue.add(20); // Adding 20 to the queue
    queue.add(30); // Adding 30 to the queue

    System.out.println(queue.peek()); // Outputs 10
    System.out.println(queue.poll()); // Outputs 10 and removes it from the queue
    System.out.println(queue.peek()); // Outputs 20
  }
}
```

## **Applications of Queues**

Queues are used in various real-world and computing scenarios, such as:

- **Print Queue**: Managing the order of documents sent to a printer.
- **Call Center Systems**: Handling customer service requests in order.
- **Breadth-First Search**: In graph algorithms to traverse nodes level by level.

## **Conclusion**

Queues are a versatile and fundamental data structure, operating with the simple yet powerful FIFO principle. Understanding queues will enable you to see how numerous systems in technology and daily life are organized.