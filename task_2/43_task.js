// Create a function called createCounter().
//
// 1. Counter starts at 0.
// 2. Provide increment().
// 3. Provide decrement().
// 4. Provide getValue().
// 5. Provide reset().
// 6. Counter value should remain private.
// 7. Create two counters and verify that they have separate values.


function createCounter() {
  
  let count = 0;

  return {
    increment() {
      count++;
    },

    decrement() {
      count--;
    },

    getValue() {
      return count;
    },

    reset() {
      count = 0;
    }
  };
}

// Create two separate counters
const counter1 = createCounter();
const counter2 = createCounter();

// Counter 1
counter1.increment();
counter1.increment();
counter1.increment();

console.log("Counter 1:", counter1.getValue());

// Counter 2
counter2.increment();

console.log("Counter 2:", counter2.getValue());
counter1.decrement();
console.log("Counter 1 after decrement:", counter1.getValue());
counter2.reset();
console.log("Counter 2 after reset:", counter2.getValue());
console.log("Counter 1 final:", counter1.getValue());
console.log("Counter 2 final:", counter2.getValue());
console.log(counter1.count);
