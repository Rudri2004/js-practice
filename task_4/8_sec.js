// // ======================================================================
// SECTION 8 — PATCH REQUEST
// ======================================================================


// ======================================================================
// TASK 24
// ======================================================================

// DATA:

const postId = 1;

const postUrl =
  `https://jsonplaceholder.typicode.com/posts/${postId}`;

const patchData = {
  title: 'Only Title Updated'
};

// TASKS:
// 1. Send a PATCH request.
// 2. Update only the title.
// 3. Keep the request body as JSON.
// 4. Check response.ok.
// 5. Print the returned object.
// 6. Verify which fields were returned.

async function updatePost() {
  try {
    const response = await fetch(postUrl, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(patchData)
    });

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const updatedPost = await response.json();

    console.log("Updated Post:", updatedPost);
    console.log("Returned Fields:", Object.keys(updatedPost));
  } catch (error) {
    console.error("Error:", error.message);
  }
}

updatePost();


// ======================================================================
// TASK 25
// ======================================================================

// DATA:

const userId = 3;

const userUrl =
  `https://jsonplaceholder.typicode.com/users/${userId}`;

const userPatchData = {
  email: 'newemail@example.com'
};

// TASKS:
// 1. Send a PATCH request.
// 2. Update only the email.
// 3. Handle the response.
// 4. Return:
//    {
//      id,
//      name,
//      email
//    }

async function updateUser() {
  try {
    const response = await fetch(userUrl, {
 method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
  body: JSON.stringify(userPatchData)
    });

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const user = await response.json();

    const simplifiedUser = {
      id: user.id,
 name: user.name,
        email: user.email
    };

    console.log("Updated User:", simplifiedUser);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

updateUser();