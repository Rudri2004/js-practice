// ======================================================================
// SECTION 10 — PROMISE FUNDAMENTALS
// ======================================================================


// ======================================================================
// TASK 28
// ======================================================================

// TASKS:
// 1. Create a Promise that resolves after 2 seconds.
// 2. Resolve with "Data fetched successfully".
// 3. Consume it using .then().
// 4. Handle errors using .catch().
// 5. Add .finally().

const promise28 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Data fetched successfully");
  }, 2000);
});

promise28
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.error("Error:", error.message);
  })
  .finally(() => {
    console.log("Promise completed");
  });


// ======================================================================
// TASK 29
// ======================================================================

// TASKS:
// Create a function delay(ms).
// The function should return a Promise that resolves after the
// specified number of milliseconds.
// Test it with:
// 1000
// 2000
// 3000

function delay(ms) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(`Completed after ${ms} ms`);
    }, ms);
  });
}

delay(1000).then(result => console.log(result));
delay(2000).then(result => console.log(result));
delay(3000).then(result => console.log(result));


// ======================================================================
// TASK 30
// ======================================================================

// TASKS:
// 1. Create operation1(), operation2(), operation3().
// 2. Each should resolve after a different delay.
// 3. Execute them sequentially using Promise chaining.

function operation1() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("Operation 1 completed");
    }, 1000);
  });
}

function operation2() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("Operation 2 completed");
    }, 2000);
  });
}

function operation3() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("Operation 3 completed");
    }, 3000);
  });
}

operation1()
  .then(result => {
    console.log(result);
    return operation2();
  })
  .then(result => {
    console.log(result);
    return operation3();
  })
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.error("Error:", error.message);
  });


// ======================================================================
// TASK 31
// ======================================================================

// TASKS:
// 1. Create three Promises.
// 2. Run them using Promise.all().
// 3. Print all results.
// 4. Make one Promise reject.
// 5. Observe how Promise.all() behaves.

const promise31_1 = Promise.resolve("Promise 1 resolved");
const promise31_2 = Promise.resolve("Promise 2 resolved");
const promise31_3 = Promise.resolve("Promise 3 resolved");

Promise.all([
  promise31_1,
  promise31_2,
  promise31_3
])
  .then(results => {
    console.log("All Results:", results);
  })
  .catch(error => {
    console.error("Error:", error.message);
  });

const rejectedPromise31 = Promise.reject(
  new Error("Promise 2 failed")
);

Promise.all([
  Promise.resolve("Promise 1 resolved"),
  rejectedPromise31,
  Promise.resolve("Promise 3 resolved")
])
  .then(results => {
    console.log("Results:", results);
  })
  .catch(error => {
    console.error("Promise.all Error:", error.message);
  });


// ======================================================================
// TASK 32
// ======================================================================

// TASKS:
// 1. Create three asynchronous operations with different completion times.
// 2. Use Promise.race().
// 3. Determine which operation finishes first.

const race1 = new Promise(resolve => {
  setTimeout(() => {
    resolve("Operation 1 finished");
  }, 3000);
});

const race2 = new Promise(resolve => {
  setTimeout(() => {
    resolve("Operation 2 finished");
  }, 1000);
});

const race3 = new Promise(resolve => {
  setTimeout(() => {
    resolve("Operation 3 finished");
  }, 2000);
});

Promise.race([race1, race2, race3])
  .then(result => {
    console.log("First:", result);
  })
  .catch(error => {
    console.error("Error:", error.message);
  });


// ======================================================================
// TASK 33
// ======================================================================

// TASKS:
// 1. Create several Promises.
// 2. Some should resolve.
// 3. Some should reject.
// 4. Use Promise.allSettled().
// 5. Print the status and value/reason of every Promise.

const promises33 = [
  Promise.resolve("Data 1"),
  Promise.reject(new Error("Data 2 failed")),
  Promise.resolve("Data 3"),
  Promise.reject(new Error("Data 4 failed"))
];

Promise.allSettled(promises33)
  .then(results => {
    results.forEach(result => {
  if (result.status === "fulfilled") {
        console.log("Status:", result.status);
        console.log("Value:", result.value);
      } else {
        console.log("Status:", result.status);
        console.log("Reason:", result.reason.message);
      }
    });
  });