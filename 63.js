// some method

// const numbers = [3,5,7,9];
 // kya ek bhi number hai jo even hai
 // true

// let ans = numbers.some((number) => number%2===0);

// console.log(ans);


const userCart = [
  { productId: 1, productName: "mobile", price: 12000 },
  { productId: 2, productName: "laptop", price: 22000 },
  { productId: 3, productName: "tv", price: 35000 },
  { productId: 4, productName: "macbook", price: 25000 },
];

const ans = userCart.some((cartItem) => cartItem.price > 100000)

console.log(ans);