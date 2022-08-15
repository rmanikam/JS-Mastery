// objects reference type
// arrays are good but not sufficient
// for real world data
// objects store key value pairs
// objects don't have index

// how to create objects

// const person = {
// name:"Harshit", 
// age: 22, 
// hobbies:["guitar", "sleeping", "listening music"]
// }

// console.log(person);

// console.log(typeof person);

// we call person as object literal

// how to access data from objects

// console.log(person.name);
// console.log(person.age);

// console.log(person.hobbies);

// how to add key value pair to objects

// person.gender = "male";

// console.log(person);

// Note in JS key is in form of string only
// by default
// note key ko ham property bhi bolte hain

// console.log(person["name"]);

// this below will give error ;
// console.log(person[name]);

// Do this instead
// console.log(person["age"]);

// person["gender"] = "male";

// console.log(person);


//difference between dot and bracket notation
const key = "email"
const person = {
  name: "Harshit",
  age: 22,
  "person hobbies": ["guitar", "sleeping", "listening music"],
};


//to access a key which has space 
// between 2 words use square bracket
console.log(person["person hobbies"]);

// person.key = "harshitvashisth@gmail.com"

person[key] = "harshitvashisth@gmail.com";
console.log(person);















