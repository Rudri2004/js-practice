// ======================================================================
// SECTION 27 — FINAL API DASHBOARD CHALLENGE
// ======================================================================


// ======================================================================
// TASK 77
// ======================================================================

// DATA:
//
// const userId = 3;

// TASKS:
//
// Build a complete user dashboard.
//
// Use:
//
// Users API
// Posts API
// Todos API
//
// Requirements:
// 1. Fetch the user.
// 2. Fetch posts.
// 3. Fetch todos.
// 4. Use Promise.all() wherever possible.
// 5. Check response.ok.
// 6. Handle errors.
// 7. Transform all API responses.
// 8. Do not mutate the original API data.
//
// Return:
//
// {
//   user: {
//     id,
//     name,
//     username,
//     email,
//     city
//   },
//
//   posts: {
//     total,
//     firstPost,
//     latestPost
//   },
//
//   todos: {
//     total,
//     completed,
//     pending,
//     completionPercentage
//   }
// }

const userId = 3;

async function task77() {
  try {

    const userUrl =
      `https://jsonplaceholder.typicode.com/users/${userId}`;

    const postsUrl =
      `https://jsonplaceholder.typicode.com/posts?userId=${userId}`;

    const todosUrl =
      `https://jsonplaceholder.typicode.com/todos?userId=${userId}`;

    const responses = await Promise.all([
      fetch(userUrl),
      fetch(postsUrl),
      fetch(todosUrl)
    ]);

    responses.forEach(response => {
      if (!response.ok) {
        throw new Error(
          `HTTP Error: ${response.status}`
        );
      }
    });

    const [user, posts, todos] =
      await Promise.all(
        responses.map(response => response.json())
      );

    const completed =
      todos.filter(todo => todo.completed);

    const pending =
      todos.filter(todo => !todo.completed);

    const completionPercentage =
      todos.length > 0
        ? (completed.length / todos.length) * 100
        : 0;

    const dashboard = {
      user: {
        id: user.id,
        name: user.name,
        username: user.username,
        email: user.email,
        city: user.address.city
      },

      posts: {
        total: posts.length,

        firstPost:
          posts.length > 0
            ? {
                id: posts[0].id,
                title: posts[0].title
              }
            : null,

        latestPost:
          posts.length > 0
            ? {
                id: posts[posts.length - 1].id,
                title: posts[posts.length - 1].title
              }
            : null
      },

      todos: {
        total: todos.length,
        completed: completed.length,
        pending: pending.length,
        completionPercentage:
          Number(completionPercentage.toFixed(2))
      }
    };

    console.log("Dashboard:", dashboard);

  } catch (error) {
    console.error(
      "Dashboard Error:",
      error.message
    );
  }
}

task77();