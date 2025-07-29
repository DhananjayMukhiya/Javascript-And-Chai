/*
Notes on Objects in JavaScript

1. Definition:
    - Objects are collections of key-value pairs.
    - Keys are strings (or Symbols), values can be any data type.

2. Creating Objects:
    - Using object literal:
      const person = { name: "Alice", age: 25 };
    - Using constructor:
      const obj = new Object();

3. Accessing Properties:
    - Dot notation: person.name
    - Bracket notation: person["age"]

4. Adding/Modifying Properties:
    person.city = "Delhi";
    person["country"] = "India";

5. Deleting Properties:
    delete person.age;

6. Nested Objects:
    const user = {
      name: "Bob",
      address: {
         city: "Mumbai",
         pin: 400001
      }
    };

7. Methods (Functions as properties):
    const car = {
      start: function() { console.log("Started"); }
    };

8. 'this' Keyword:
    - Refers to the object itself inside methods.

9. Object Methods:
    - Object.keys(obj): returns array of keys.
    - Object.values(obj): returns array of values.
    - Object.entries(obj): returns array of [key, value] pairs.
    - Object.assign(target, source): copies properties.

10. Object Destructuring:
     const { name, age } = person;

11. Checking Property Existence:
     "name" in person // true

12. Iterating Over Properties:
     for (let key in person) {
        console.log(key, person[key]);
     }

Objects are fundamental in JavaScript for storing and managing data.
*/

// singleton
// Object.create

//object literals

// const mySym = Symbol(1234)

// const jsUser = {
//     name: "Dhananjay",
//     "full name": "Dhananjay Kumar",
//     age: 20,
//     location: "Motihari",
//     email: "abcd@gmail.com",
//     isLoggedIn: false,
//     lastLoginDays: ["Monday", "Saturday"],
//     [mySym]: "myKeys1"
// }

// console.log(jsUser[mySym])

// console.log(jsUser.name)
// console.log(jsUser["location"])
// console.log(jsUser["full name"])

// jsUser.location = "Patna"

// console.log(jsUser.location)

// Object.freeze(jsUser)

// delete jsUser.age

// console.log(jsUser.age)

// jsUser.marks = 90
// console.log(jsUser.marks)

// console.log(jsUser)

// delete jsUser["full name"]

// console.log(jsUser)

// const keys = Object.keys(jsUser)
// console.log(keys)

// const values = Object.values(jsUser)
// console.log(values)

// const keysValues = Object.entries(jsUser)
// console.log(keysValues)
// console.log(keysValues.length)
// console.log(keysValues[0])
// console.log(keysValues[0][0])
// console.log(typeof keysValues[0][1])

// const book = {
//   title: "JavaScript Basics",
//   author: "Jane Doe",
//   pages: 200,
//   published: 2023,
//   genres: ["Programming", "Education"],
//   isAvailable: true,
// };

// console.log(book);

// book.greeting = function () {
//   console.log("Welcome to javascript!");
// };
// book.greetingTwo = function () {
//   console.log(`Welcome to javascript!, ${this.author}`);
// };

// console.log(book.greeting());
// console.log(book.greetingTwo());

// ++++++++++++++++++++++++ Part-2 ++++++++++++++++++++++++++++++++++++++++

// const tinderUser = new Object()

// tinderUser.id = "123abc"
// tinderUser.name = "Dhananjay Kumar"
// tinderUser.isLoggedIn = false

// console.log(tinderUser)

// const regularUser = {
//   email: "abcd@google.com",
//   fullName: {
//     userFullName: {
//       firstName: "Dhananjay",
//       lastName: "Kumar",
//     },
//   },
// };

// console.log(regularUser)
// console.log(regularUser.fullName)
// console.log(regularUser.fullName.userFullName)
// console.log(regularUser.fullName.userFullName.firstName)
// console.log(regularUser.fullName?.userFullName?.lastName);

// const laptop = {
//   brand: "Dell",
//   model: "Inspiron 15",
//   year: 2022,
//   specs: {
//     cpu: "Intel i5",
//     ram: "8GB",
//     storage: "512GB SSD",
//   },
// };

// const student = {
//   name: "Amit Sharma",
//   age: 21,
//   enrolled: true,
//   courses: ["Math", "Physics", "Computer Science"],
// };

// const obj3 = {laptop, student}
// const obj3 = Object.assign({}, laptop, student);
// const obj3 = { ...laptop, ...student };

// console.log(obj3);


//++++++++++++++++++++++++ Part-3 ++++++++++++++++++++++++++++++++++++

// const student = {
//   fullName: "Amit Sharma",
//   age: 21,
//   enrolled: true,
//   courses: ["Math", "Physics", "Computer Science"],
// };

// student.fullName

// const {fullName: name} = student

// console.log(name)

