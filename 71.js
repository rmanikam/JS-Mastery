function personInfo()
{
    console.log(`person name is ${this.firstName} and person age is ${this.age}`);
}

// const person = {
//   firstName: "harshit",
// firstName: "mohit",
//firstName:"harsh",
//   age: 8,
// age:18,
//   about: function () {
    // console.log("person name is harshit and person age is 8");
    // console.log(`person name is ${this.firstName} and person age is ${this.age}`);
    // console.log(this);
//   },
// about: personInfo
// };


// console.log(person.about);


const person1 = {
  
  firstName: "harsh",
  age: 8,
  about: personInfo,
};

const person2 = {
  firstName: "mohit",
  age: 18,
  about: personInfo,
};

const person3 = {
  firstName: "nitish",
  age: 17,
  about: personInfo,
};

// person.about();


personInfo();

person1.about();
person2.about();
person3.about();

