
// function hello()
// {
//     console.log("hello world");
// }

// hello();

// OR


// call apply bind

 function about (hobby, favMusician){
        console.log(this.firstName, this.age, hobby, favMusician);
 }


const user1 = {
    firstName: "harshit",
    age:8,
    // about: function(hobby, favMusician)
    // {
    //     console.log(this.firstName, this.age, hobby, favMusician);
    // }
}

const user2 = {

    firstName: "mohit",
    age:9,
}


// user1.about()

// user1.about.call(user2, "guitar", "mozart");
// note above this keyword is inside
// brackets and it refers to user2 here

// user1.about.call()
// Note user1.about.call() will give 
// output undefined and undefined





// hello.call();


// apply

// apply is same as call and internally
 // apply uses call only

//  about.apply(user1, ["guitar", "bach"])

// apply uses list
// List ka matlab array hai

// bind returns a function 
//  const func = about.bind(user1, "guitar", "bach")
// func();

 const func = about.bind(user2, "guitar", "bach");
 func();