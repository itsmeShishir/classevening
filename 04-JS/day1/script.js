// to print a message in the console
console.log("HEllo");
console.log(2 + 23);

// COMMMENTS ->
// this is a single line comment

/* 
this is 
a multi
line comment
*/

// VARIABLES -> binary form ram storage location to store data
// var, let, const
//  initialization and declaration
// initialization
let a;
// declaration
a = 10;
console.log(a);
// let
let b = 10;
b = "string";
console.log(b);
// var
var c = 20;
console.log(c);
c = true;
console.log(c);
// const  -> constant
const d = 10;
console.log(d);
// d = false;
// console.log(d);

// Data types ->
// String,
// Number -> int, float, complex/,
// bool,
// null,
// undefine,
// array,
// object,
// typeof
var c = "shishir";
console.log(typeof c); //string
c = 10;
console.log(typeof c); //number
c = 10.5;
console.log(typeof c); //number
c = true;
console.log(typeof c); //bool
c = [1, 2, 3, 4, "hello", true];
console.log(typeof c); //object
c = null;
console.log(typeof c); // object
let g;
console.log(typeof g); // undefine
g = {
  1: "hari",
};
console.log(typeof g); //object

// operators and operands -> *,+,-, /
// number 5+5 = 5 operands + is operators
// Arthmentic operators -> +, -, /,*, % -> it provides the reminder, ** -> power
console.log(5 + 3);
console.log(5 - 3);
console.log(5 * 3);
console.log(5 / 3);
console.log(5 % 3);
console.log(5 ** 3);

// assignment operators , =, +=, -=, *=
let e = 10;
e += 1;
console.log(e);
e -= 1;
console.log(e);

// logical operators //bool  -> &&, ||, !
//&& -> AND
console.log(true && true);
console.log(false && true);
console.log(true && false);
console.log(false && false);

//|| -> OR -> both are false then it is false
console.log(true || true); // true
console.log(false || true); // true
console.log(true || false); // true
console.log(false || false); // false
// ! -> NOT if statement is true output = flase else viceversa
console.log(!true); //false
console.log(!false); // true

// relatinal operators ( >, < , >=, <=, ==, ===, !=)

console.log(5 > 6); //false
console.log(5 < 6); // true
console.log(5 >= 6); // false
console.log(6 <= 6); // true
console.log(6 == "6"); // true
console.log(6 === "6"); // false
console.log(6 != "6"); // false

// ternary operators
let age = 16;
console.log(
  age > 18
    ? "you are elegiable for driving"
    : "you are not elegiable for driving"
);
