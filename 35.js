//array destructuring


const myArray = ["value1","value2", "value3", "value4"];

// let myvar1 = myArray[0];
// let myvar2 = myArray[1];

// console.log("value of myvar1", myvar1);

// console.log("value of myvar2", myvar2);


// let [myvar1, myvar2] = myArray;

// console.log("value of myvar1", myvar1);

// console.log("value of myvar2", myvar2);


// const [myvar1, myvar2, myvar3] = myArray;

// myvar1 = "value changed";

// Note cant change value of 
//myvar1 later on as it is of type const

//  console.log("value of myvar1", myvar1);

//  console.log("value of myvar2", myvar2);

//   console.log("value of myvar3", myvar3);

//  let [myvar1, ,myvar2] = myArray;

// console.log("value of myvar1", myvar1);

// console.log("value of myvar2", myvar2);

let [myvar1, myvar2, ...myNewArray] = myArray;

console.log("value of myvar1", myvar1);

console.log("value of myvar2", myvar2);

console.log(myNewArray);







