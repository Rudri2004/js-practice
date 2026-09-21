// ======================================================================
// SECTION 12 — SEQUENTIAL API REQUESTS
// ======================================================================


// ======================================================================
// TASK 37
// ======================================================================

// DATA:

const userId37 = 1;

// TASKS:
// 1. Fetch the user.
// 2. After receiving the user, fetch their posts.
// 3. After receiving the posts, fetch comments for the first post.
// 4. Print:
//    * user name
//    * post title
//    * number of comments

async function task37() {
  try {
    const userResponse = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId37}`
    );

    if (!userResponse.ok) {
      throw new Error(`User HTTP Error: ${userResponse.status}`);
    }

    const user = await userResponse.json();

    const postsResponse = await fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${userId37}`
    );

    if (!postsResponse.ok) {
      throw new Error(`Posts HTTP Error: ${postsResponse.status}`);
    }

    const posts = await postsResponse.json();

    const firstPost = posts[0];

    const commentsResponse = await fetch(
      `https://jsonplaceholder.typicode.com/comments?postId=${firstPost.id}`
    );

    if (!commentsResponse.ok) {
      throw new Error(
        `Comments HTTP Error: ${commentsResponse.status}`
      );
    }

    const comments = await commentsResponse.json();

    console.log("User Name:", user.name);
    console.log("Post Title:", firstPost.title);
    console.log("Number of Comments:", comments.length);

  } catch (error) {
    console.error("Error:", error.message);
  }
}

task37();


// ======================================================================
// TASK 38
// ======================================================================

// DATA:

const userId38 = 2;

// TASKS:
// 1. Fetch the user.
// 2. Fetch their todos.
// 3. If the user has completed todos, fetch the user again.
// 4. Create a final summary object.
// 5. Handle all possible errors.

async function task38() {
  try {
    const userResponse = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId38}`
    );

    if (!userResponse.ok) {
      throw new Error(`User HTTP Error: ${userResponse.status}`);
    }

    const user = await userResponse.json();

    const todosResponse = await fetch(
      `https://jsonplaceholder.typicode.com/todos?userId=${userId38}`
    );

    if (!todosResponse.ok) {
      throw new Error(`Todos HTTP Error: ${todosResponse.status}`);
    }

    const todos = await todosResponse.json();

    const completedTodos = todos.filter(todo => todo.completed);
    const pendingTodos = todos.filter(todo => !todo.completed);

    let userFetchedAgain = false;

    if (completedTodos.length > 0) {
      const userAgainResponse = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userId38}`
      );

      if (!userAgainResponse.ok) {
        throw new Error(
          `Second User HTTP Error: ${userAgainResponse.status}`
        );
      }

      await userAgainResponse.json();

      userFetchedAgain = true;
    }

    const finalSummary = {
      userId: user.id,
      userName: user.name,
      totalTodos: todos.length,
      completedTodos: completedTodos.length,
      pendingTodos: pendingTodos.length,
      userFetchedAgain
    };

    console.log("Final Summary:", finalSummary);

  } catch (error) {
    console.error("Error:", error.message);
  }
}

task38();