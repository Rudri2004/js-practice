// =====
// TASK 6
// ======

// DATA:
 //const url = 'https://jsonplaceholder.typicode.com/users/1';

// TASKS:

// 1. Fetch the URL.
// 2. Print response.status.
// 3. Print response.ok.
// 4. Print response.statusText.
// 5. Print the response headers.
// 6. Convert the response to JSON.
// 7. Print the user name.

async function getUser() {
    try {
     
        const response = await fetch(url);
        console.log("Status:", response.status);
        console.log("OK:", response.ok);
        console.log("Status Text:", response.statusText);
        console.log("Headers:", response.headers);
        const user = await response.json();
        console.log("User Name:", user.name);

    } catch (error) {
        console.error("Error:", error.message);
    }
}

getUser();
// ======================================================================
//TASK 7
//  ======

// DATA:

// const url = 'https://jsonplaceholder.typicode.com/users/9999';

// TASKS:

// 1. Fetch the URL.
// 2. Check response.ok.
// 3. If response.ok is false, throw a custom error.
// 4. Handle the error using try...catch.
// 5. Print a meaningful error message.
// 6. Make sure the application does not crash unexpectedly.
// 

// async function getUser() {
//     try {
    
//         const response = await fetch(url);
        
//         console.log("Response OK:", response.ok);

       
//         if (!response.ok) {
//             throw new Error(
//                 `User not found. Status: ${response.status}`
//             );
//         }

//         const user = await response.json();

//         console.log("User:", user);

//     } catch (error) {

//         console.error("Error:", error.message);
//     }
// }

// getUser();

// ======================================================================
// TASK 8
// ======

// DATA:

// const url = 'https://invalid-api-example.test/users';

// TASKS:

// 1. Attempt to fetch the URL.
// 2. Handle the network error.
// 3. Print a suitable error message.
// 4. Use try...catch.
// 5. Explain through comments the difference between:

//    * HTTP error
//    * Network error
const url = 'https://invalid-api-example.test/users';

async function getUsers() {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const users = await response.json();
    console.log("Users:", users);
  } catch (error) {
    console.error("Network or HTTP Error:", error.message);
  }
}

getUsers();

console.log("Application is still running.");