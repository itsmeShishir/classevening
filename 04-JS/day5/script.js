// array iteration -> map, foreach, reducer, filter, find,
// map -> return new array
// foreach -> return undefined
// reducer -> return single value
// filter -> return new array -> filter
// find -> return single value -> find
let arr = ["dip", "RKD", "pramilla", "tlishma"];
// find
let findP = arr.find((item) => item == "pramilla");
console.log(findP);
// Array Sorting and Reversing
let arr2 = [1, 2, 4, 3, 5];
let value = arr2.includes(4);
let arrayindex = arr2.indexOf(4);
console.log(arrayindex);
console.log(arr2.slice(0, 3));
console.log(arr2.concat(arr));
console.log(value);
arr2.reverse();
console.log(arr2);

// Object in Js -> key and value pair
let obj = {
  first: "one",
  last: "three",
  greet: function () {
    return "Helllo";
  },
};
console.log(obj.greet());
console.log(obj.first);
console.log(obj.last);

// Adding and Modifying Properties
// key
obj.first = "hari";
console.log(obj.first);
obj.last = "sharma";
console.log(obj.last);

// JavaScript OOP (Object-Oriented Programming)
// class, object, constructor, methods, 4 pillars -> inheritance, encapsulation, abstraction, poly
// class
class Person {
  name = "hari";
  age;
}
person1 = new Person();
person1.age = 30;
console.log(person1);
person2 = new Person();
person2.age = 40;
console.log(person2);

// constructor -> A special type of methods called automatically when class is call in object
// function and methods
class Car {
  occupied;
  name;
  age;
  seats;

  greet() {
    console.log("this is a methods");
  }
  //   this keywords ->
  constructor(occupied, name, age, seats) {
    this.occupied = occupied;
    this.name = name;
    this.age = age;
    this.seats = seats;
    console.log("list of cars", this.occupied, this.name, this.age, this.seats);
    this.greet();
  }
}
Hundai = new Car(5, "Creata", 4, 2);
Tata = new Car(4, "Punch", 1, 4);
