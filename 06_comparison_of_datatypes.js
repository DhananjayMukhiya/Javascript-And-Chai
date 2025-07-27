/*
    Comparison of Datatypes in JavaScript

    1. Primitive vs Reference Types:
         - Primitive types: Number, String, Boolean, Null, Undefined, Symbol, BigInt
         - Reference types: Object, Array, Function, etc.

    2. == vs === Operators:
         - == (loose equality): Compares values after type coercion.
             Example: '5' == 5 // true
         - === (strict equality): Compares values and types.
             Example: '5' === 5 // false

    3. Object Comparison:
         - Objects and arrays are compared by reference, not by value.
             Example:
                 let a = [1,2];
                 let b = [1,2];
                 a == b // false

    4. Special Cases:
         - NaN is not equal to itself: NaN === NaN // false
         - null == undefined // true
         - null === undefined // false

    5. Type Conversion:
         - When using ==, JavaScript tries to convert types to match.
             Example: false == 0 // true

    6. Use strict equality (===) for predictable results.
*/

// console.log(2 > 1)
// console.log(2 < 1)
// console.log(2 >= 1)
// console.log(2 <= 1)
// console.log(2 == 1)
// console.log(2 != 1)

console.log("2" > 1)
console.log("2" === 2)