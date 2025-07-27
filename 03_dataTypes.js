/*
JavaScript Data Types

1. Primitive Data Types:
    - String      : Represents textual data. Example: "Hello"
    - Number      : Represents numeric values. Example: 42, 3.14
    - BigInt      : Represents integers with arbitrary precision. Example: 123n
    - Boolean     : Represents true or false. Example: true, false
    - Undefined   : A variable that has not been assigned a value. Example: undefined
    - Null        : Represents the intentional absence of any value. Example: null
    - Symbol      : Represents a unique identifier. Example: Symbol('id')

2. Non-Primitive (Reference) Data Types:
    - Object      : Collection of key-value pairs. Example: { name: "John", age: 30 }
    - Array       : Ordered list of values. Example: [1, 2, 3]
    - Function    : Block of code designed to perform a task. Example: function() {}

Examples:
*/

let str = "Hello, World!";      // String
let num = 100;                  // Number
let bigIntNum = 12345678901234567890n; // BigInt
let isActive = true;            // Boolean
let user;                       // Undefined
let emptyValue = null;          // Null
let uniqueId = Symbol('id');    // Symbol

let person = { name: "Alice", age: 25 }; // Object
let numbers = [1, 2, 3, 4, 5];           // Array
function greet() {                       // Function
  console.log("Hi!");
}

console.log(typeof greet)