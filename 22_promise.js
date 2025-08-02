// const promiseOne = new Promise((resolve, reject) => {
//   // Do an async task
//   // DB calls, cryptography, network

//   setTimeout(() => {
//     console.log("Async task is complete");
//     resolve();
//   }, 1000);
// });

// promiseOne.then(() => {
//   console.log("Promise consumed");
// });

// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Async task two is complete");
//     resolve();
//   }, 1000);
// }).then(() => {
//     console.log("Async two resolve")
// })

// const promiseThree = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve({ userName: "Dhananjay", email: "abcd@example.com" });
//   }, 1000);
// });

// promiseThree.then((user) => {
//   console.log(user);
// });

// const promiseFour = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let error = true;
//     if (!error) {
//       resolve({ username: "Dhananjay", password: "123" });
//     } else {
//       reject("ERROR: Something went wrong");
//     }
//   }, 1000);
// });

// promiseFour
//   .then((user) => {
//     console.log(user);
//     return user.username;
//   })
//   .then((username) => {
//     console.log(username);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("The promise is either resolve or rejected");
//   });

// const promiseFive = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let error = true;
//     if (!error) {
//       resolve({ username: "Javascript", password: "123" });
//     } else {
//       reject("ERROR: JS went wrong");
//     }
//   }, 1000);
// });

// async function consumePromiseFive() {
//   try {
//     const response = await promiseFive;
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// }

// consumePromiseFive();

// async function getAllUSer() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }

// getAllUSer();

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

