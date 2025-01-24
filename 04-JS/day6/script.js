class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet(ismale) {
    console.log(ismale);
  }
}

obj1 = new Student("hari", 22);
console.log(obj1);
obj2 = new Student("Shyam", 25);
console.log(obj2);
obj2.greet(true);

// 4 pillars of js
// -> encapsulation -> data hidding in js
//  -> inheritance
// abstraction
// poly

class Students {
  constructor(name, marks) {
    this.name = name;
    let _marks = marks;

    this.getMarks = () => _marks;
    // get
    // set
    this.setMarks = (marks) => (_marks = marks);
  }
}

obj3 = new Students("Harihar", 85);
console.log(obj3.getMarks());
console.log(obj3.setMarks(90));
console.log(obj3.getMarks());

class Student {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    greet(ismale) {
      console.log(ismale);
    }
  }
  
  obj1 = new Student("hari", 22);
  console.log(obj1);
  obj2 = new Student("Shyam", 25);
  console.log(obj2);
  obj2.greet(true);
  
  // 4 pillars of js
  // -> encapsulation -> data hidding in js
  //  -> inheritance
  // abstraction
  // poly
  
  class Students {
    constructor(name, marks) {
      this.name = name;
      let _marks = marks;
      // get
      this.getMarks = () => _marks;
      // set
      this.setMarks = (marks) => (_marks = marks);
    }
  }
  
  obj3 = new Students("Harihar", 85);
  console.log(obj3.getMarks());
  console.log(obj3.setMarks(90));
  console.log(obj3.getMarks());
  
  // Abstraction -> hididng complex details and show essential feature of the object
  class CoffeeMachine{
    makeCoffee(){
      this._boliwater();
      this._brewCoffee();
      this._pourInCup();
      console.log("Coffee is ready");
    }
  
    _boliwater(){
      console.log("water is Boiling...");
    }
    _brewCoffee(){
      console.log("Coffee is brewing..");
    }
    _pourInCup(){
      console.log("Pour in Cup...");
      
    }
  
  }
  
  maccafa = new CoffeeMachine();
  console.log(maccafa.makeCoffee());
  
  // Inheritance
  // parent ko class ko methods and constructor will inherit by child class
  
  class Animal{
    constructor(name){
      this.name = name;
    }
  
    talk(){
      console.log(`${this.name} is talking`);
    }
  }
  
  class Dog extends Animal{
    constructor(name, age) {
      super(name);
      this.age = age;
    }
    talk(){
      console.log(`${this.name} is barking`);
    }
  }
  const dog = new Dog("tommy")
  console.log(dog.talk());
  
  // poliomorphism -> having many forms
  class Animals{
    talk(){
      console.log(`Animal is talking`);
    }
  }
  
  class Dogs extends Animal{
    talk(){
      console.log(`Dog is barking`);
    }
  }
  
  class Cats extends Animal{
    talk(){
      console.log(`Cats is barking`);
    }
  }
  
  cat = new Cats()
  console.log(cat.talk());
  
  dogs = new Dogs()
  console.log(dogs.talk());
  
  
  // Static methods -> static -> methods that belogs to the class itself 
  class StaticMeth{
    static calc(a,b){
      return a+b
    }
  }
  
  console.log(StaticMeth.calc(30,50));
  
  
  