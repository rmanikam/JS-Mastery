// clone using Object.assign
// In heap memory object is stored
const obj = {

    key1: "value1",
    key2: "value2"
}


// const obj2 = obj;
// In memory there is only 
// 1 object and both obj and
// obj2 are pointing to that 
// object in memory
// Note: there is one address
// in both obj2 and obj
// use spread operator obj2 will 
// have diff address and obj 
// will have diff address

// const obj2 = {...obj}

// 2nd way to clone
const obj2 = Object.assign({}, obj)

obj.key3 = "value3"
console.log(obj);
console.log(obj2);
