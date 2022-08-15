// filter method

const numbers = [1,3,2,6,4,8];

// Note isEven becomes a
// callback function after
// giving it equal sign and 
// passing function to it
// const isEven = function(number)
// {
//     return number%2===0;
// }

// Note filter callback fn 
//always returns a boolean 
// value

// const evenNumbers = numbers.filter(isEven)

// console.log(evenNumbers);


// const isOdd = function(number)
// {
//     return number%2!==0;
// }

//  const oddNumbers = numbers.filter(isOdd)

//  console.log(oddNumbers);

 const oddNumbers = numbers.filter((number) =>
 {
    return number % 2 !== 0;
 })

 console.log(oddNumbers);













