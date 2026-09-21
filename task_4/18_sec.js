// ======================================================================
// SECTION 18 — AUTHENTICATION & TOKEN HANDLING
// ======================================================================


// ======================================================================
// TASK 51 — LOGIN
// ======================================================================

// DATA:



// TASKS:
// 1. Send a POST request to the login endpoint.
// 2. Send loginData as JSON.
// 3. Set the correct Content-Type.
// 4. Convert the response to JSON.
// 5. Check response.ok.
// 6. Extract the authentication token from the response.
// 7. Print the user information returned by the API.
// 8. Do not print the token directly.

const loginUrl51 = "https://dummyjson.com/auth/login";

const loginData51 = {
  username: "emilys",
  password: "emilyspass"
};

async function task51() {
  try {
    const response = await fetch(loginUrl51, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(loginData51)
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || `HTTP Error: ${response.status}`);
    }

    const token = data.accessToken;

    console.log("User Information:");
    console.log({
      id: data.id,
      username: data.username,
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName
    });

    console.log("Authentication successful.");
    console.log("Token received:", Boolean(token));

  } catch (error) {
    console.error("Login Error:", error.message);
  }
}

task51();


// ======================================================================
// TASK 52 — TOKEN-BASED USER REQUEST
// ======================================================================

// DATA:

// const loginUrl = 'https://dummyjson.com/auth/login';
// const userUrl = 'https://dummyjson.com/auth/me';

// const loginData = {
//   username: 'emilys',
//   password: 'emilyspass'
// };

// TASKS:
// 1. Login using POST.
// 2. Extract the returned access token.
// 3. Use the token in the Authorization header.
// 4. Fetch the authenticated user's profile.
// 5. Print:
//    * id
//    * username
//    * email
//    * firstName
//    * lastName
//    * gender
// 6. Handle login errors.
// 7. Handle authenticated-request errors.

const loginUrl52 = "https://dummyjson.com/auth/login";
const userUrl52 = "https://dummyjson.com/auth/me";

const loginData52 = {
  username: "emilys",
  password: "emilyspass"
};

async function task52() {
  try {
    const loginResponse = await fetch(loginUrl52, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(loginData52)
    });

    const loginResult = await loginResponse.json();

    if (!loginResponse.ok) {
      throw new Error(
        loginResult.message || "Login failed"
      );
    }

    const token = loginResult.accessToken;

    if (!token) {
      throw new Error("Authentication token not received");
    }

    const userResponse = await fetch(userUrl52, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    const user = await userResponse.json();

    if (!userResponse.ok) {
      throw new Error(
        user.message || "Authenticated request failed"
      );
    }

    console.log("Authenticated User:");

    console.log({
      id: user.id,
      username: user.username,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      gender: user.gender
    });

  } catch (error) {
    console.error("Error:", error.message);
  }
}

task52();


// ======================================================================
// TASK 53 — LOGIN + USER DATA
// ======================================================================

// DATA:

// const loginUrl = 'https://dummyjson.com/auth/login';
// const userUrl = 'https://dummyjson.com/auth/me';

// const loginData = {
//   username: 'emilys',
//   password: 'emilyspass'
// };

// TASKS:
// 1. Create:
//    async function login()
// 2. Login and return the token.
// 3. Create:
//    async function getCurrentUser(token)
// 4. Send the token using the Authorization header.
// 5. Return the authenticated user.
// 6. Create:
//    async function getUserDashboard()
// 7. Login.
// 8. Get the current user.
// 9. Return:
//    {
//      id,
//      username,
//      name,
//      email,
//      image
//    }

const loginUrl53 = "https://dummyjson.com/auth/login";
const userUrl53 = "https://dummyjson.com/auth/me";

const loginData53 = {
  username: "emilys",
  password: "emilyspass"
};

async function login() {
  const response = await fetch(loginUrl53, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(loginData53)
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Login failed");
  }

  if (!data.accessToken) {
    throw new Error("Token not received");
  }

  return data.accessToken;
}

async function getCurrentUser(token) {
  const response = await fetch(userUrl53, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.message || "Could not fetch current user"
    );
  }

  return data;
}

async function getUserDashboard() {
  const token = await login();

  const user = await getCurrentUser(token);

  return {
    id: user.id,
    username: user.username,
    name: `${user.firstName} ${user.lastName}`,
    email: user.email,
    image: user.image
  };
}

getUserDashboard()
  .then(dashboard => {
    console.log("User Dashboard:", dashboard);
  })
  .catch(error => {
    console.error("Dashboard Error:", error.message);
  });


// ======================================================================
// TASK 54 — AUTHENTICATED PRODUCTS
// ======================================================================

// DATA:

// const loginUrl = 'https://dummyjson.com/auth/login';
// const productsUrl = 'https://dummyjson.com/auth/products';

// TASKS:
// 1. Login first.
// 2. Extract the access token.
// 3. Send the token in the Authorization header.
// 4. Request the authenticated resource.
// 5. Handle unauthorized responses.
// 6. Transform the returned data into a simpler structure.

const loginUrl54 = "https://dummyjson.com/auth/login";
const productsUrl54 = "https://dummyjson.com/auth/products";

async function task54() {
  try {
    const loginResponse = await fetch(loginUrl54, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(loginData53)
    });

    const loginResult = await loginResponse.json();

    if (!loginResponse.ok) {
      throw new Error(
        loginResult.message || "Login failed"
      );
    }

    const token = loginResult.accessToken;

    const productResponse = await fetch(productsUrl54, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    const productResult = await productResponse.json();

    if (!productResponse.ok) {
      throw new Error(
        productResult.message ||
        `Unauthorized: ${productResponse.status}`
      );
    }

    const simplifiedProducts = productResult.products.map(
      ({ id, title, price, category }) => ({
        id,
        title,
        price,
        category
      })
    );

    console.log("Products:", simplifiedProducts);

  } catch (error) {
    console.error("Error:", error.message);
  }
}

task54();