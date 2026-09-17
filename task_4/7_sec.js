// =====
// SECTION 7 — PUT REQUEST
// =======================

// ======================================================================
// TASK 22
// =======

// DATA:

// const postId = 1;

// const url =
// `https://jsonplaceholder.typicode.com/posts/${postId}`;

// const updatedData = {
// id: 1,
// title: 'Updated Post Title',
// body: 'Updated post body',
// userId: 1
// };

// TASKS:

// 1. Send a PUT request.
// 2. Send updatedData as JSON.
// 3. Set Content-Type.
// 4. Convert the response to JSON.
// 5. Check response.ok.
// 6. Print the updated post.
// 7. Handle errors.












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

// ======================================================================
// SECTION 8 — PATCH REQUEST
// =========================

// ======================================================================
// TASK 24
// =======

// DATA:

// const postId = 1;

// const url =
// `https://jsonplaceholder.typicode.com/posts/${postId}`;

// const patchData = {
// title: 'Only Title Updated'
// };

// TASKS:

// 1. Send a PATCH request.
// 2. Update only the title.
// 3. Keep the request body as JSON.
// 4. Check response.ok.
// 5. Print the returned object.
// 6. Verify which fields were returned.

// ======================================================================
// TASK 25
// =======

// DATA:

// const userId = 3;

// const url =
// `https://jsonplaceholder.typicode.com/users/${userId}`;

// const patchData = {
// email: '[newemail@example.com](mailto:newemail@example.com)'
// };

// TASKS:

// 1. Send a PATCH request.
// 2. Update only the email.
// 3. Handle the response.
// 4. Return:

//    {
//    id,
//    name,
//    email
//    }
