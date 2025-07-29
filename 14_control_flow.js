/*
Control Flow in JavaScript

Control flow refers to the order in which individual statements, instructions, or function calls are executed or evaluated in a script.

1. Sequential Execution:
    - By default, JavaScript executes code from top to bottom, one statement after another.

2. Conditional Statements:
    - Used to perform different actions based on different conditions.

    a. if statement:
        if (condition) {
          // code to execute if condition is true
        }

    b. if...else statement:
        if (condition) {
          // code if true
        } else {
          // code if false
        }

    c. else if ladder:
        if (condition1) {
          // code
        } else if (condition2) {
          // code
        } else {
          // code
        }

    d. switch statement:
        switch(expression) {
          case value1:
             // code
             break;
          case value2:
             // code
             break;
          default:
             // code
        }

3. Looping Statements:
    - Used to repeat a block of code multiple times.

    a. for loop:
        for (initialization; condition; increment) {
          // code
        }

    b. while loop:
        while (condition) {
          // code
        }

    c. do...while loop:
        do {
          // code
        } while (condition);

    d. for...in loop:
        - Iterates over enumerable properties of an object.
        for (let key in object) {
          // code
        }

    e. for...of loop:
        - Iterates over iterable objects (arrays, strings, etc.).
        for (let value of iterable) {
          // code
        }

4. Jump Statements:
    - Used to alter the normal flow.

    a. break:
        - Exits from the current loop or switch statement.

    b. continue:
        - Skips the current iteration of a loop and continues with the next iteration.

    c. return:
        - Exits from a function and optionally returns a value.

5. Exception Handling:
    - Used to handle errors gracefully.

    try {
      // code that may throw an error
    } catch (error) {
      // code to handle error
    } finally {
      // code that always runs
    }

6. Function Calls:
    - Functions can be called to change the flow of execution.

Best Practices:
- Use clear and concise conditions.
- Avoid deeply nested control structures for readability.
- Use switch for multiple discrete values.
- Always handle errors using try...catch where necessary.

Summary:
Control flow structures are fundamental to writing logical, efficient, and readable JavaScript code. Mastery of these constructs is essential for all JavaScript developers.
*/

// ++++++++++++++++++++++++ Practice ++++++++++++++++++++++++++++++++++++

// if statement

// const userLoggedIn = true

// if(userLoggedIn) {
//   console.log("User login hai!")
// }

// const temprecture = 30

// if(temprecture >= 40) {
//   console.log(`Temprecture is high!`)
// }

// if(temprecture < 40) {
//   console.log("temprecture is low!")
// }

// if-else statement

// let age = 30;

// if (age >= 18) {
//   console.log("You are eligle for vote.");
// } else {
//   console.log("You are not eligle for vote.");
// }

// if-else ladder

// const marks = 20

// if(marks > 100) {
//   console.log("Please enter marks under of 100 or 100")
// } else if(marks >= 80) {
//   console.log("Congratulation!, You gail grade A")
// } else if(marks >= 60){
//   console.log("You gain grade B")
// } else if(marks >= 40) {
//   console.log("You gain grade C")
// } else {
//   console.log("You are fail")
// }

// const userLoggedIn = false;
// const debitCard = true;
// const loginFromGoogle = true;

// if ((userLoggedIn || loginFromGoogle) && debitCard) {
//   console.log("Allow to buy courses!");
// } else if (!userLoggedIn && debitCard) {
//   console.log("Please login!");
// } else if (userLoggedIn && !debitCard) {
//   console.log("Please enter your debit card!");
// } else {
//   console.log("Not allow to buy courses!");
// }

// switch statement

// const month = 112;

// switch (month) {
//   case 1:
//     console.log("january");
//     break;
//   case 2:
//     console.log("Fabuary");
//     break;
//   case 3:
//     console.log("March");
//     break;
//   case 4:
//     console.log("Aprail");
//     break;
//   case 5:
//     console.log("May");
//     break;
//   case 6:
//     console.log("June");
//     break;
//   case 7:
//     console.log("July");
//     break;
//   case 8:
//     console.log("August");
//     break;
//   case 9:
//     console.log("September");
//     break;
//   case 10:
//     console.log("Auctomber");
//     break;
//   case 11:
//     console.log("November");
//     break;
//   case 12:
//     console.log("December");
//     break;
//   default:
//     console.log("Wrong number, please enter number 1-12")
// }

// ++++++++++ truthy value and falsy values +++++++++++++++++++++++++++++

// const userEmail = "abcd@gmail.com"
// const userEmail = ""
// const userEmail = []

// if(userEmail){
//   console.log("Got user email")
// } else {
//   console.log("Don't have user email")
// }

//falsy values -> false, 0, -0, bigint 0n, "", null, undefined, Nan.

//truthy values -> except falsy values all is truthy values.

// const emptyArray = [];

// if (emptyArray.length == 0) {
//   console.log("Array is Empty");
// }

// const emptyObject = {};

// if (Object.keys(emptyObject).length == 0) {
//   console.log("Object is Empty");
// }

// Nullish Coalescing Opeater (??): null undefined

// let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? null;
// val1 = null ?? 10 ?? 15;

// console.log(val1);

// Ternary Operater

// condition ? true : false;

const age = 20;

age >= 18 ? console.log("You can vote.") : console.log("You can't vote.");
