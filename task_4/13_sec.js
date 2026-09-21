// ======================================================================
// SECTION 13 — TIMERS, SETTIMEOUT & SETINTERVAL
// ======================================================================


// ======================================================================
// TASK 39
// ======================================================================

// TASKS:
// 1. Print "Start".
// 2. Use setTimeout() to print "API request started" after 2 seconds.
// 3. Print "End".
// 4. Observe the output order.

console.log("Start");

setTimeout(() => {
  console.log("API request started");
}, 2000);

console.log("End");


// ======================================================================
// TASK 40
// ======================================================================

// TASKS:
// Create a countdown:
// 5
// 4
// 3
// 2
// 1
// "Completed"
// Use setInterval().

let count = 5;

const countdown = setInterval(() => {
  console.log(count);

  count--;

  if (count === 0) {
clearInterval(countdown);
    console.log("Completed");
  }
}, 1000);


// ======================================================================
// TASK 41
// ======================================================================

// TASKS:
// 1. Use setInterval().
// 2. Run an operation every 3 seconds.
// 3. Print the current attempt number.
// 4. Stop after 5 attempts.
// 5. Use clearInterval().

let attempt = 0;

const polling = setInterval(() => {
  attempt++;

  console.log("Attempt:", attempt);

  if (attempt === 5) {
    clearInterval(polling);
    console.log("Polling stopped");
  }
}, 3000);


// ======================================================================
// TASK 42
// ======================================================================

// TASKS:
// Create fetchWithDelay(url, delay).
// 1. Wait for the specified delay.
// 2. Then call fetch().
// 3. Return the API response.
// 4. Use async/await.

async function fetchWithDelay(url, delay) {
  await new Promise(resolve => {
    setTimeout(resolve, delay);
  });

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`HTTP Error: ${response.status}`);
  }

  return response;
}

fetchWithDelay(
  'https://jsonplaceholder.typicode.com/users/1',
  2000
)
  .then(response => response.json())
  .then(data => console.log("API Response:", data))
  .catch(error => console.error("Error:", error.message));