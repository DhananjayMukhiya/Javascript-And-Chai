/*
Stack and Heap Memory in JavaScript

1. Stack Memory:
    - Used for storing primitive data types (Number, String, Boolean, null, undefined, Symbol, BigInt).
    - Stores function calls and execution contexts.
    - Fast access, but limited in size.
    - Data stored in stack is copied by value.

    Example:
    let a = 10;
    let b = a; // b gets a copy of a's value

2. Heap Memory:
    - Used for storing reference types (Objects, Arrays, Functions).
    - Larger and slower than stack.
    - Data stored in heap is accessed via references (pointers).
    - When assigning objects/arrays, only the reference is copied, not the actual data.

    Example:
    let obj1 = { name: "Alice" };
    let obj2 = obj1; // obj2 points to the same object as obj1

Summary:
- Stack: Primitive types, fast, copied by value.
- Heap: Reference types, larger, copied by reference.
*/