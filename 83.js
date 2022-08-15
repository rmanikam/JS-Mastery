// new keyword

// function createUser(firstName, age)
// {
//     this.firstName = firstName;
//     this.age = age;


// }
 // prototype property is an object. 
  // in prototype property i can add method
// createUser.prototype.about = function()
// {
//     console.log(this.firstName, this.age);
// }
// const user1 = new createUser("harshit", 6);

// console.log(user1);

// here user1 became an object 

// user1 ka proto
// new keyword is checking for 3 things

// 1)  it creates empty object. 
//     this keyword refers to 
//     empty object. this = {}. 
//     In empty object it adds firstName 
//     and age
// 2)  returns this which contains 
//     key value pair

//    3) new keyword will do 
//       Object.create(createUser.prototype) 
//       work itself. new keyword will 
//       set the value of proto itself.
//       It will make the 
//       relation itself. we are making the 
//       chain. we were setting the value 
//       of proto equal to its prototype. 
//       so new keyword will set the value 
//       of proto with its protype
//       proto hame protype tak leke jayega
//       agar js ko vo cheez na mili to vo 
//       prototype tak jayega aur proto js 
//       ko protype tak leke jayega


// we call this createUser, constructor function
// because it is constructing for us an object 
// called createUser
function CreateUser(firstName, lastName, email, age, address) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;
  this.age = age;
  this.address = address;
  
}

CreateUser.prototype.about = function () {
  return `${this.firstName} is ${this.age} years old`;
};

CreateUser.prototype.is18 = function () {
  return this.age >= 18;
};

CreateUser.prototype.sing = function () {
  return "la la la la ";
};

const user1 = new CreateUser(
  "raman",
  "sahi",
  "sahiraman7@gmail.com",
  29,
  "myaddress"
);
const user2 = new CreateUser(
  "harsh",
  "vashsith",
  "harshit@gmail.com",
  20,
  "myaddress1"
);

const user3 = new CreateUser(
  "mohit",
  "thakur",
  "mohit.thakur@gmail.com",
  17,
  "myaddress2"
);



console.log(user1);
console.log(user1.is18());