console.log("Hello World day 3");

// parameter
function greet(name = "hari", age = "18"){
  console.log(`hello ${name} and age is ${age}`);
}

greet()
greet("laxmi")

function listItems(...items){
  return `your total number of student ${items.length} and 
  Student name are : ${items.join(", ")};
  `
}
console.log(listItems());
console.log(listItems("Shishir", "hari", "laxmamn"));


function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
  }
  console.log(sum(1, 2, 3, 4));

// anornomous function
let abc = function (){
  return "Hello Anornomous Function"
}

console.log(abc());

let parametersAnornomous = function (name, age) {
  return `Hello ${name} and ${age}`
}

console.log(parametersAnornomous("RKD", 23));

// arrow function

let Arrows = () => "hello world from arrows"
console.log(Arrows());

let Arrow = () => { 
  return "hello world from arrow"
}

console.log(Arrow());

let ArrowParameter = (a,b) => a+b;
console.log(ArrowParameter(10,30));

let ArrowParameters = (a,b) =>{
   console.log(a+b);
   
};
ArrowParameters(10,30);
// Scope -> 2types of scope -> global scope and Function Scope and Block scope
let c = 20
let ArrowScope = (a,b) => {
  console.log(a+b);
  let c = 10;
  console.log(c);
};

ArrowScope(10,30);
console.log(c);

// hoisting -> print mathi garna tehi varible lai tala declare garna
// function , var 
console.log(e);
var e;
// console.log(f);
// let f;

abd()
function abd(){
  console.log("hello Hositing");
}
abd()

// Math Object Methods
console.log(Math.min(7,4,5,6));
console.log(Math.max(7,8,4,5,6));
console.log(Math.pow(2,6));
console.log(Math.round(4.6));
console.log(Math.cbrt(125));
console.log(Math.sqrt(25));
console.log(Math.random());
















