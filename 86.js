// 2015/ es6

// class keyword

// class are fake

class CreateUser {
  constructor(firstName, lastName, email, age, address) {
   console.log("constructor called");
   this.firstName = firstName;
   this.lastName = lastName;
   this.email = email;
   this.age = age;
   this.address = address;


  }

  about()
  {
   return `${this.firstName} is ${this.age} years old.`;
  }
  is18(){
   return this.age >= 18;
  }
  sing(){
    return "la la la la ";
  }
  func(a)
  {
    console.log(a);
  }

}


const user1 = new CreateUser(
  "raman",
  "sahi",
  "sahiraman7@gmail.com",
  29,
  "myaddress"
);

// using new keyword our constructor 
// is called
// without using new keyword constructor
//  wont be called

// console.log(user1.firstName);

// console.log(Object.getPrototypeOf(user1));

user1.func("Raman");










