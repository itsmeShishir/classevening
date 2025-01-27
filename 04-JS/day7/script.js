// Es6 -> arrow function , default parameter, 
// spread operator, destructuring, let and const, template literalm, map

// arrow function
let arrows = ()=> { return "hello world from arrows"};
console.log(arrows());

// default parameter and template literals
let hello = ( age, names = "hari") => `hello ${names} and age is ${age}`;
console.log(hello( 22));
console.log((hello( 22, "shyam")));

// destructuring array
let arr = [1,2,3,4];
let [a,b,c, d] = arr;
console.log(a);
console.log(b);
console.log(c);
console.log(d);
// console.log(e);
// destructuring object
let obj = {
  name: "hari",
  age: 22
}

let {name, age} = obj;
console.log(name);
console.log(age);

// let and const-> block scope

// spread operator (...)
let arr1 = [1,2,3,4];
let arr2 = [5,6,7,8];
let arr3 = [...arr1, ...arr2];
console.log(arr3);


// constructor -> inheritance

// map -> key value pair
let myMap = new Map()
// have add .set , .get , .has , .delete
myMap.set("name", "laxman")
myMap.set("age", "50")

// console.log(myMap.get("name"));
// console.log(myMap.get("age"));

// // .delete
// myMap.delete("name");
// console.log(myMap);

// // .has
// console.log(myMap.has("name"));
// //.clear
// myMap.clear();
// console.log(myMap);


// map interation -> foreach

myMap.forEach((value, key) => {
  console.log(key, value);
})

// import and export

// events -> addEventListener, removeEventListener, dispatchEvent