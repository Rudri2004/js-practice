// ======================================================================
// SECTION 19 — TOKEN STORAGE
// ======================================================================


// ======================================================================
// TASK 55
// ======================================================================

// TASKS:
// 1. Login using the DummyJSON authentication API.
// 2. Extract the access token.
// 3. Store the token in localStorage.
// 4. Retrieve the token from localStorage.
// 5. Use the retrieved token in another API request.
// 6. Remove the token from localStorage.
// 7. Verify that the token no longer exists.

const loginUrl55 = "https://dummyjson.com/auth/login";

const loginData55 = {
  username: "emilys",
  password: "emilyspass"
};

async function task55() {
  try {
    const loginResponse = await fetch(loginUrl55, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(loginData55)
    });

    const loginResult = await loginResponse.json();

    if (!loginResponse.ok) {
      throw new Error(
        loginResult.message || "Login failed"
      );
    }

    const token = loginResult.accessToken;

    localStorage.setItem("accessToken", token);

    console.log("Token stored in localStorage.");

    const storedToken = localStorage.getItem("accessToken");

    console.log(
  "Token exists:",
      Boolean(storedToken)
    );

    const userResponse = await fetch(
      "https://dummyjson.com/auth/me",
      {
        headers: {
          Authorization: `Bearer ${storedToken}`
        }
      }
    );

    const user = await userResponse.json();

    if (!userResponse.ok) {
      throw new Error(
        user.message || "User request failed"
      );
    }

    console.log("User:", {
      id: user.id,
      username: user.username,
      email: user.email
    });

    localStorage.removeItem("accessToken");

    console.log(
      "Token after logout:",
      localStorage.getItem("accessToken")
    );

  } catch (error) {
    console.error("Error:", error.message);
  }
}

task55();


// ======================================================================
// TASK 56
// ======================================================================

// TASKS:
//
// Create these functions:
//
// login()
// getToken()
// getCurrentUser()
// logout()
//
// Requirements:
// 1. login() should authenticate the user.
// 2. getToken() should retrieve the stored token.
// 3. getCurrentUser() should use the token.
// 4. logout() should remove the token.
// 5. Handle missing-token scenarios.

const loginUrl56 = "https://dummyjson.com/auth/login";
const userUrl56 = "https://dummyjson.com/auth/me";

const loginData56 = {
  username: "emilys",
  password: "emilyspass"
};

async function login56() {
  const response = await fetch(loginUrl56, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(loginData56)
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Login failed");
  }

  localStorage.setItem(
    "accessToken",
    data.accessToken
  );

  return data.accessToken;
}

function getToken56() {
  const token = localStorage.getItem("accessToken");

  if (!token) {
    throw new Error("No authentication token found");
  }

  return token;
}

async function getCurrentUser56() {
  const token = getToken56();

  const response = await fetch(userUrl56, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.message || "Unauthorized request"
    );
  }

  return data;
}

function logout56() {
  localStorage.removeItem("accessToken");

  console.log("User logged out.");
}

async function task56() {
  try {
    await login56();

    console.log("Login successful.");

    const user = await getCurrentUser56();

    console.log("Current User:", {
      id: user.id,
      username: user.username,
      email: user.email
    });

    logout56();

    try {
      getToken56();
    } catch (error) {
      console.log(
        "After logout:",
        error.message
      );
    }

  } catch (error) {
    console.error("Error:", error.message);
  }
}

task56();