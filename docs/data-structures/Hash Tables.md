# Hash Tables

# Hash Tables: Fast and Efficient Data Lookup

A **Hash Table** is a data structure that offers fast data retrieval and storage. It uses a function called a hash function to map keys to indices in an array, where the corresponding values are stored.

## Characteristics of Hash Tables

### 1. Hash Function

The hash function takes a key and converts it into an index in the array. A good hash function distributes the keys uniformly across the array.

### 2. Collisions

Sometimes, the hash function may produce the same index for different keys. This situation is called a collision. Various methods, like chaining and open addressing, can resolve collisions.

### 3. Load Factor

The ratio of the number of elements to the array's size is called the load factor. A high load factor can lead to more collisions.

### 4. Dynamic Resizing

If the table gets too full, it might need to be resized to maintain efficiency.

## Common Operations

### **Insertion**: Storing a value by its key.

### **Deletion**: Removing a value by its key.

### **Search**: Finding a value by its key.

## Example in Code

Here's a simple example in Java of how you might create and manipulate a hash table using the `HashMap` class:

```java
import java.util.HashMap;

public class Main {
  public static void main(String[] args) {
    HashMap<String, Integer> map = new HashMap<>();

    map.put("Alice", 30); // Adding a key-value pair
    map.put("Bob", 25);   // Adding another key-value pair

    System.out.println(map.get("Alice")); // Outputs 30
    map.remove("Bob"); // Removes the key-value pair with key "Bob"
  }
}
```

## **Applications of Hash Tables**

Hash Tables are used in various applications, such as:

- **Database Indexing**: For quick data retrieval.
- **Caching**: Storing recently used data for quick access.
- **Symbol Tables**: In compilers to store variable information.

## **Conclusion**

Hash Tables are an incredibly powerful and flexible data structure, enabling rapid data access and manipulation. They are fundamental to computer science and are widely used across different domains. Understanding Hash Tables will equip you with the skills to build efficient and robust systems.