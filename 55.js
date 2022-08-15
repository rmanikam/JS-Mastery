// function returning function

function myFunc()
{
    // return "a";
    // return [1,2,3];
    // return {name:"harshit", age: 22};

    //  function hello()
    //  {
    //     return "hello world";
    //  }

    //  return hello;
    return function()
    {
        return "hello world"
    }


}

const ans = myFunc();

// console.log(ans);

console.log(ans());