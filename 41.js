// object destructuring

const band = {
    bandName: "led zepplin",
    famousSong: "stairway to heaven",
    year:1968 ,
    anotherFamousSong: "kashmir"
}

// const bandName = band.bandName;
// const famousSong = band.famousSong;

// console.log(bandName, famousSong);

// Note here we cant assign 
//new value to bandname as it 
// is of type const and if we do 
// we will get error
// const {bandName, famousSong} = band;
// bandName = "queen"
// console.log(bandName);

// but if we change const to let
// we will not be getting error

// let {bandName:var1, famousSong:var2} = band;
// bandName = "queen"
//Note this bandname will
// give error as it is not a 
// variable

// console.log(bandName);

// so do this instead as var1 is a variable

// console.log(var1);

let {bandName, famousSong, ...restProps} = band;

console.log(bandName);

console.log(restProps);




