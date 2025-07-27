let score = 33
console.log(typeof score)

score = "Dhananjay"
console.log(typeof score)

let valueNumber = Number(score)
console.log(typeof valueNumber)
console.log(valueNumber)

/*
Notes on Data Type Conversion in JavaScript:

1. Implicit Conversion (Type Coercion):
    - JavaScript automatically converts data types when needed.
    - Example: '5' + 2 results in '52' (number 2 is converted to string).
    - Example: '5' - 2 results in 3 (string '5' is converted to number).

2. Explicit Conversion:
    - You can manually convert data types using functions like Number(), String(), Boolean(), etc.

3. Number():
    - Converts a value to a number.
    - If the value cannot be converted, it returns NaN (Not a Number).
    - Example: Number("33") => 33, Number("abc") => NaN

4. String():
    - Converts a value to a string.
    - Example: String(123) => "123"

5. Boolean():
    - Converts a value to true or false.
    - Falsy values: 0, "", null, undefined, NaN, false.
    - Example: Boolean(0) => false, Boolean("hello") => true

6. typeof Operator:
    - Used to check the data type of a variable.
    - Example: typeof 123 => "number", typeof "abc" => "string"

7. Special Cases:
    - null is of type "object" (this is a known JavaScript quirk).
    - NaN is of type "number".

Always be careful with type conversions to avoid unexpected results.
*/