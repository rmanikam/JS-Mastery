// rest parameters

// function myFunc(a,b,...c)
// {
//     console.log(` a is ${a}`);
//     console.log(` b is ${b}`);
    // I can pass all the remaining values 
    // in form of string
    // console.log(` c is ${c}`);
   
    // Note this below will have c 
    // in form of array.
   
//     console.log(` c is`, c);
// }


// myFunc(3,4,5,6,7,8,9);


function addAll(...numbers)
{
    // console.log(numbers);
    // console.log(Array.isArray( numbers));
   let total = 0;
   for(let number of numbers)
   {
    total = total + number;
   }
   return total;

}


const ans = addAll(1,2,3,4,5);

console.log(ans);













