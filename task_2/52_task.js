


const user = {
  name: 'John',
  age: 0
};

const age = user.age || 18;

console.log(age);

// 1. Predict the output.

// Output:
// 18


// 2. Explain why the result may not be what the developer expects.

// Problem:
// The || operator checks whether true or false 
// The value 0 is falsy in JavaScript.
// But age 0 is a valid value, so the developer may expect the output to be 0 instead of 18.


// 3. Correct the code so that age 0 remains valid.

const correctAge = user.age ?? 18;

console.log(correctAge);
