// SECTION 7 — PUT REQUEST
// =======================

// ======================================================================
// TASK 22
// =======

// DATA:

const postId = 1;

const url =
`https://jsonplaceholder.typicode.com/posts/${postId}`;

const updatedData = {
id: 1,
title: 'Updated Post Title',
body: 'Updated post body',
userId: 1
};

// TASKS:

// 1. Send a PUT request.
// 2. Send updatedData as JSON.
// 3. Set Content-Type.
// 4. Convert the response to JSON.
// 5. Check response.ok.
// 6. Print the updated post.
// 7. Handle errors.

async function updatePost() {
  try {
const response = await fetch(url, {
      method: "PUT",
  headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updatedData)
    });

if (!response.ok) {
  throw new Error(`HTTP Error: ${response.status}`);
    }

const updatedPost = await response.json();

    console.log("Updated Post:", updatedPost);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

updatePost();
// ======================================================================
// TASK 23
// =======

// DATA:

// const userId = 5;

// const url =
// `https://jsonplaceholder.typicode.com/users/${userId}`;

// const updatedUser = {
// id: 5,
// name: 'Updated User',
// username: 'updateduser',
// email: '[updated@example.com](mailto:updated@example.com)'
// };

// TASKS:

// 1. Send a PUT request.

// 2. Update the user.

// 3. Convert the response to JSON.

// 4. Create a simplified object:

//    {
//    id,
//    name,
//    username,
//    email
//    }

// 5. Print the result.

async function updateUser() {
  try {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updatedUser)
    });

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const user = await response.json();

    const simplifiedUser = {
      id: user.id,
      name: user.name,
      username: user.username,
      email: user.email
    };

    console.log("Updated User:", simplifiedUser);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

updateUser();