/**
 * Notes about functions in JavaScript (with examples):
 *
 * 1. First-class objects:
 *    - Functions can be assigned to variables, passed as arguments, and returned from other functions.
 *    Example:
 *      const greet = function(name) { return "Hello, " + name; };
 *      function callFunc(fn, value) { return fn(value); }
 *      console.log(callFunc(greet, "Alice")); // Hello, Alice
 *
 * 2. Function Declarations:
 *    - Declared with the function keyword. Hoisted to the top of their scope.
 *    Example:
 *      function add(a, b) { return a + b; }
 *      console.log(add(2, 3)); // 5
 *
 * 3. Function Expressions:
 *    - Functions can be defined as expressions and assigned to variables.
 *    Example:
 *      const multiply = function(a, b) { return a * b; };
 *      console.log(multiply(2, 3)); // 6
 *
 * 4. Arrow Functions:
 *    - Shorter syntax, no own 'this', 'arguments', 'super', or 'new.target'.
 *    Example:
 *      const square = x => x * x;
 *      console.log(square(4)); // 16
 *
 * 5. Parameters and Return Values:
 *    - Functions can take parameters and return values.
 *    Example:
 *      function sayHello(name) { return `Hello, ${name}`; }
 *      console.log(sayHello("Bob")); // Hello, Bob
 *
 * 6. The 'arguments' Object:
 *    - Inside regular functions, 'arguments' contains all passed arguments.
 *    Example:
 *      function sum() {
 *        let total = 0;
 *        for (let i = 0; i < arguments.length; i++) {
 *          total += arguments[i];
 *        }
 *        return total;
 *      }
 *      console.log(sum(1, 2, 3)); // 6
 *
 * 7. Closures:
 *    - Functions can remember the scope in which they were created.
 *    Example:
 *      function makeCounter() {
 *        let count = 0;
 *        return function() { count++; return count; };
 *      }
 *      const counter = makeCounter();
 *      console.log(counter()); // 1
 *      console.log(counter()); // 2
 *
 * 8. Methods:
 *    - Functions as object properties.
 *    Example:
 *      const obj = {
 *        speak: function() { return "Hi!"; }
 *      };
 *      console.log(obj.speak()); // Hi!
 *
 * 9. 'this' Keyword:
 *    - Refers to the object that invoked the function.
 *    Example:
 *      const person = {
 *        name: "Eve",
 *        greet: function() { return "Hello, " + this.name; }
 *      };
 *      console.log(person.greet()); // Hello, Eve
 *
 * 10. Asynchronous Functions:
 *     - Use 'async' and 'await' for asynchronous code.
 *     Example:
 *       async function fetchData() {
 *         return await Promise.resolve("Data loaded");
 *       }
 *       fetchData().then(console.log); // Data loaded
 *
 * 11. Constructor Functions:
 *     - Functions used with 'new' to create objects.
 *     Example:
 *       function Car(make) { this.make = make; }
 *       const myCar = new Car("Toyota");
 *       console.log(myCar.make); // Toyota
 *
 * 12. Default Parameters:
 *     - Functions can have default parameter values.
 *     Example:
 *       function power(base, exponent = 2) { return base ** exponent; }
 *       console.log(power(3)); // 9
 *
 * 13. Rest Parameters:
 *     - Collects all remaining arguments into an array.
 *     Example:
 *       function join(separator, ...args) { return args.join(separator); }
 *       console.log(join("-", "a", "b", "c")); // a-b-c
 */

//++++++++++++++++++++++++++++++++++++ Practice +++++++++++++++++++++++++++++++++++++++++++++++++++++

// function sayMyName() {
//   console.log("Dhananjay Kumar");
// }

// sayMyName();

// function addTwoNum(num1, num2) {
//   return num1 + num2;
// }

// const result = addTwoNum(2, 1);
// console.log(result);

// function loginUserMessage(userName) {
//   if (userName === undefined) {
//     console.log("Please enter a username");
//     return;
//   }
//   return `${userName} just logged in!`;
// }

