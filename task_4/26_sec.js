// ======================================================================
// SECTION 26 — FINAL AUTHENTICATED API CHALLENGE
// ======================================================================


// ======================================================================
// TASK 76
// ======================================================================

// DATA:
//
// const loginUrl = 'https://dummyjson.com/auth/login';
//
// const loginData = {
//   username: 'emilys',
//   password: 'emilyspass'
// };

// TASKS:
//
// Create a complete authentication flow.
//
// 1. Login using POST.
// 2. Extract the access token.
// 3. Store the token.
// 4. Fetch the authenticated user.
// 5. Transform the user response into:
//    {
//      id,
//      username,
//      fullName,
//      email,
//      image
//    }
// 6. Handle login failure.
// 7. Handle unauthorized requests.
// 8. Handle network errors.
// 9. Do not expose the token in console output.

const loginUrl =
  "https://dummyjson.com/auth/login";

const loginData = {
  username: "emilys",
  password: "emilyspass"
};

let token = null;

async function task76() {
  try {

    const loginResponse = await fetch(
      loginUrl,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(loginData)
      }
    );

    const loginResult =
      await loginResponse.json();

    if (!loginResponse.ok) {
      throw new Error(
        loginResult.message ||
        "Login failed"
      );
    }

    token = loginResult.accessToken;

    if (!token) {
      throw new Error(
        "Authentication token not received"
      );
    }

    const userResponse = await fetch(
      "https://dummyjson.com/auth/me",
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    const user = await userResponse.json();

    if (!userResponse.ok) {
      throw new Error(
        user.message ||
        "Unauthorized request"
      );
    }

    const result = {
      id: user.id,
      username: user.username,
      fullName:
        `${user.firstName} ${user.lastName}`,
      email: user.email,
      image: user.image
    };

    console.log(
      "Authenticated User:",
      result
    );

  } catch (error) {

    if (error instanceof TypeError) {
      console.error(
        "Network error. Please check your connection."
      );
    } else {
      console.error(
        "Authentication Error:",
        error.message
      );
    }

  } finally {
    token = null;
  }
}

task76();