

// const user1 = {
//   firstName: "harshit",
//   age: 8,
//   about: function () {
//     console.log(this.firstName, this.age);
//   },
// };

// short syntax
// change about function by writing 
// about() instead of about: function ()
const user1 = {
  firstName: "harshit",
  age: 8,
  about() {
    console.log(this.firstName, this.age);
  },
};

user1.about();




