// ======================================================================
// SECTION 11 — PARALLEL API REQUESTS
// ======================================================================


// ======================================================================
// TASK 34
// ======================================================================

// DATA:

const urls = [
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholder.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/todos'
];

// TASKS:
// 1. Fetch all three URLs.
// 2. Use Promise.all().
// 3. Convert all responses to JSON.
// 4. Print total users, posts and todos.

async function task34() {
  try {
    const responses = await Promise.all(
      urls.map(url => fetch(url))
    );

    responses.forEach(response => {
      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
      }
    });

    const [users, posts, todos] = await Promise.all(
      responses.map(response => response.json())
    );

    console.log("Total Users:", users.length);
    console.log("Total Posts:", posts.length);
    console.log("Total Todos:", todos.length);

  } catch (error) {
    console.error("Error:", error.message);
  }
}

task34();


// ======================================================================
// TASK 35
// ======================================================================

// DATA:

const userId = 3;

const userUrl =
  `https://jsonplaceholder.typicode.com/users/${userId}`;

const postsUrl =
  `https://jsonplaceholder.typicode.com/posts?userId=${userId}`;

const todosUrl =
  `https://jsonplaceholder.typicode.com/todos?userId=${userId}`;

// TASKS:
// 1. Fetch the user.
// 2. Fetch posts.
// 3. Fetch todos.
// 4. Use Promise.all() for independent requests.
// 5. Create the required summary object.

async function task35() {
  try {
    const responses = await Promise.all([
      fetch(userUrl),
      fetch(postsUrl),
      fetch(todosUrl)
    ]);

    responses.forEach(response => {
      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
      }
    });

    const [user, posts, todos] = await Promise.all(
      responses.map(response => response.json())
    );

    const completedTodos = todos.filter(todo => todo.completed);
    const pendingTodos = todos.filter(todo => !todo.completed);

    const summary = {
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        city: user.address.city
      },
      statistics: {
        totalPosts: posts.length,
        totalTodos: todos.length,
        completedTodos: completedTodos.length,
        pendingTodos: pendingTodos.length
      }
    };

    console.log("Summary:", summary);

  } catch (error) {
    console.error("Error:", error.message);
  }
}

task35();


// ======================================================================
// TASK 36
// ======================================================================

// DATA:

const userIds = [1, 2, 3, 4, 5];

// TASKS:
// 1. Create a URL for every user.
// 2. Create a fetch Promise for every URL.
// 3. Use Promise.all().
// 4. Convert every response to JSON.
// 5. Create { id, name, email }.
// 6. Sort users alphabetically by name.

async function task36() {
  try {
    const urls = userIds.map(
      id => `https://jsonplaceholder.typicode.com/users/${id}`
    );

    const responses = await Promise.all(
      urls.map(url => fetch(url))
    );

    responses.forEach(response => {
      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
      }
    });

    const users = await Promise.all(
      responses.map(response => response.json())
    );

    const simplifiedUsers = users
      .map(({ id, name, email }) => ({
        id,
        name,
        email
      }))
      .sort((a, b) => a.name.localeCompare(b.name));

    console.log("Users:", simplifiedUsers);

  } catch (error) {
    console.error("Error:", error.message);
  }
}

task36();