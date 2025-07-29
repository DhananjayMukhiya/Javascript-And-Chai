/*
==========================
    JavaScript Loops: Deep Notes
==========================

Loops are used to execute a block of code repeatedly, either a specific number of times or until a condition is met.

1. for Loop
--------------------------
Syntax:
for (initialization; condition; increment) {
    // code block
}

Example:
for (let i = 0; i < 5; i++) {
    console.log(i);
}

- Initialization: Runs once before the loop starts.
- Condition: Checked before each iteration. If true, loop continues.
- Increment: Runs after each iteration.

2. while Loop
--------------------------
Syntax:
while (condition) {
    // code block
}

Example:
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}

- Condition is checked before each iteration.
- If condition is false initially, loop body may never execute.

3. do...while Loop
--------------------------
Syntax:
do {
    // code block
} while (condition);

Example:
let i = 0;
do {
    console.log(i);
    i++;
} while (i < 5);

- Loop body executes at least once, even if condition is false.

4. for...in Loop
--------------------------
- Used to iterate over enumerable properties of an object.

Syntax:
for (let key in object) {
    // code block
}

Example:
const obj = {a: 1, b: 2};
for (let key in obj) {
    console.log(key, obj[key]);
}

5. for...of Loop
--------------------------
- Used to iterate over iterable objects (arrays, strings, maps, sets, etc.)

Syntax:
for (let value of iterable) {
    // code block
}

Example:
const arr = [10, 20, 30];
for (let num of arr) {
    console.log(num);
}

6. break and continue
--------------------------
- break: Exits the loop immediately.
- continue: Skips the current iteration and continues with the next.

Example:
for (let i = 0; i < 5; i++) {
    if (i === 2) continue; // skips 2
    if (i === 4) break;    // exits loop when i is 4
    console.log(i);
}

7. Nested Loops
--------------------------
- Loops inside loops.
Example:
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 2; j++) {
        console.log(i, j);
    }
}

8. Infinite Loops
--------------------------
- If the condition never becomes false, the loop runs forever.
Example:
while (true) {
    // Infinite loop
}

9. Looping over Arrays vs Objects
--------------------------
- Use for...of for arrays, for...in for objects.
- forEach, map, filter, reduce are array methods for iteration.

10. Performance & Best Practices
--------------------------
- Avoid infinite loops.
- Use the most appropriate loop for the task.
- Prefer array methods for functional programming style.

==========================
*/

// ++++++++++++++++++++++++++ Practices ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// for loop

// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }

// while loop

// let i = 0;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }

// do-while loop

// let index = 0;
// do {
//   console.log(index);
//   index++;
// } while (index <= 10);

// for (let i = 1; i <= 10; i++) {
//   console.log(`Outer loop value: ${i}`);
//   for (let j = 1; j <= 10; j++) {
//     // console.log(`Inner loop value: ${j} and outer loop ${i}`);
//     console.log(`${i} * ${j} = ${i*j}`)
//   }
// }

// let myHeros = ["Baalvir", "Saktiman", "vir", "Motu Patlu"]
// console.log(myHeros.length)

// for (let index = 0; index < myHeros.length; index++) {
//     const element = myHeros[index];
//     console.log(element)
// }

// break and continue

// for (let index = 1; index < 20; index++) {
//   if (index == 5) {
//     console.log(`Detected 5`);
//     break;
//   }
//   console.log(`Value of i is - ${index}`);
// }

// for (let index = 1; index < 20; index++) {
//   if (index == 5) {
//     console.log(`Detected 5`);
//     continue;
//   }
//   console.log(`Value of i is - ${index}`);
// }

// Some more lopps

// 1. for of
// 2. for in
// 3. for each

// 1. for of (array, string) only for iterable

// const arr = [1, 2, 3, 4, 5]

// for (const num of arr) {
//     console.log(num)
// }

// const greeting = "Hello World!"

// for (const greet of greeting) {
//     console.log(greet)
// }

// const users = {
//     userName: "Dhananjay",
//     age: 20,
//     email: "abc@google.com"
// }

// for (const user of users) {
//     console.log(user)
// }

// const map = new Map(); // map is a diffent data type but similar to object different only has it store unique key value pairs and in order.
// map.set("IN", "India");
// map.set("USA", "America");
// map.set("FR", "France");
// map.set("IN", "India");

// console.log(map)

// for (const [key, value] of map) {
//     // console.log(key)
//     // console.log(value)
//     console.log(key, ":-", value)
// }

// 2. for in

// const programmingLanguage = {
//     py: "Python",
//     cpp: "C++",
//     java: "Java",
//     js: "Javascript"
// }

// for (const key in programmingLanguage) {
//    console.log(key, ":-", programmingLanguage[key])
// }

// const programmingLanguage = ["Js", "Ruby", "Java", "Swift"]

// for (const key in programmingLanguage) {
//    console.log(key, ":-", programmingLanguage[key])
// }

// const myName = "Dhananjay Kumar"

// for (const key in myName) {
//     console.log(key, ":-", myName[key])
// }

// const map = new Map(); // map is a diffent data type but similar to object different only has it store unique key value pairs and in order.
// map.set("IN", "India");
// map.set("USA", "America");
// map.set("FR", "France");
// map.set("IN", "India");

// for (const key in map) {
//    console.log(key)
// }

// 3. for each

// const coding = ["javascript", "java", "ruby", "c++", "python"];

// coding.forEach((value, index, array) => {
//     console.log(index, ":-", value, "=", array)
//     // console.log(value + " programming language")
// });

// +++++++++++++++++++++ filter, map and reduce ++++++++++++++++++++++++++++++++++

// const coding = ["javascript", "java", "ruby", "c++", "python"];

// const values = coding.forEach((item) => {
//   return item;
// });

// console.log(values)

// const values = coding.map((item) => {
//   return item;
// });

// console.log(values)

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNums.filter((num) => {
//   return num > 5;
// });
// console.log(newNums);

// const myName = [1, 2, 3, 4, 5];

// const myTotal = myName.reduce((acc, currval) => {
//   console.log(`acc: ${acc}, current value: ${currval}`);
//   return acc + currval;
// }, 0);

// console.log(myTotal);