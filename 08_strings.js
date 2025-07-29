/*
Notes on Strings in JavaScript

1. Definition:
    - A string is a sequence of characters used to represent text.
    - Strings are enclosed in single quotes (' '), double quotes (" "), or backticks (` `).

2. Declaration:
    const str1 = "Hello";
    const str2 = 'World';
    const str3 = `Hello, ${str2}!`; // Template literal

3. String Properties:
    - length: Returns the number of characters.
      Example: str1.length // 5

4. Common Methods:
    - toUpperCase(), toLowerCase()
    - indexOf(), lastIndexOf()
    - slice(start, end), substring(start, end), substr(start, length)
    - includes(substring), startsWith(substring), endsWith(substring)
    - replace(search, replacement), replaceAll(search, replacement)
    - trim(), trimStart(), trimEnd()
    - split(separator), concat(str2)
    - charAt(index), charCodeAt(index)

5. Immutability:
    - Strings are immutable. Methods return new strings, original is unchanged.

6. Escape Characters:
    - Use backslash (\) to escape quotes or special characters.
      Example: "He said, \"Hello!\""

7. Template Literals:
    - Use backticks (`) for multi-line strings and interpolation.
      Example: `Hello, ${name}!`

8. String Conversion:
    - String(value) or value.toString() to convert other types to string.

9. Unicode Support:
    - Strings support Unicode characters, including emojis.

Example:
const name = "Dhananjay";
console.log(`Welcome, ${name}!`.toUpperCase()); // WELCOME, DHANANJAY!
*/

// let firstName = "Dhananjay"
// let lastName = "Kumar"

// console.log(`My full name is ${firstName.toUpperCase()} ${lastName.toLocaleLowerCase()}`)

