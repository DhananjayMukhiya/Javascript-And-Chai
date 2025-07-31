//  1. Synchronous (Sync) Code

// console.log("Start");
// console.log("Middle");
// console.log("End");

//  2. Asynchronous (Async) Code

// console.log("Start");

// setTimeout(() => {
//   console.log("Async Code");
// }, 2000); // 2 seconds delay

// console.log("End");

// function waitOneSec() {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve("Waited 1 sec"), 1000);
//   });
// }

// async function run() {
//   console.log("Before wait");
//   let msg = await waitOneSec();  // wait until resolved
//   console.log(msg);
//   console.log("After wait");
// }

// run();

// setTimeout(() => {
//   console.log("Dhananjay");
// }, 2000);

// console.log("Kumar")

// const changeName = () => {
//   document.querySelector("#myName").innerHTML = "Shyam Kumar";
// };

// const changeMe = setTimeout(changeName, 2000);

// document.querySelector("#stopBtn").addEventListener('click', () => {
//     clearTimeout(changeMe);
//     console.log("STOPPED")
// })

// let intervalId = null;

// const sayDate = (str) => {
//   document.querySelector("#myName").textContent = (str, new Date().toLocaleString());
// };

// document.querySelector("#start").addEventListener("click", () => {
//   if (intervalId === null) {
//     intervalId = setInterval(sayDate, 1000, "Hii");
//     console.log("Started");
//   }
// });

// document.querySelector("#stop").addEventListener("click", () => {
//   clearInterval(intervalId);
//   intervalId = null; // important: reset to null
//   console.log("Stopped");
// });

let intervalId = null;

// through rbg
// function getRandomColor() {
//   const r = Math.floor(Math.random() * 256); // red 0–255
//   const g = Math.floor(Math.random() * 256); // green
//   const b = Math.floor(Math.random() * 256); // blue
//   return `rgb(${r}, ${g}, ${b})`;
// }

// through hax valur

// function getRandomColor() {
//   const hex = Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, '0');
//   return `#${hex}`;
// }

function getRandomColor() {
  const hex = "0123456789ABCDEF";
//   console.log(hex[0])
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
}

// console.log(getRandomColor()) // rgb(96, 12, 72)

document.querySelector("#start").addEventListener("click", () => {
  if (intervalId === null) {
    intervalId = setInterval(() => {
      document.body.style.backgroundColor = getRandomColor();
    }, 1000);
    console.log("Color change started");
  }
});

document.querySelector("#stop").addEventListener("click", () => {
  clearInterval(intervalId);
  intervalId = null;
  console.log("Color change stopped");
});
