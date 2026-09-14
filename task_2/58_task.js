
console.log('A');

setTimeout(() => {
  console.log('B');
}, 0);

Promise.resolve().then(() => {
  console.log('C');
});

console.log('D');


// 1. Predict the exact output order.

//output:
// A
// D
// C
// B
// 2. Explain why the output occurs in that order.

//output:
//setTimeout() schedules its callback as a task, even with a delay of 0.

// 3. Identify which callback runs first and why.

//output
//The Promise callback C runs first because It is a lil task