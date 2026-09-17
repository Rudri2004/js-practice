// =====
// TASK 19
// =======

// DATA:

// const url = 'https://jsonplaceholder.typicode.com/posts';

// const postData = {
// title: 'Learning JavaScript APIs',
// body: 'Practicing POST requests with fetch',
// userId: 1
// };

// TASKS:

// 1. Send a POST request.
// 2. Use method: "POST".
// 3. Send the data as JSON.
// 4. Set the correct Content-Type header.
// 5. Convert the response to JSON.
// 6. Print the created post.
// 7. Print the generated ID.
// 8. Handle errors properly.


async function createPost() {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(postData)
    });

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const createdPost = await response.json();

    console.log("Created Post:", createdPost);
    console.log("Generated ID:", createdPost.id);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

createPost();







// ======================================================================
// TASK 20
// =======

// DATA:

// const url = 'https://jsonplaceholder.typicode.com/posts';

// const postData = {
// title: 'My New Post',
// body: 'This is a test post.',
// userId: 5
// };

// TASKS:

// 1. Create an async function called createPost().
// 2. Send the POST request.
// 3. Set the required headers.
// 4. Convert the response to JSON.
// 5. Check response.ok.
// 6. Throw an error if the request fails.
// 7. Return the created post.
// 8. Call the function and print the result.
// const url = 'https://jsonplaceholder.typicode.com/posts';

// const postData = {
//   title: 'My New Post',
//   body: 'This is a test post.',
//   userId: 5
// };

async function createPost() {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(postData)
    });

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const createdPost = await response.json();

    return createdPost;
  } catch (error) {
    console.error("Error:", error.message);
  }
}

createPost().then(result => {
  console.log("Created Post:", result);
});
// ======================================================================
// TASK 21
// =======

// DATA:

const url = 'https://jsonplaceholder.typicode.com/posts';

const postData = {
title: 'Original Title',
body: 'Original body',
userId: 2
};

// TASKS:

// 1. Create a POST request.
// 2. After receiving the response, create a new object containing:

//    * id
//    * title
//    * userId
// 3. Do not directly modify the API response object.
// 4. Add a new property:

//    createdBy: "intern"


async function createPost() {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(postData)
    });

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const createdPost = await response.json();

    return createdPost;
  } catch (error) {
    console.error("Error:", error.message);
  }
}

createPost().then(result => {
  console.log("Created Post:", result);
});