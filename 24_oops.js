// javascript and classes

// OOP

// Object - collection of properties and methods.

/*
Object-Oriented Programming (OOP) in JavaScript:

- OOP is a programming paradigm based on the concept of "objects", which contain data (properties) and code (methods).
- JavaScript supports OOP using prototypes and ES6 classes.

Key Concepts:
1. Object: An instance with properties and methods.
2. Class: A blueprint for creating objects (introduced in ES6).
3. Constructor: A special method for initializing new objects.
4. Inheritance: Mechanism to create new classes from existing ones.
5. Encapsulation: Bundling data and methods together.
6. Polymorphism: Ability to use a single interface for different data types.
7. Abstraction: Hiding complex implementation details and showing only the necessary features.

Benefits of OOP:
- Code reusability
- Modularity
- Easier maintenance
- Scalability

Example:
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
}
*/

// Parts of OOP
// Object literal

/*
- Constructor function
- Prototypes
- Classes
- Instances (new, this)
*/

// const user = {
//   userName: "Dhananjay",
//   loginCount: 8,
//   signedIn: true,

//   getUserDetails: function () {
//     // console.log("Got user details from database");
//     // console.log(`username: ${this.userName}`)
//     console.log(this);
//   },
// };
// console.log(user);
// console.log(user.userName);
// console.log(user.getUserDetails());

// console.log(this)

// const promiseOne = new Promise();
// const date = new Date();

function user(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  return this;
}

const userOne = new user("Dhananjay", 12, true);
const userTwo = new user("shyam", 15, false);

console.log(userOne);
console.log(userTwo);

