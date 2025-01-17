console.log("Hello world");
// Conditinos, loops, Function
// control flow
// if, else,else if,  switch,
// loops ->
// for, while, do while
// function -> user define function , inbuild function

// control flow ->
// Conditions -> check return true false
// if(condition){body}
let age = 22;
if (age >= 10 && age <= 19) {
  console.log("Your are Teneager");
} else if (age >= 20 && age <= 50) {
  console.log("you are between 19 and 50");
} else if (age >= 51 && age <= 110) {
  console.log("you are old");
} else if (age >= 110) {
  console.log("too old");
} else {
  console.log("you are not tenagers");
}

let day = "Friday";
switch (day) {
  case "sunday":
    console.log("today is Sunday");
    break;
  case "monday":
    console.log("Today is Monday");
    break;
  case "Wednesday":
    console.log("Today is Wednesday");
    break;
  case "Friday":
    console.log("Today is Friday");
    break;
  case "Saturday":
    console.log("Today is Saturday");
    break;
  default:
    console.log("none of the above");
}
// loops -> for , while , do while , continue and break
// for(initialization, condition , inc/dec){body}
// print number from the 0 to 20
for (let i = 0; i <= 20; i++) {
  //   break ;
  if (i == 10) {
    continue;
    // break;
  }
  console.log(i);
}
// 1 30 -> ;list of all the odd number
for (let i = 0; i <= 30; i++) {
  //   break ;
  if (i % 2 == 0) {
    continue;
    // break;
  }
  console.log(i);
}
// while -> while(conditon){inc/dec, print}
let i = 0;

while (i <= 10) {
  console.log(i);
  i++;
}
// do {body} while {condition}
do {
  console.log(i);
  i++;
} while (i <= 10); //false

// function -> 2 types of function -> user define function and inbuild function
// inbuild function -> log, print
//user define function -> function Camelcase(){body}
function Abc() {
  console.log("Shishir");
}
Abc();
Abc();
// Function parameter and agrgument
function YouDetails(name, age) {
  console.log(`${name} and age is ${age}`);
}
YouDetails("Shishir", 27);
// function type and parameter types 
// anonomous function
// arrow function

