// =====
// TASK 16
// =======

// DATA:

// const userId = 3;

// const url =
// `https://jsonplaceholder.typicode.com/posts?userId=${userId}`;

// TASKS:

// 1. Fetch posts for the given userId.

// 2. Print the total number of posts.

// 3. Print all post titles.

// 4. Print all post IDs.

// 5. Create:

//    {
//    id,
//    title
//    }

// 6. Sort the posts by ID.

async function getUserPosts() {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const posts = await response.json();

    const postDetails = posts
      .map(({ id, title }) => ({
        id,
        title
      }))
      .sort((a, b) => a.id - b.id);

    console.log("Total Posts:", posts.length);
    console.log("Post Titles:", posts.map(({ title }) => title));
    console.log("Post IDs:", posts.map(({ id }) => id));
    console.log("Sorted Posts:", postDetails);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

getUserPosts();
// ======================================================================
// TASK 17
// =======

// DATA:

// const userId = 2;

// const url =
// `https://jsonplaceholder.typicode.com/todos?userId=${userId}`;

// TASKS:

// 1. Fetch the user's todos.
// 2. Find completed todos.
// 3. Find pending todos.
// 4. Calculate the completion percentage.
// 5. Return a summary object:

//    {
//    userId,
//    totalTodos,
//    completedTodos,
//    pendingTodos,
//    completionPercentage
// //    }
// const userId = 2;

// const url =
//   `https://jsonplaceholder.typicode.com/todos?userId=${userId}`;

async function getUserTodos() {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const todos = await response.json();

  const completedTodos = todos.filter(todo => todo.completed);
    const pendingTodos = todos.filter(todo => !todo.completed);

  const totalTodos = todos.length;
    const completedCount = completedTodos.length;
 const pendingCount = pendingTodos.length;

     const completionPercentage =
      (completedCount / totalTodos) * 100;

    const summary = {
      userId,
      totalTodos,
      completedTodos: completedCount,
      pendingTodos: pendingCount,
      completionPercentage
    };

    console.log("Summary:", summary);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

getUserTodos();
// ======================================================================
// TASK 18
// =======

// DATA:

// const postId = 15;

// const url =
// `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;

// TASKS:

// 1. Fetch all comments for the post.

// 2. Print the total comments.

// 3. Print all commenter names.

// 4. Print all commenter emails.

// 5. Create:

//    {
//    name,
//    email
//    }

// 6. Find the first comment containing a specific word in its body.

const postId = 15;

const url =
  `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;

async function getComments() {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const comments = await response.json();
    const commenterNames = comments.map(comment => comment.name);
 const commenterEmails = comments.map(comment => comment.email);

  const commentDetails = comments.map(({ name, email }) => ({
      name,
      email
    }));

           const specificWord = "laudantium";

    const firstMatchingComment = comments.find(comment =>
      comment.body.toLowerCase().includes(specificWord.toLowerCase())
    );

    console.log("Total Comments:", comments.length);
console.log("Commenter Names:", commenterNames);
          console.log("Commenter Emails:", commenterEmails);
      console.log("Comment Details:", commentDetails);
    console.log("First Matching Comment:", firstMatchingComment);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

getComments();