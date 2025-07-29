/*
    Arrays in JavaScript

    1. Definition:
         - An array is a special variable that can hold more than one value at a time.
         - Arrays are zero-indexed (first element is at index 0).

    2. Declaration:
         - Using array literal:
                 const arr = [1, 2, 3, 4];
         - Using Array constructor:
                 const arr = new Array(1, 2, 3, 4);

    3. Accessing Elements:
         - arr[0] // First element
         - arr[arr.length - 1] // Last element

    4. Common Methods:
         - push(element): Adds to end
         - pop(): Removes from end
         - unshift(element): Adds to start
         - shift(): Removes from start
         - indexOf(value): Finds index
         - includes(value): Checks existence
         - slice(start, end): Returns a shallow copy
         - splice(start, deleteCount, ...items): Adds/removes elements

    5. Iteration:
         - for (let i = 0; i < arr.length; i++) { ... }
         - arr.forEach(item => { ... });
         - for (let item of arr) { ... }

    6. Array Properties:
         - arr.length: Number of elements

    7. Arrays can hold any type:
         const mixed = [1, "hello", true, null, [2, 3]];

    8. Spread Operator:
         - const newArr = [...arr, 5, 6];

    9. Array Destructuring:
         - const [a, b] = arr;

    10. Multidimensional Arrays:
            - const matrix = [[1,2], [3,4]];

    Arrays are reference types and mutable.
*/

// array practices

// const myArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// console.log(myArr[0])

// const myHeros = ["bhagat sing", "raj guru", "sukhdev"]
// const myArr2 = new Array(100, 200, 300)

// console.log(myHeros[0].length)

//Array method

// myArr.push(100)
// console.log(myArr)

// myArr.pop()
// console.log(myArr)

// myArr.unshift(99)
// console.log(myArr)

// myArr.shift()
// console.log(myArr)

// console.log(myArr.indexOf(6))
// console.log(myArr.includes(5))

// const newArr = myArr.join()

// console.log(typeof myArr)
// console.log(typeof newArr)

// console.log("A", myArr);

// const myn1 = myArr.slice(1, 4);
// console.log(myn1);
// console.log("B", myArr)

// const myn2 = myArr.splice(1, 4);
// console.log(myn2);
// console.log("C", myArr)

const marvelHeros = ["thor", "ironman", "spiderman"];
const dcHeros = ["superman", "flash", "batman"];

// marvelHeros.push(dcHeros);
// console.log(marvelHeros);
// console.log(marvelHeros.length);
// console.log(marvelHeros[3][1])

// const allHeros = marvelHeros.concat(dcHeros)
// console.log(allHeros)

// const allNewHeros = [...marvelHeros, ...dcHeros] //spred operator
// console.log(allNewHeros)

// const anotherArray = [1, 3, 4, [5, 6, 7], 8, [2, 3, 4, [5, 6, 7]]]
// console.log(anotherArray)
// console.log(anotherArray.length)

// const realAnotherArray = anotherArray.flat(2)
// console.log(realAnotherArray)
// console.log(realAnotherArray.indexOf(7))

// console.log(Array.isArray("Dhananjay"))
// console.log(Array.from("Dhananjay"))