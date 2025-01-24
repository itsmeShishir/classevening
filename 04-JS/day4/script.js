// Array, Object, OOp, 
// Array -> 
let arr = [1,2,3,4,5] //object -> any type of value string, int 
console.log(arr);

// old approach
let oldarr = new Array(1,2,3,4,5)
console.log(oldarr);

// Single item get 
console.log(arr[4]);
// length
console.log(arr.length);
// Array Methods
// push -> add item in last, 
// pop-> remove item from last , 
// unshift-> add item in first, 
// shift -> remove item from first
arr.push(6);
console.log(arr.length);
arr.pop();
console.log(arr.length);
arr.unshift(0)
console.log(arr);
arr.shift();
console.log(arr);
arr.splice(1,1,"one")
console.log(arr);

// Array itterration
// forEach, map, Filter
arr.forEach((data)=> {
  console.log(data);
})
arr.map((data)=> {
  console.log(data);
})
let abc = arr.filter((data)=>{
  console.log(data);
})
let abcd = arr.reducer((a, arr) =>
  {
  return a + arr.length , 0
  }
)














