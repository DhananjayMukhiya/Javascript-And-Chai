// function init() {
//   let name = "Mozilla";
//   function displayName() {
//     console.log(name);
//   }
//   displayName();
// }

// init();

function outer() {
  let userName = "Dhananjay";
  //   console.log(secret)
  function inner() {
    let secret = "12ab";
    console.log("Inner", userName);
  }
  function innerTwo() {
    console.log("Innertwo", userName);
    // console.log(secret)
  }
  inner();
  innerTwo();
  //   console.log(secret)
}

// outer();

// console.log("TO OUTER", userName);

function makeFun() {
  let name = "Mozilla";
  function displayName() {
    console.log(name);
  }
  return displayName();
}

// const myFunc = makeFun();
// myFunc();
// console.log(myFunc)

// document.querySelector("#orange").addEventListener("click", () => {
//   document.body.style.backgroundColor = "orange";
// });
// document.querySelector("#green").addEventListener("click", () => {
//   document.body.style.backgroundColor = "green";
// });

function clickHandler(color) {
  //   document.body.style.backgroundColor = color;
  return function () {
    document.body.style.backgroundColor = color;
  };
}

document
  .getElementById("orange")
  .addEventListener("click", clickHandler("orange"));
document
  .getElementById("green")
  .addEventListener("click", clickHandler("green"));
