let myArray = ["one", "two", "three"];

myArray.push("three");
myArray.push("three");
myArray.push("three");
myArray.pop();

myArray.unshift("two");
myArray.shift();

console.log(myArray);

// myArray.map((item) => {
//   console.log(item);
// });

let findItem = myArray.find((item) => {
  return item === "three";
});

console.log(findItem);

const filterItem = myArray.filter((item) => {
  let filtered = item === "three";
  return filtered;
});
console.log(filterItem);

let experimental = filterItem.map((items) => {
  return items;
});

console.log(experimental);

// .join merges the sefulting array into single string with commas in between.
let joinSeparation = myArray
  .filter((item) => {
    return item === "three";
  })
  .join(" - ");

console.log(joinSeparation);
// console.log(myArray[1]);

/*
var; Function scoped (ignores block {} scope, but respects function boundaries). Can be reassigned. Can be redeclared in the same scope which can cause accidental overwrite.
Hoisted and initialized with undefined. Accessing before declaration fives undefined; no error, but risky. Released in ECMAScript 1

let: Block Scoped. Can be readdigned. Can't be redeclared in the same scope. Hoisted but in Temporal Dead Zone until declared. Accessing but declaration throws RererenceError.
Released in ES6.

const: Block scoped. Can't be readdigned. Can't be redeclared in the same scope. Hoisted but in Temporal Dead Zone until declared. Must be initialized when declared.
Objects/ arrays assigned to const can still be mutated. Released in ES6


primitive means the value is immutable and stored directly
non-primitive values(Objects) are stored by reference
Arrays and Functions are actually specialized Objects in JS

There are 8 Data Types in JavaScript
primitive
1. string
2. number
3. boolean
4. null
5. undefined
6. symbol
7. bigInt
non-primitive
8. Object

Function is a block of code that is set to perform specific tasks. There are 7 types of function. They are:
1. Named Function
2. Function Expression
3. Arrow Function
4. Anonymous Function

addEventListener: a built-in method in JavaScript used to attach an even handler to an element

*/
