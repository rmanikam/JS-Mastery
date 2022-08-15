// Sets (it is iterable)
// store data
// sets also have its own methods
// No index-based access
// Order is not guaranteed
// unique items only(no duplicates allowed)


// const numbers = new Set([1,2,3,3]);
// const numbers = new Set("abc");

// const items = ["item1", "item2", "item3"];
// const numbers = new Set();

// numbers.add(1);
// numbers.add(2);
// numbers.add(2);
// numbers.add(3);
// numbers.add(4);
// numbers.add(5);
// numbers.add(6);
//  numbers.add(items);
// numbers.add(items);

// numbers.add(['item1', 'item2']);
// numbers.add(["item1", "item2"]);
// numbers.add(["item1", "item2"]);

// to check if a number is present in set
// if(numbers.has(1))
// {
//     console.log("1 is present");
// }
// else{
//     console.log("1 is not present");
// }

// for(let number of numbers)
// {
//  console.log(number);
// }
// console.log(numbers);

// console.log(numbers[2]);


const myArray = [1,2,4,4,5,6,5,6];

const uniqueElements = new Set(myArray)

// console.log(uniqueElements);

// Note cant use length property in Set

// console.log(uniqueElements.length);

// console.log(myArray);


let length = 0;

for(let element of uniqueElements)
{
    length++;
}

console.log(length);


















