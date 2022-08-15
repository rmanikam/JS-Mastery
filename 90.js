// getters and setters

// class Person {
//     constructor(firstName, lastName, age)
//     {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//     }
//    get fullName()
//     {
//         return `${this.firstName} ${this.lastName}`
//     }
//     // setName(firstName, lastName)
//     // {
//     //     this.firstName = firstName;
//     //     this.lastName = lastName;
//     // }
//     set fullName(fullName)
//     {
//         const [firstName, lastName] = fullName.split(" ")
//          this.firstName = firstName;
//          this.lastName = lastName;
//     }

// }

// const person1 = new Person("Raman", "Sahi", 35);
// console.log(person1);
// console.log(person1.fullName());
// console.log(person1.fullName);// dont 
// do this
// fullName is a property now using
// getters

// console.log(person1.firstName);
// console.log(person1.lastName);

// person1.setName("Kamal", "Sahi")


// console.log(person1.firstName);
// console.log(person1.lastName);

// OR

// person1.firstName ="Kamal"
// person1.lastName="Sahi"


// console.log(person1.firstName);
// console.log(person1.lastName);

// person1.fullName = "mohit vashistha"
//  console.log(person1);


// console.log(person1.fullName);

class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  eat() {
    return ` ${this.name} is eating`;
  }
  isSuperCute() {
    return this.age <= 1;
  }

  isCute() {
    return true;
  }
}



class Dog extends Animal {
  constructor(name, age, speed) {
    super(name, age); // super means parent class
    this.speed = speed;
  }
  eat() {
    return `Modified Eat : ${this.name} is eating `;
  }

  run() {
    return `${this.name} is running at ${this.speed}kmph`;
  }
}

const animal1 = new Animal('sheru', 2);

console.log(animal1);
console.log(animal1.eat());






