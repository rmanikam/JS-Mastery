

class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  static classInfo()
  {
    return 'this is person class'
  }
  static desc = "static property";
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  set fullName(fullName) {
    const [firstName, lastName] = fullName.split(" ");
    this.firstName = firstName;
    this.lastName = lastName;
  }
  eat() {
    return ` ${this.firstName} is eating`;
  }
  isSuperCute() {
    return this.age <= 1;
  }

  isCute() {
    return true;
  }
}

const person1 = new Person("harshit", "sharma", 8);

// console.log(person1.eat());

// person1.classInfo(); // cant do this

// i will get error doing this above
// person1.classInfo is not a function for 
// static methods
// but i can do this instead
// i can call this method using Class name only
// i dont need to use Object to call this class

const info = Person.classInfo();
console.log(info);

console.log(Person.desc);

// Dont do this as class person1 
// doesn't have this property
