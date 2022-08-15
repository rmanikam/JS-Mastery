function hello()
{
    console.log("hello world");
}

// const hello = {key1: "value1"}
// javascript function ===> function + object

// In js we can treat 
// function as object too

// hello.name();

// In hello func we can call 
// name property

// console.log(hello.name); 
// this tells the func name 
// hello

// you can add your own
// properties


// hello.myOwnProperty = "very unique value";

// console.log(hello.myOwnProperty);



// name property  --> tells function name

// function provides call, apply, bind
// method
// function provides more useful properties

// function hame denge free space
// that free space is an object and 
// that object is called prototype
// that free space is called prototype

// prototype is an object

// hello.prototype is an object
// function has given me prototype.
console.log(hello.prototype); // {}

// Note hello.prototype is a constructor 
//which is a function hello in our case


// only functions provide prototype 
// property

// function ke paas prototype property 
// hoti hai

// if(hello.prototype)
// {
//     console.log("prototype is present");
// }
// else{
//     console.log("prototype is not present");
// }

hello.prototype.abc = "abc"
hello.prototype.xyz = "xyz";
hello.prototype.sing = function()
{
    return "lalalla";
};
console.log(hello.prototype);
console.log(hello.prototype.sing());






