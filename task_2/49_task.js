
const numbers = [1, 2, 3, 4, 5];

// const result = numbers.map((number) => {
//   number * 2;
// });

// console.log(result);

// 1. Predict the output.

// Output:
// [undefined, undefined, undefined, undefined, undefined]

// 2. Identify the problem.
   //output:
   //with arrow function retutn keyword used in side {}

// 3. Fix the code.

const result = numbers.map((number) => {
 return  number * 2;
 
});
console.log(result);

// 4. Explain why the original code behaves that way.

//output:
// map() creates a new array by using the value
// number * 2 is calculated, but it is NOT returned.
//  after correction return keyword use 
// Now each calculated value is returned to map().

