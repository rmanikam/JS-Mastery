// Maps 

// map is an iterable

// store data in ordered fashion

// store key value pair (like object)

// duplicate keys are not allowed 
// like objects


// difference between maps and objects

// objects can only have string or symbol 
// as key

// in maps you can use anything as key
// like array, number, string

// object literal

// key -> string
// key -> symbol

// const person = {

//     firstName: "harshit",
//     age: 7,
//     1: "one"
// }


// console.log(person.firstName);
// console.log(person["firstName"]);

// console.log(person['1']);


// for(let key in person)
// {
//     console.log(typeof key)
// }


// key value pair

// const person = new Map()

// console.log(person);

// person.set('firstName', 'Harshit')

// person.set('age', 7);

// person.set(1, 'one');

// person.set([1,2,3], 'onetwothree')

// person.set({1: 'one'}, 'onetwothree')
// console.log(person);

// dont use this to access firstname in Map

// console.log(person.firstName)

// OR

// console.log(person['firstName']);

// console.log(person.get('firstName'));

// console.log(person.get("age"));


// console.log(person.get(1));


// console.log(person.keys());

// for(let key of person.keys())
// {
//     console.log(key, typeof key);
// }


// Note in object we cannot use for of 
// loop but we can use for in loop

// for(let key, value of person)
// {
    // console.log(Array.isArray(key));
    
    // console.log(key, value);
    // Dont do this above as i get error
    //Uncaught SyntaxError: Invalid 
    //left-hand side in for-of loop:
    // Must have a single binding. 

    // do dstructuring instead

    // for(let [key, value] of person)
    // {

    //     console.log(key, value);

    //  }

const person1 = {
    id: 1,
    firstName: "harshit"
}

const person2 = {
  id: 2,
  firstName: "harsh",
};
// const person = new Map([['firstName', 'harshit'], ['age', '7']])
// console.log(person);



const extraInfo = new Map();
//here key is1 object person and value is object
extraInfo.set(person1, {age:8, gender: "male"})
extraInfo.set(person2, { age: 9, gender: "female" });
// console.log(userInfo);
// console.log(extraInfo);
console.log(person1.id);
// for(let key, value of person)
// {

console.log(extraInfo.get(person1).age);
console.log(extraInfo.get(person1).gender);
console.log(extraInfo.get(person2).gender);

















