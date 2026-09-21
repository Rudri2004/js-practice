// ======================================================================
// SECTION 15 — RETRY LOGIC
// ======================================================================


// ======================================================================
// TASK 45
// ======================================================================

// TASKS:
// Create fetchWithRetry(url, retries).
// 1. Attempt the request.
// 2. If it fails, retry automatically.
// 3. Wait 1 second before retrying.
// 4. Continue until retry count is exhausted.
// 5. Throw the final error if all attempts fail.

function waitOneSecond() {
  return new Promise(resolve => {
    setTimeout(resolve, 1000);
  });
}

async function fetchWithRetry(url, retries) {
  let lastError;

  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
      }

      return await response.json();

    } catch (error) {
      lastError = error;

      if (attempt < retries) {
        console.log(
          `Request failed. Retrying... Attempt ${attempt + 2}`
        );

        await waitOneSecond();
      }
    }
  }

  throw lastError;
}

fetchWithRetry(
  'https://jsonplaceholder.typicode.com/users',
  3
)
  .then(data => console.log("Final Data:", data))
  .catch(error => console.error("Final Error:", error.message));


// ======================================================================
// TASK 46
// ======================================================================

// DATA:

const url46 = 'https://jsonplaceholder.typicode.com/users';

// TASKS:
// 1. Create a reusable API request function.
// 2. Add retry support.
// 3. Add timeout support.
// 4. Check response.ok.
// 5. Parse JSON.
// 6. Return the final data.

async function apiRequest(url, retries = 3, timeout = 3000) {
  let lastError;

  for (let attempt = 0; attempt <= retries; attempt++) {
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
        lastError = new Error(
          `Request timed out after ${timeout} ms`
        );
      } else {
        lastError = error;
      }

      if (attempt < retries) {
        console.log(
          `Request failed. Retrying... Attempt ${attempt + 2}`
        );

        await waitOneSecond();
      }

    } finally {
      clearTimeout(timer);
    }
  }

  throw lastError;
}

apiRequest(url46, 3, 3000)
  .then(data => {
    console.log("Final API Data:", data);
  })
  .catch(error => {
    console.error("Final API Error:", error.message);
  });