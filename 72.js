// console.log(this);

// note this will print 
// window object

//OR 

// you can write console.log(window)
// window object
// in js window is a global object
// this object is being provided by JS


// Note window or this is 
// same thing


// Note this === window gives true

"use strict";
function myFunc()
{
    // "use strict"
     console.log(this);
    // console.log("hello world");
}
// Note if I use strict mode I will get undefined
// and strict mode can be used on top too before function 
myFunc();

// OR

// window.myFunc();