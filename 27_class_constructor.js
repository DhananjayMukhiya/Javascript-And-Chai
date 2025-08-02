// ES6

// class user {
//   constructor(userName, email, password) {
//     this.userName = userName;
//     this.email = email;
//     this.password = password;
//   }

//   encryptPassword() {
//     return `${this.password}abc`;
//   }

//   changeUserName() {
//     return `${this.userName.toUpperCase()}`;
//   }
// }

// const chai = new user("chai", "chai@example.com", "123");

// console.log(chai.encryptPassword());
// console.log(chai.changeUserName());

// behind the scne

// function user(userName, email, password) {
//   this.userName = userName;
//   this.email = email;
//   this.password = password;
// }

// user.prototype.encryptPassword = function () {
//   return `${this.password}abc`;
// };

// user.prototype.changeUserName = function () {
//   return `${this.userName.toUpperCase()}`;
// };

// const tea = new user("chai", "chai@example.com", "123");

// console.log(tea.encryptPassword());
// console.log(tea.changeUserName());

// class user {
//   constructor(username) {
//     this.username = username;
//   }

//   logMe() {
//     console.log(`USername is ${this.username}`);
//   }
// }

// class teacher extends user {
//   constructor(username, email, password) {
//     super(username);
//     this.email = email;
//     this.password = password;
//   }

//   addNewCourse() {
//     console.log(`A new course was added by ${this.username}`);
//   }
// }

// const userOne = new teacher("Dhananjay", "dhananjay@example.com", "12345");

// userOne.addNewCourse();
// // console.log(userOne);
// // console.log(userOne.logMe());
// userOne.logMe();

// const userTwo = new user("shyam");
// // userTwo.addNewCourse()
// userTwo.logMe();

// console.log(userOne === teacher);
// console.log(userOne instanceof teacher);
// console.log(userOne instanceof user);

class user {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`Username is ${this.username}`);
  }

  static createdId() {
    return `123`;
  }
}

const userOne = new user("Dhananjay");
console.log(userOne.createdId());
