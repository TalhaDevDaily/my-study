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

// .join() merges the sefulting array into single string with commas in between.
let joinSeparation = myArray
  .filter((item) => {
    return item === "three";
  })
  .join(" - ");

console.log(joinSeparation);
// console.log(myArray[1]);
*/

/*
// var
var; Function scoped (ignores block {} scope, but respects function boundaries). Can be reassigned. Can be redeclared in the same scope which can cause accidental overwrite.
Hoisted and initialized with undefined. Accessing before declaration fives undefined; no error, but risky. Released in ECMAScript 1

// let
let: Block Scoped. Can be readdigned. Can't be redeclared in the same scope. Hoisted but in Temporal Dead Zone until declared. Accessing but declaration throws RererenceError.
Released in ES6.

// const
const: Block scoped. Can't be readdigned. Can't be redeclared in the same scope. Hoisted but in Temporal Dead Zone until declared. Must be initialized when declared.
Objects/ arrays assigned to const can still be mutated. Released in ES6

// primitive and non-primitive
primitive means the value is immutable and stored directly
non-primitive values(Objects) are stored by reference and are mutable by default
Arrays and Functions are actually specialized Objects in JS

// Number of Data Types
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

// Function
Function is a block of code that is set to perform specific tasks. There are 7 types of function. They are:
1. Named Function
- Definition: A function with an explicit name, declared using the function keyword.
- Key trait: Hoisted — can be called before it’s defined

2. Function Expression
- Definition: A function assigned to a variable or constant. Can be named or anonymous.
- Key trait: Not hoisted — must be defined before use

3. Arrow Function
- Definition: A shorter syntax for writing functions, introduced in ES6.
- Key trait: Lexically binds this (doesn’t create its own this). Cannot be used as a constructor.

4. Anonymous Function
- Definition: A function without a name, often used as a value or passed as an argument.
- Key trait: Common in callbacks and IIFEs.

5. Call back Function
- Definition: A function passed as an argument to another function, to be executed later.
- Key trait: Enables asynchronous and event‑driven programming.

6. Constructor Function
- Definition: A function used with new to create object instances.
- Key trait: By convention, starts with a capital letter.

7. IIFE (Immediately Invoked Funciton Expression)
- Definition: A function that runs immediately after being defined.
- Key trait: Creates a private scope, avoids polluting the global namespace.

🔹 Synchronous (⏳ Wait-your-turn style)
- Definition: Tasks run one after another.
- Rule: Each task must finish before the next starts.
- Effect: Simple and predictable, but can be slow if one task takes a long time.
- Analogy: Standing in a single checkout line — you wait until the person ahead is done.
console.log("Task 1");
console.log("Task 2"); // Runs only after Task 1 finishes

🔹 Asynchronous (🚀 Don’t-wait style)
- Definition: Tasks can start and then let others run without waiting for them to finish.
- Rule: Long tasks don’t block the rest of the program.
- Effect: Faster and more responsive, but needs extra handling (callbacks, promises, async/await).
- Analogy: Ordering food at a restaurant — you place your order, then chat or check your phone while it’s being prepared.
console.log("Task 1");

setTimeout(() => {
  console.log("Task 2 (done later)");
}, 2000);

console.log("Task 3"); // Runs immediately after Task 1

// addEventListener
addEventListener: a built-in method in JavaScript used to attach an even handler to an element. 
Lets you listen for specific events (like 'click', 'keydown', 'mouseover', etc.). 
Syntax: element.addEventListener('eventType', callBackFunction, useCaptureOptional)
Callback function runs every time the specified even happens on that element.

// this
'this': in JavaScript is a spacial keyword that refers to be object(and it's content) that is currently executing the code. 
Its value depends on how and where the function is called (runtime binding), not where it's written
this, inside a constructor function, 'this' refers to the 'new' object being created
when you call a funciton with the new keyword, JS does 4 things: 
1. creates and empty object {}
2. sets the prototype of that object to the constructor's prototype
3. binds 'this' inside the constructor to that new object
4. returns the new object (unless you return your own object manually)
calls the global object

// method
method: a method is simply a function that is property of an object. when a function is stored inside an object and is meant to be called on

// array method
array method: a built-in function that you can call on an array to do something useful with 
its elements - like adding, removing transforming, or searching them - without having to manually loop through the array yourself

includes() - an array (and string) method used to check if a certain value exists. Returns a Boolean (true/false)

sort() - method used to sort elements of an array in place. Sorts elements as strings in lexicographic order,
not alphabetical lexicographic = (alphabet + numbers + symbol) as strings

split() - a string method that divides a string into an array of substrings. It does not work on arrays; it's for strings only
syntax: string.split(separator, limit)
separator - fefines wher split the string. If "" (empty string), splits between every character. 
If omitted, returns the whole string in an array.
limit - optional. maximum number of splits to include in the array.
// Example 1: Split by space
const sentence = "JavaScript is fun";
const words = sentence.split(" ");
console.log(words); // ["JavaScript", "is", "fun"]

// Example 2: Split into characters
const chars = sentence.split("");
console.log(chars); // ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t", " ", "i", "s", " ", "f", "u", "n"]

// Example 3: Limit the number of splits
const limited = sentence.split(" ", 2);
console.log(limited); // ["JavaScript", "is"]

// join() - an array method that joins all elements into a single string.
syntax: array.join(separatorOptional)
Default separator is a comma (","), if none is given.

reduce() - reduce the elements of an array to a single value. 
Executes a reducer callback function on each element of the array, resulting in a single output value.
Syntax: array.reduce(callback, initialValueOptional)
callback - function(accumulator, currentValue, currentIndex, array)
initialValue - starting value for the accumulator (optional but recommended)

splice() - arr.splice is a swiss army knife for arrays. It ca do everything: insert, remove and replace elements

slice() - it returns new array copying  to it all items from index start to end (not including end). 
Both start and end can be negative, in that case position from array end is assumed.

find() - searches for the first element that matches a condition in an array.
Used when you need one matching value

filter() - selects all elements in an array that match a condition. 
Used when you want every match 

map() - transforms every element in an array to modify and reshape them without changing the original array

Alright Abu — let’s break these three down clearly and with examples so they stick.  

---

## 1️⃣ **Nested Conditions**
**Definition:**  
A **nested condition** is when you put one conditional statement (like `if`, `else if`, or `else`) **inside another**.  
It’s used when you need to check a second condition **only if** the first one is true.  

**Example (JavaScript):**
```javascript
let score = 85;

if (score >= 50) {
  console.log("You passed!");
  
  if (score >= 80) {
    console.log("You got an A!");
  } else {
    console.log("You passed, but not with an A.");
  }
} else {
  console.log("You failed.");
}
```
Here, the second `if` only runs if the first `if` is true.

---

## 2️⃣ **Factor Function** (I think you meant *factor function*, not “fataro”)
**Definition:**  
A **factor function** is a function that finds all the numbers that divide another number evenly (without a remainder).  
It’s common in math-related programming tasks.

**Example (JavaScript):**
```javascript
function factorsOf(num) {
  let factors = [];
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      factors.push(i);
    }
  }
  return factors;
}

console.log(factorsOf(12)); // [1, 2, 3, 4, 6, 12]
```
This returns all factors of `12`.

---

## 3️⃣ **Local Storage**
**Definition:**  
In JavaScript, **`localStorage`** is a browser feature that stores **key–value pairs** on the user’s computer.  
- Data **persists** even after closing the browser.  
- It’s **domain-specific** (only accessible by pages from the same origin).  
- Limit is usually around **5MB**.  

**Basic Operations:**
```javascript
// Save data
localStorage.setItem("username", "Abu");

// Get data
let user = localStorage.getItem("username");
console.log(user); // Abu

// Remove one item
localStorage.removeItem("username");

// Clear all
localStorage.clear();
```
Useful for saving **user preferences, theme settings, or form data** without a server.

---

💡 **Pro tip for you, Abu:**  
If you combine **localStorage** with your **club sign-up form**, you can auto-save partially filled data so students don’t lose progress if they refresh the page.

---

*/

const friends = ["Michael", "Steven", "Peter", "Bob"];

friends.splice(1, 1, "Matilda", "Jonas");

console.log(friends);

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

const sentence = "Hello World, JavaScript is fun";

let justSplitted = sentence.split(" ");

let joinedAgain = justSplitted.join(" ");
console.log(joinedAgain);

joinedAgain = justSplitted.join();
console.log(joinedAgain);

console.log(justSplitted);

console.log(justSplitted.slice(1, 4));
console.log(justSplitted.slice(-3));

const obj = {
  a: 1,
  b: 2,
  c: 3,
};

const key = "a";
console.log(obj.key);
console.log(obj[key]);

let sorted = friends.sort();
console.log(sorted);

let numbers = [1, 4, 5, 6, 8];
