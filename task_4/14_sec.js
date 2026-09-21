// ======================================================================
// SECTION 14 — API TIMEOUT
// ======================================================================


// ======================================================================
// TASK 43
// ======================================================================

// DATA:

const url43 = 'https://jsonplaceholder.typicode.com/users';

// TASKS:
// 1. Fetch the API using AbortController.
// 2. Create a timeout of 3 seconds.
// 3. Abort the request if it exceeds 3 seconds.
// 4. Handle the aborted request.
// 5. Print a suitable timeout message.

async function task43() {
 const controller = new AbortController();
 const timeout = setTimeout(() => {
    controller.abort();
  }, 3000);

  try {
    const response = await fetch(url43, {
      signal: controller.signal
    });

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const data = await response.json();

    console.log("Data:", data);

  } catch (error) {
    if (error.name === "AbortError") {
      console.error("Request timed out after 3 seconds.");
    } else {
      console.error("Error:", error.message);
    }

  } finally {
    clearTimeout(timeout);
  }
}

task43();


// ======================================================================
// TASK 44
// ======================================================================

// TASKS:
// Create fetchWithTimeout(url, timeout).
// 1. Accept URL and timeout.
// 2. Create AbortController.
// 3. Start fetch.
// 4. Start timeout using setTimeout().
// 5. Abort when timeout expires.
// 6. Clear timeout when request finishes.
// 7. Handle timeout errors.
// 8. Return parsed JSON when successful.

async function fetchWithTimeout(url, timeout) {
  const controller = new AbortController();

  const timer = setTimeout(() => {
    controller.abort();
  }, timeout);

  try {
    const response = await fetch(url, {
      signal: controller.signal
    });

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const data = await response.json();

    return data;

  } catch (error) {
    if (error.name === "AbortError") {
      throw new Error(`Request timed out after ${timeout} ms`);
    }

    throw error;

  } finally {
    clearTimeout(timer);
  }
}

fetchWithTimeout(
  'https://jsonplaceholder.typicode.com/users',
  3000
)
  .then(data => console.log("Data:", data))
  .catch(error => console.error("Error:", error.message));