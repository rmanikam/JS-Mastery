// callback function

function myFunc2(name)
{
  console.log("inside my func 2");
console.log(`Your name is ${name}`);
}
function myFunc(callback)
{
    console.log("hello there I am a func and I can..");
    // console.log(a);
    // console.log('hello world');
callback("raman");

}

// myFunc([1,2,3]);

myFunc(myFunc2);