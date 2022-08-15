const obj1 = {
    key1: "value1",
    key2: "value2"
}

const obj2 = Object.create(obj1); // {}
console.log(obj2);
// const obj2 ={};

// const obj2 ={
//    key3: "value3"
// }

// there is one more way to 
// empty object

 obj2.key3 ="value3";
//  obj2.key2 = "unique";
//  console.log(obj2.key2);
 console.log(obj2);
 // this is happening

// official ecmascript documentation

 // in official ecmascript documentation
 //  __proto__ or [[prototype]] are 
 // same thing

// prototype is diff thing than __proto__ and [[prototype]]


console.log(obj2.__proto__);

// Note __proto__ is called dunder

// obj2 ke proto property main 
// object2 set ho gaya

// object2 main proto property set hogi
// when we wrote Object.create(obj1);

// Object.create(obj1);


// proto object ka reference hai










