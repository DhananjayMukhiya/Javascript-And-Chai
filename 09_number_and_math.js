/*
    Number and Math in JavaScript

    1. Number Types:
        - JavaScript has only one number type: double-precision 64-bit binary format IEEE 754.
        - Examples: 10, 10.5, -5, 1.2e3

    2. Number Methods:
        - toFixed(n): Returns string with n decimals. (123.456.toFixed(2) => "123.46")
        - toString(): Converts number to string. (100..toString() => "100")
        - parseInt(str), parseFloat(str): Converts string to number.

    3. Special Numeric Values:
        - NaN: Not a Number (e.g., 0/0)
        - Infinity, -Infinity: Result of division by zero or overflow.

    4. Math Object:
        - Math.PI, Math.E: Constants.
        - Math.abs(x): Absolute value.
        - Math.round(x): Rounds to nearest integer.
        - Math.floor(x): Rounds down.
        - Math.ceil(x): Rounds up.
        - Math.max(a, b, ...), Math.min(a, b, ...): Largest/smallest value.
        - Math.random(): Random number between 0 (inclusive) and 1 (exclusive).
        - Math.pow(x, y): x to the power y.
        - Math.sqrt(x): Square root.

    5. Examples:
*/

// const num = 123.456;
// console.log(num.toFixed(2)); // "123.46"
// console.log(Number("42")); // 42
// console.log(parseInt("42px")); // 42
// console.log(Math.round(4.7)); // 5
// console.log(Math.max(1, 2, 3)); // 3
// console.log(Math.random()); // e.g., 0.123456

/*
    6. Useful Tips:
        - Use Number.isNaN(value) to check for NaN.
        - Use Number.isFinite(value) to check for finite numbers.
        - All numbers (even integers) are floating point in JS.
*/

// const score = 100
// console.log(score)

// const balance = new Number(100)
// console.log(balance)

// console.log(balance.toString().length)
// console.log(balance.toFixed(2))

// const otherNum = 123.324
// console.log(otherNum.toPrecision(3))

// const hundreds = 10000000
// console.log(hundreds.toLocaleString('en-US'))

//+++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++

// console.log(Math);

// console.log(Math.abs(-10));
// console.log(Math.round(2.6433));
// console.log(Math.ceil(2.1));
// console.log(Math.floor(5.9));
// console.log(Math.min(2, 3, 4, 5, 6, 67, 6, 3));
// console.log(Math.max(2, 3, 4, 5, 6, 67, 6, 3));

// console.log(Math.random());
// console.log((Math.random() * 10) + 1)

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1) + min))
