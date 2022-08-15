const userMethods = {
  about: function () {
    return `${this.firstName} is ${this.age} years old`;
  },
  is18: function () {
    return this.age >= 18;
  },
};

function createUser(firstName, lastName, email, age, address) {
//   const user = {};
const user = Object.create(userMethods);
  user.firstName = firstName;
  user.lastName = lastName;
  user.email = email;
  user.age = age;
  user.address = address;
//   user.about = userMethods.about;
//   user.is18 = userMethods.is18;
  return user;
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
console.log(user1.about());
// console.log(user3.about());
