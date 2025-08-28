"use strict";
/*
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
*/

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

addEventListener: a built-in method in JavaScript used to attach an even handler to an element. 
Lets you listen for specific events (like 'click', 'keydown', 'mouseover', etc.). 
Syntax: element.addEventListener('eventType', callBackFunction, useCaptureOptional)
Callback function runs every time the specified even happens on that element.

'this': in JavaScript is a spacial keyword that refers to be object(and it's content) that is currently executing the code. 
Its value depends on how and where the function is called (runtime binding), not where it's written
this, inside a constructor function, 'this' refers to the 'new' object being created
when you call a funciton with the new keyword, JS does 4 things: 
1. creates and empty object {}
2. sets the prototype of that object to the constructor's prototype
3. binds 'this' inside the constructor to that new object
4. returns the new object (unless you return your own object manually)

method: a method is simply a function that is property of an object. when a function is stored inside an object and is meant to be called on

array method: a built-in function that you can call on an array to do something useful with 
its elements - like adding, removing transforming, or searching them - without having to manually loop through the array yourself
*/

const friends = ["Michael", "Steven", "Peter"];

console.log(friends.length);
console.log(friends.length - 1);

const firstName = "tamim";
const talha = [firstName, "talha", 2024 - 1998, "student", friends];

console.log(talha[4][2]);
console.log(friends.indexOf("Steven"));
console.log(talha);

// check if a string or a number is present in an array
console.log(friends.includes("Bob"));

console.log(
  friends.includes("Steven")
    ? "You have that friend!"
    : "You do not have that friend"
);
