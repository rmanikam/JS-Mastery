//  let numbers =[1,2,3];

 // js is getting methods 
 // from prototype
 // but prototype is for
 // functions only

 // note when we write let 
 // numbers =[1,2,3];
 // then internally new 
 //keyword calls a array constructor
 // and creates array for us
 
let numbers = [1,2,3];
console.log(Object.getPrototypeOf(numbers));;

 console.log(numbers);

//  let numbers = new Array(1,2,3);
 // yeh jo Array function 
 // hain uske prototype main 
//  yeh saare methods padhe 
// hain

// console.log(Array.prototype);

// Array ka prototype 

function hello()
{
    console.log("hello");
}

console.log(hello.prototype);

//for hello.prototype we will get an 
// object

// but for Array.prototype 
// we will get an Array