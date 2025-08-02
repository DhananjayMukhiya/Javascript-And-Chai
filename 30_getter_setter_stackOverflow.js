// class user {
//   constructor(email, password) {
//     this.email = email;
//     this.password = password;
//   }

//   get email() {
//     return this._email.toUpperCase();
//   }

//   set email(value) {
//     this._email = value;
//   }

//   get password() {
//     return `${this._password}dhananjay`;
//   }

//   set password(value) {
//     this._password = value;
//   }
// }

// const userOne = new user("dhan@anjay.com", "abc");
// console.log(userOne.password);
// console.log(userOne.email);

// thrugh function

// function createUser(email, password) {
//   const user = {};
//   let _email = email;
//   let _password = password;

//   Object.defineProperty(user, "email", {
//     get: function () {
//       return _email.toUpperCase();
//     },
//     set: function (value) {
//       _email = value;
//     },
//     enumerable: true,
//   });

//   Object.defineProperty(user, "password", {
//     get: function () {
//       return _password + "dhananjay";
//     },
//     set: function (value) {
//       _password = value;
//     },
//     enumerable: true,
//   });

//   return user;
// }

// const userOne = createUser("dhan@anjay.com", "abc");

// console.log(userOne.email); // Output: DHAN@ANJAY.COM
// console.log(userOne.password); // Output: abcdhananjay

// through object 
const user = {};
let _email = "dhan@anjay.com";
let _password = "abc";

Object.defineProperty(user, "email", {
  get: function () {
    return _email.toUpperCase();
  },
  set: function (value) {
    _email = value;
  },
  enumerable: true
});

Object.defineProperty(user, "password", {
  get: function () {
    return _password + "dhananjay";
  },
  set: function (value) {
    _password = value;
  },
  enumerable: true
});

console.log(user.email);     // Output: DHAN@ANJAY.COM
console.log(user.password);  // Output: abcdhananjay
