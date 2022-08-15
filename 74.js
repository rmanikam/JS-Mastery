const user1 = {

    firstName: "harshit",
    age: 8,
    about: function()
    {
        console.log(this.firstName, this.age);
    }
}


// don't do this mistake

const myFunc = user1.about.bind(user1); 

// Note this keyword inside brackets points to user1. 
// Note above in myFunc I am only storing 
// reference and binding is not taking 
// place. 

// note user1.about gives value
// function()
    // {
    //     console.log(this.firstName, this.age);
    // }

myFunc();

// In MyFunc this will point to 
// Window object

// Note this will gives 
// output as undefined, 
// undefined