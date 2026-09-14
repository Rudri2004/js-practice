const numbers = [10, 20, 30];

// Original code
const total = numbers.reduce((sum, number) => {
    sum + number;
}, 0);

console.log(total);

// 1. Predict the output.

// Output:
//undefined


// 2. Identify the issue.

// Problem:
// The callback uses {}
// sum + number is calculated but not return.
// Therefore, reduce() receives undefined 


// 3. Correct the reduce logic.

const total2 = numbers.reduce((sum, number) => {
    return sum + number;
}, 0);

console.log(total2);



// 4. Explain the role of the return value inside reduce.

// reduce() uses the returned value from the callback. 
