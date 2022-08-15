// block scope vs function scope

// let and const are block scope

// var is function scope

// note this is block scope
// {
//   let firstName = "harshit";
//   const  firstName = "harshit";
//    console.log(firstName);
// }

// console.log(firstName);
// {
//   let firstName = "mohit";
// const firstName = "mohit";
//   console.log(firstName);

// }

// const firstName ="garima";
// console.log(firstName);


// {
//       var firstName = "harshit";
//        console.log(firstName);
// }

// {
//   console.log(firstName);
// }

// console.log(firstName);

// if(true)
// {
//     let firstName ="harshit"
//     console.log(firstName);
// }

// console.log(firstName);

function myApp()
{
    if(true)
    {
        let firstName = "harshit";
        console.log(firstName);
    }
    console.log(firstName);
}

myApp();







