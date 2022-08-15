// important array methods

// const numbers = [4, 2, 5, 8];

// function multiplyBy2(number, index) {
//   console.log("index is ", index);
//   console.log(`${number} * 2 = ${number * 2}`);
// }

// multiplyBy2(numbers[0], 0);

// for(let i = 0; i  < numbers.lengthj; i++)
// {
//     multiplyBy2(numbers[i], i);
// }


// function myFunc(number, index)
// {
//     console.log(`index is ${index} number is ${number}`);
// }

// for(let i = 0; i < numbers.length; i++)
// {
//     myFunc(numbers[i], i);
// }


// numbers.forEach(myFunc);


// numbers.forEach(function(number, index)
// {
//   console.log(number * 3, index);
// })

const users = [
  { firstName: "harshit", age: 23 },
  { firstName: "mohit", age: 21 },
  { firstName: "nitish", age: 22 },
  { firstName: "garima", age: 20 },
];

// users.forEach(function(user)
// {
//     console.log(user.firstName);
// })

// for(let user of users)
// {
//     console.log(user.firstName);
// }

users.forEach((user, index) =>
{
    console.log(user.firstName, index);
})












