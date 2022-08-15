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


for(let key in user1)
{
    // console.log(key);
    if(user1.hasOwnProperty(key))
    {
        console.log(key);
    }
}


