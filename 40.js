// spread operator

// const array1 = [1,2,3];
// const array2 = [5,6,7];

// const newArray = [...array1, ...array2, 89, 69];
// const newArray = [..."123456789"]
// console.log(newArray);

// Note in spread operator string 
//is iterable, array is iterable but 
// not number

// for example this below will give error

// const newArray = [...123456789];


//spread operator in objects

const obj1 ={

    key1: "value1",
    key2: "value2",
    // key1:"value59" // note cant have more 
    // than 1 same name in key
}

const obj2 = {
    key1: "valueUnique",
    key3: "value3",
    key4: "value4",
}
// const newObject = {...obj1, ...obj2}
// to clone newObject
// const newObject = { ...obj2, ...obj1, key69: "value69" };
// console.log(obj1);
// const newObject = { ..."abc"}
// const newObject = { ...["item1", "item2"]}
// const newObject = { ..."abcdefghijklmnopqrstuvwxyz" };

// console.log(newObject);

























