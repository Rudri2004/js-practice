
//1. What is the difference between `var`, `let`, and `const`?
//=>var : it has functional scope and redeclaration allowed and reassignment allowed
//=>let : it has block scope and redeclaration not allowed and reassignment allowed
//=>const : it has block scope and redeclaration not allowed also reassigment not allowed


// 2.What is the difference between `==` and `===` in JavaScript? Give an example where they produce different results.
//== (Loose equality) : It compares values after converting their types if necessary.
// === ( Strict equality): It compares both value and data type. It does not perform type conversion.
//example: console.log(5 == "5");//op:true
//console.log(5 === "5");//op:false


//3. What is the difference between an array and an object in JavaScript?
//Array: 
// An array stores multiple values in an ordered list. It uses numeric indexes starting from 0.
// Example:
//const fruits = ["Apple", "Banana", "Mango"];
// console.log(fruits[0]); // op: apple
// console.log(fruits.length); //op: 3

// Object
// An object stores data using key-value pairs.
//example:
//const user = {
//     name: "Rudri",
//     age: 22,
//     city: "Bhavnagar"
// };
// console.log(user.name); // Rudri
// console.log(user.age);  // 22

// 4. What is the difference between `map()`, `filter()`, and `forEach()`? Write one simple example for each.
//map: It Transforms every item and return new array
//filter: It Selects matching items and return new array
//forEach: It Performs an action for each item and return undefind

//example for forEach:
// const fruits = ["Apple", "Banana", "Mango"];

// fruits.forEach((fruit) => {
//     console.log(fruit);
// });

//5. What is the difference between synchronous and asynchronous JavaScript? Explain what `setTimeout()` demonstrates about asynchronous execution.
//Synchronous JavaScript: Synchronous code runs one statement at a time, in order. The next statement waits until the current statement finishes.

//Asynchronous JavaScript ; Asynchronous code allows JavaScript to start a task and continue executing other code while waiting.
// Common asynchronous examples:
//setTimeout(), fetch(), Promises,  async/await

//6. Debug this code. It should print the user's name.
//```js
async function getUser() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
  const user = await response.json();

  console.log(user.name);
}

getUser();
