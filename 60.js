// sort method


// const numbers = [5,9,1200,400,3000];
// ["5","9","1200","400","3000"]
//ascii value
// [53,57, 49, 52, 51]

// numbers.sort()

// console.log(numbers);

// Note JS sorts the original
// array as a string and not as 
// numbers

// const userNames = ["harshit", "abcd", 
// "mohit", "nitish", "ABC", "Harshit"];

// userNames.sort();

// console.log(userNames);


const numbers = [5, 9, 1200, 400, 3000];

numbers.sort((a,b) =>
{
    // return a - b;
   return b - a;
});

// numbers.sort((a, b) => a - b);
 console.log(numbers);

// 1200, 410

// a - b ---->  790

// a - b ----> positive(greater than 0)

// if a -b gives positive number then b 
// is put before a in the series
// 410, 1200



// a-b ---> negative


// 5, 9 ---> 5 - 9  ==== -4

// if we get negative number 
// then we keep a first and then b later

const products = [
  { productId: 1, productName: "p1", price: 300 },
  { productId: 2, productName: "p2", price: 3000 },
{productId: 3, productName: "p3", price: 200 },
{productId: 4, productName: "p4", price: 8000 },
{productId: 5, productName: "p5", price: 500 },
];


//lowToHigh

const lowToHigh = products.slice(0).sort((a,b) => {
    
  return a.price - b.price
});

const highToLow = products.slice(0).sort((a, b) => {
  return b.price - a.price;
});

console.log(lowToHigh);

console.log(highToLow);












