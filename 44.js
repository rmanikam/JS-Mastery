// function declaration

// Note this is function declaration
function singHappyBirthday()
{
    console.log("happy birthday to you .....");
}

singHappyBirthday();
singHappyBirthday();
singHappyBirthday();
singHappyBirthday();
singHappyBirthday();


// Note this is function declaration
function twoPlusFour()
{
    console.log(2+4);
}

twoPlusFour();
twoPlusFour();
twoPlusFour();
twoPlusFour();

// call a function, invoke a 
// function or run a function
// means same thing



// Note this is function declaration
function sumTwoNumbers(number1, number2)
{
    return number1 + number2;

}

//const returnedValue = sumTwoNumbers(9,5);
//console.log(returnedValue);
// Note undefined + undefined is NaN









// Note this is function declaration
function sumThreeNumbers(number1, number2, number3) {
  return number1 + number2 + number3;
}

const returnedValue = sumThreeNumbers(2,3);


console.log(returnedValue);

// note 
console.log(2+3+undefined);

// Note this is function declaration
function isEven(number)
{
    // if(number % 2 === 0)
    // {
    //     return true;
    // }
    // else{
    //     return false;
    // }
    return number % 2 === 0;
}


console.log(isEven(5));

console.log(isEven(2));

// Note this is function declaration
function firstChar(anyString)
{
    return anyString[0];
}

console.log(firstChar("zbc"));

// Note this is function declaration
function findTarget(array, target)

{
    for(let i = 0; i < array.length; i++)
    {
        if(array[i] === target)
        {
            return i;
        }
    }
    return -1;
}


const myArray =[1,3,8,90]
const ans = findTarget(myArray, 4);

console.log(ans);





