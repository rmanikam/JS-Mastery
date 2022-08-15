// const userMethods = {
//   about: function () {
//     return `${this.firstName} is ${this.age} years old`;
//   },
//   is18: function () {
//     return this.age >= 18;
//   },
//   sing: function(){
//     return 'toon na na na la la12'
//   }
// };

function createUser(firstName, lastName, email, age, address) {
  const user = Object.create(createUser.prototype);
  user.firstName = firstName;
  user.lastName = lastName;
  user.email = email;
  user.age = age;
  user.address = address;
  return user;
}


createUser.prototype.about = function () {
    return `${this.firstName} is ${this.age} years old`;
  }

createUser.prototype.is18 = function () {
    return this.age >= 18;
  }

createUser.prototype.sing = 
function(){
    return 'la la la la ';
  }

const user1 = createUser(
  "raman",
  "sahi",
  "sahiraman7@gmail.com",
  29,
  "myaddress"
);
const user2 = createUser(
  "harsh",
  "vashsith",
  "harshit@gmail.com",
  20,
  "myaddress1"
);

const user3 = createUser(
  "mohit",
  "thakur",
  "mohit.thakur@gmail.com",
  17,
  "myaddress2"
);

console.log(user1);
// console.log(user1.about());
// console.log(user3.about());
console.log(user1.is18());
console.log(user1.sing());

// diff between prototype and proto

//prototype - is an object

// proto - Is a reference hai. kiska 
// refernce hai. jo bhi aap 
// chain create karoge uska refernce hai