// console.log(loginUserMessage("Dhananjay"));
// console.log(loginUserMessage());

// function calculateCartPrice(...num1) {
//   return num1;
// }

// console.log(calculateCartPrice(200, 210, 78, 678, 222, 323, 545));

// const user = {
//   userName: "Dhananjay",
//   course: "Computer Science",
//   isEnrolled: true,
// };

// function handleObject(anyObject) {
//   console.log(
//     `Username is ${anyObject.userName} and course is ${anyObject.course}`
//   );
// }

// handleObject(user);

// const myNewArray = [200, 300, 400]

// function getSecondArray(getArray){
//     return getArray[1]
// }

// console.log(getSecondArray(myNewArray))

//++++++++++++++++++++ Global scope and local scope ++++++++++++++++++++++++++++++++++

// let a = 10;
// const b = 20;
// var c = 30;

// if (true) {
//   let a = 100;
//   const b = 200;
//   console.log("c", c)
//   var c = 300;
// }

// console.log("a", a);
// console.log("b", b);
// console.log("c", c);

/**
 * Notes about Global and Local Scope in JavaScript:
 *
 * 1. Global Scope:
 *    - Variables declared outside any function or block are in the global scope.
 *    - They can be accessed from anywhere in the code.
 *    Example:
 *      let x = 5; // global
 *      function foo() {
 *        console.log(x); // 5
 *      }
 *
 * 2. Local Scope:
 *    - Variables declared inside a function or block (using let/const) are local to that function/block.
 *    - They cannot be accessed from outside their scope.
 *    Example:
 *      function bar() {
 *        let y = 10; // local
 *        console.log(y); // 10
 *      }
 *      // console.log(y); // Error: y is not defined
 *
 * 3. Block Scope:
 *    - let and const are block-scoped (within { ... }).
 *    - var is function-scoped, not block-scoped.
 *    Example:
 *      if (true) {
 *        let z = 20;
 *        var w = 30;
 *      }
 *      // console.log(z); // Error: z is not defined
 *      console.log(w); // 30
 *
 * 4. Scope Chain:
 *    - JavaScript looks for variables in the current scope, then outer scopes, up to the global scope.
 *    Example:
 *      let a = 1;
 *      function outer() {
 *        let b = 2;
 *        function inner() {
 *          console.log(a, b); // 1 2
 *        }
 *        inner();
 *      }
 *
 * 5. Best Practices:
 *    - Minimize use of global variables to avoid conflicts.
 *    - Prefer let/const for block scoping.
 */

//++++++++++++++++++++++++++ this and arrow function ++++++++++++++++++++++++++++++++++++++++++++

// const user = {
//   userName: "Dhananjay",
//   price: 999,

//   welcomeMessage: function () {
//     console.log(`${this.userName}, welcome to website!`);
//     console.log(this);
//   },
// };

// user.welcomeMessage()
// user.userName = "Dhananjay Kumar"
// user.welcomeMessage()
// console.log(this);

// function chai() {
//     let userName = "Dhananjay"
//     console.log(this.userName) //not work in function
// }

// chai()

// const chai = function() {
//     console.log(`second type of function`)
// }

// chai()

// const chai = () => {
//   console.log(`This is arrow function`);
// };

// chai();

//explicit return

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// console.log(addTwo(2, 3))

//implicit return

// const addTwo = (num1, num2) => num1 + num2
// const addTwo = (num1, num2) => (num1 + num2);
// const addTwo = (num1, num2) => ({userName: "Dhananjay"});

// console.log(addTwo(2, 3));

//+++++++++++++++++++++ Immediately Invoked Function Expressions +++++++++++++++++++++++++++++++++++++++

// (function chai() {
//   console.log(`DB CONNECTED`);
// })();

// ((name) => {
//   console.log(`DB CONNECTED TWO ${name}`);
// })("Dhananjay");

//How does javascript execute code + call stack
