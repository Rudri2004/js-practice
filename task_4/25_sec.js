// ======================================================================
// SECTION 25 — REUSABLE API CLIENT
// ======================================================================


// ======================================================================
// TASK 73
// ======================================================================

// TASKS:
//
// Create a reusable function:
//
// request(url, options)
//
// Requirements:
// 1. Use fetch().
// 2. Check response.ok.
// 3. Throw an error for unsuccessful responses.
// 4. Parse JSON automatically.
// 5. Return the parsed data.
// 6. Handle errors correctly.

async function request(url, options = {}) {
  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(
        `HTTP Error: ${response.status}`
      );
    }

    const data = await response.json();

    return data;

  } catch (error) {
    throw error;
  }
}

request(
  "https://jsonplaceholder.typicode.com/users/1"
)
  .then(data => {
    console.log("Task 73:", data);
  })
  .catch(error => {
    console.error("Error:", error.message);
  });


// ======================================================================
// TASK 74
// ======================================================================

// TASKS:
//
// Create reusable functions:
//
// apiGet(url)
// apiPost(url, data)
// apiPut(url, data)
// apiPatch(url, data)
// apiDelete(url)
//
// Requirements:
// 1. All functions must use fetch().
// 2. GET should send a GET request.
// 3. POST should send JSON.
// 4. PUT should send JSON.
// 5. PATCH should send JSON.
// 6. DELETE should send a DELETE request.
// 7. Handle HTTP errors consistently.

async function apiRequest(url, options = {}) {
  const response = await fetch(url, options);

  let data = null;

  const contentType =
    response.headers.get("content-type");

  if (
    contentType &&
    contentType.includes("application/json")
  ) {
    data = await response.json();
  }

  if (!response.ok) {
    throw new Error(
      data?.message ||
      `HTTP Error: ${response.status}`
    );
  }

  return data;
}


async function apiGet(url) {
  return apiRequest(url, {
    method: "GET"
  });
}


async function apiPost(url, data) {
  return apiRequest(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
}


async function apiPut(url, data) {
  return apiRequest(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
}


async function apiPatch(url, data) {
  return apiRequest(url, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
}


async function apiDelete(url) {
  return apiRequest(url, {
    method: "DELETE"
  });
}


async function task74() {
  try {
    const user = await apiGet(
      "https://jsonplaceholder.typicode.com/users/1"
    );

    console.log("GET:", user);

    const post = await apiPost(
      "https://jsonplaceholder.typicode.com/posts",
      {
        title: "New Post",
        body: "Hello API",
        userId: 1
      }
    );

    console.log("POST:", post);

    const updatedPost = await apiPut(
      "https://jsonplaceholder.typicode.com/posts/1",
      {
        title: "Updated Post",
        body: "Updated Body",
        userId: 1
      }
    );

    console.log("PUT:", updatedPost);

    const patchedPost = await apiPatch(
      "https://jsonplaceholder.typicode.com/posts/1",
      {
        title: "Patched Post"
      }
    );

    console.log("PATCH:", patchedPost);

    const deletedPost = await apiDelete(
      "https://jsonplaceholder.typicode.com/posts/1"
    );

    console.log("DELETE:", deletedPost);

  } catch (error) {
    console.error("Task 74 Error:", error.message);
  }
}

task74();


// ======================================================================
// TASK 75
// ======================================================================

// TASKS:
//
// Extend the API client from Task 74.
//
// Add support for:
// 1. Custom headers.
// 2. Authorization token.
// 3. Request timeout.
// 4. JSON body.
// 5. FormData body.
// 6. HTTP error handling.
// 7. Network error handling.

