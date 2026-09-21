// ======================================================================
// SECTION 20 — AUTHENTICATION ERROR HANDLING
// ======================================================================


// ======================================================================
// TASK 57
// ======================================================================

// DATA:

// const loginData = {
//   username: 'wrong-user',
//   password: 'wrong-password'
// };

// TASKS:
// 1. Attempt login.
// 2. Check response.ok.
// 3. Throw an appropriate error.
// 4. Catch the error.
// 5. Print a user-friendly message.
// 6. Do not expose sensitive login information.

const loginData57 = {
  username: "wrong-user",
  password: "wrong-password"
};

async function task57() {
  try {
    const response = await fetch(
      "https://dummyjson.com/auth/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(loginData57)
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.message || "Login failed"
      );
    }

    console.log("Login successful.");

  } catch (error) {
    console.error(
      "Login failed. Please check your username and password."
    );
  }
}


// ======================================================================
// TASK 58
// ======================================================================

// TASKS:
//
// Simulate the following authentication states:
//
// 1. No token.
// 2. Valid token.
// 3. Invalid token.
// 4. Expired/unauthorized token response.
//
// For each state, determine what your application should do.

async function handleAuthenticationState(state, token = null) {

  if (state === "no-token") {
    console.log(
      "No token: Redirect user to login."
    );
    return;
  }

  if (state === "valid-token") {
    console.log(
      "Valid token: Allow access to protected resource."
    );
    return;
  }

  if (state === "invalid-token") {
    console.log(
      "Invalid token: Remove token and redirect to login."
    );
    return;
  }

  if (state === "expired-token") {
    console.log(
      "Expired/unauthorized token: Remove token and ask user to login again."
    );
    return;
  }

  console.log("Unknown authentication state.");
}

handleAuthenticationState("no-token");

handleAuthenticationState(
  "valid-token",
  "valid-token-example"
);

handleAuthenticationState(
  "invalid-token",
  "invalid-token-example"
);

handleAuthenticationState(
  "expired-token",
  "expired-token-example"
);