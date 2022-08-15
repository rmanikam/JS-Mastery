// arrow functions


const user1 = {
  firstName: "harshit",
  age: 8,
  about:  () => {
    console.log(this);
    console.log(this.firstName, this.age);
  },
};
// Note below inside brackets this 
// points to user1
user1.about.call(user1);

// Note in arrow function this 
// keyword takes value from its surroundings
// i.e this will be a window object


// here this keyword wont be of user1
// but here this will be of window keyword


// Note you cannot change value of this 
// keyword in case of arrow function






