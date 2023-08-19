# Stacks

# Stacks: A Last In, First Out Data Structure

A **Stack** is a data structure that operates in a Last In, First Out (LIFO) manner. Think of a stack of plates; you add a plate to the top and take one from the top. The last plate placed on the stack will be the first one to be removed.

## Characteristics of Stacks

### 1. LIFO Principle

The last element added to the stack will be the first one removed.

### 2. Push Operation

**Push** is the term used for adding an element to the top of the stack.

### 3. Pop Operation

**Pop** is the term used for removing the top element from the stack.

### 4. Peek Operation

**Peek** lets you see what's on top of the stack without removing it.

## Example in Code

Here's a simple example in Java of how you might create and manipulate a stack using the `Stack` class:

```java
import java.util.Stack;

public class Main {
  public static void main(String[] args) {
    Stack<Integer> stack = new Stack<>();

    stack.push(10); // Adding 10 to the stack
    stack.push(20); // Adding 20 to the stack
    stack.push(30); // Adding 30 to the stack

    System.out.println(stack.peek()); // Outputs 30
    System.out.println(stack.pop());  // Outputs 30 and removes it from the stack
    System.out.println(stack.peek()); // Outputs 20
  }
}
```

## **Applications of Stacks**

Stacks are used in various applications, such as:

- **Browser History**: Keeping track of visited web pages.
- **Undo Functionality**: In text editors or design software.
- **Expression Evaluation**: In calculators and programming languages.

## **Conclusion**

Stacks are an essential concept in computer science and provide a simple and efficient way to handle data following the LIFO principle. Understanding stacks will open doors to deeper insights into how algorithms and programs are crafted.