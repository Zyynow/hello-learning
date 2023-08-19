# Data Structures

Learning data structures is crucial in computer science and programming. In Java, there are several important data structures you should learn. Below, I'll provide an outline of the data structures and a brief description of each one. I will include the Java classes that represent these data structures and a brief code snippet for each.

## Data Structures in Java

```
If you want to store data in

One on the other - Stacks
Linear fashion - Array/ Linked List
Hierarchical Fashion - Trees
Connect Nodes - Graph

```

![Untitled](Untitled.png)

1. **Arrays**
    - An array is a collection of elements, each identified by an array index. It is the simplest data structure and is used for storing data of the same type.
    - Example:
        
        ```java
        int[] arr = new int[5];
        arr[0] = 10;
        arr[1] = 20;
        arr[2] = 30;
        arr[3] = 40;
        arr[4] = 50;
        
        ```
        
2. **ArrayLists**
    - An ArrayList is a dynamic array. It can change its size during runtime. It is a part of Java's collection framework.
    - Example:
        
        ```java
        import java.util.ArrayList;
        ArrayList<Integer> arrayList = new ArrayList<Integer>();
        arrayList.add(1);
        arrayList.add(2);
        arrayList.add(3);
        
        ```
        
3. **Linked Lists**
    - A linked list is a linear collection of elements, where each element points to the next one in the sequence. It can be singly linked (each node has a pointer to the next node) or doubly linked (each node has pointers to both the previous and next nodes).
    - Example:
        
        ```java
        import java.util.LinkedList;
        LinkedList<Integer> linkedList = new LinkedList<Integer>();
        linkedList.add(1);
        linkedList.add(2);
        linkedList.add(3);
        
        ```
        
4. **Stacks**
    - A stack is a Last-In-First-Out (LIFO) data structure. It is used for operations where the last element added is the first one to be removed.
    - Example:
        
        ```java
        import java.util.Stack;
        Stack<Integer> stack = new Stack<Integer>();
        stack.push(1);
        stack.push(2);
        stack.push(3);
        int top = stack.pop();
        
        ```
        
5. **Queues**
    - A queue is a First-In-First-Out (FIFO) data structure. It is used for operations where the first element added is the first one to be removed.
    - Example:
        
        ```java
        import java.util.Queue;
        import java.util.LinkedList;
        Queue<Integer> queue = new LinkedList<Integer>();
        queue.add(1);
        queue.add(2);
        queue.add(3);
        int first = queue.poll();
        
        ```
        
6. **Hash Maps**
    - A hash map is a collection of key-value pairs. It uses a hash function to compute an index into an array of buckets or slots, from which the desired value can be found.
    - Example:
        
        ```java
        import java.util.HashMap;
        HashMap<String, Integer> hashMap = new HashMap<String, Integer>();
        hashMap.put("key1", 1);
        hashMap.put("key2", 2);
        hashMap.put("key3", 3);
        int value = hashMap.get("key2");
        
        ```
        
7. **Trees**
    - A tree is a hierarchical data structure that consists of nodes connected by edges. The topmost node is called the root of the tree. The elements that are directly under a node are called its children.
    - Example:
        
        ```java
        class TreeNode {
          int val;
          TreeNode left;
          TreeNode right;
          TreeNode(int x) { val = x; }
        }
        
        ```
        
8. **Graphs**
    - A graph is a collection of nodes (or vertices) connected by edges. Graphs can be directed or undirected, weighted or unweighted.
    - Example:
        
        ```java
        class Graph {
          int vertices;
          LinkedList<Integer> adjList[];
          Graph(int v) {
            vertices = v;
            adjList = new LinkedList[v];
            for (int i=0; i<v; ++i)
              adjList[i] = new LinkedList();
          }
          void addEdge(int v, int w) {
            adjList[v].add(w);
          }
        }
        
        ```