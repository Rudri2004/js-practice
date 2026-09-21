// ======================================================================
// SECTION 23 — MULTIPLE API DATA COMBINATION
// ======================================================================


// ======================================================================
// TASK 67
// ======================================================================

// DATA:
//

// TASKS:
// 1. Fetch users and posts using Promise.all().
// 2. Match posts with their users using userId.
// 3. Create:
//    {
//      userId,
//      userName,
//      totalPosts
//    }
// 4. Return one summary object for every user.

const usersUrl67 =
  "https://jsonplaceholder.typicode.com/users";

const postsUrl67 =
  "https://jsonplaceholder.typicode.com/posts";

async function task67() {
  try {
    const responses = await Promise.all([
      fetch(usersUrl67),
      fetch(postsUrl67)
    ]);

    responses.forEach(response => {
      if (!response.ok) {
        throw new Error(
          `HTTP Error: ${response.status}`
        );
      }
    });

    const [users, posts] = await Promise.all(
      responses.map(response => response.json())
    );

    const result = users.map(user => {
      const userPosts = posts.filter(
        post => post.userId === user.id
      );

      return {
        userId: user.id,
        userName: user.name,
        totalPosts: userPosts.length
      };
    });

    console.log("Task 67:", result);

  } catch (error) {
    console.error("Error:", error.message);
  }
}

task67();


// ======================================================================
// TASK 68
// ======================================================================

// DATA:
//
// const usersUrl =
// 'https://jsonplaceholder.typicode.com/users';
//
// const todosUrl =
// 'https://jsonplaceholder.typicode.com/todos';

// TASKS:
// 1. Fetch users and todos in parallel.
// 2. Group todos by userId.
// 3. Match users with their todos.
// 4. Create:
//    {
//      id,
//      name,
//      totalTodos,
//      completedTodos,
//      pendingTodos
//    }

const usersUrl68 =
  "https://jsonplaceholder.typicode.com/users";

const todosUrl68 =
  "https://jsonplaceholder.typicode.com/todos";

async function task68() {
  try {
    const responses = await Promise.all([
      fetch(usersUrl68),
      fetch(todosUrl68)
    ]);

    responses.forEach(response => {
      if (!response.ok) {
        throw new Error(
          `HTTP Error: ${response.status}`
        );
      }
    });

    const [users, todos] = await Promise.all(
      responses.map(response => response.json())
    );

    const todosByUser = todos.reduce(
      (groups, todo) => {
        if (!groups[todo.userId]) {
          groups[todo.userId] = [];
        }

        groups[todo.userId].push(todo);

        return groups;
      },
      {}
    );

    const result = users.map(user => {
      const userTodos =
        todosByUser[user.id] || [];

      const completedTodos =
        userTodos.filter(todo => todo.completed);

      return {
        id: user.id,
        name: user.name,
        totalTodos: userTodos.length,
        completedTodos: completedTodos.length,
        pendingTodos:
          userTodos.length - completedTodos.length
      };
    });

    console.log("Task 68:", result);

  } catch (error) {
    console.error("Error:", error.message);
  }
}

task68();


// ======================================================================
// TASK 69
// ======================================================================

// DATA:
//
// const usersUrl =
// 'https://jsonplaceholder.typicode.com/users';
//
// const postsUrl =
// 'https://jsonplaceholder.typicode.com/posts';
//
// const commentsUrl =
// 'https://jsonplaceholder.typicode.com/comments';

// TASKS:
// 1. Fetch all three resources using Promise.all().
// 2. Match posts with users.
// 3. Match comments with posts.
// 4. Create a summary:
//    {
//      userId,
//      userName,
//      posts: [
//        {
//          postId,
//          title,
//          commentCount
//        }
//      ]
//    }

const usersUrl69 =
  "https://jsonplaceholder.typicode.com/users";

const postsUrl69 =
  "https://jsonplaceholder.typicode.com/posts";

const commentsUrl69 =
  "https://jsonplaceholder.typicode.com/comments";

async function task69() {
  try {
    const responses = await Promise.all([
      fetch(usersUrl69),
      fetch(postsUrl69),
      fetch(commentsUrl69)
    ]);

    responses.forEach(response => {
      if (!response.ok) {
        throw new Error(
          `HTTP Error: ${response.status}`
        );
      }
    });

    const [users, posts, comments] =
      await Promise.all(
        responses.map(response => response.json())
      );

    const commentsByPost = comments.reduce(
      (groups, comment) => {
        if (!groups[comment.postId]) {
          groups[comment.postId] = [];
        }

        groups[comment.postId].push(comment);

        return groups;
      },
      {}
    );

    const result = users.map(user => {
      const userPosts = posts.filter(
        post => post.userId === user.id
      );

      return {
        userId: user.id,
        userName: user.name,
        posts: userPosts.map(post => ({
          postId: post.id,
          title: post.title,
          commentCount:
            (commentsByPost[post.id] || []).length
        }))
      };
    });

    console.log("Task 69:", result);

  } catch (error) {
    console.error("Error:", error.message);
  }
}

task69();