// =====
// TASK 1
// ======

// DATA:

const url = 'https://jsonplaceholder.typicode.com/posts/1';

// TASKS:

// 1. Fetch the data using fetch().
// 2. Convert the response into JSON.
// 3. Print the complete response object.
// 4. Print the post title.
// 5. Print the post body.
// 6. Print the userId.
// 7. Handle errors using .catch().


// 1. Fetch the data

async function getPost() {
    try {
     
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }
        const data = await response.json();
        console.log("Complete Response:", data);
        console.log("Post Title:", data.title);
        console.log("Post Body:", data.body);
        console.log("User ID:", data.userId);

    } catch (error) {
        console.error("Error:", error.message);
    }
}

getPost();
// ======================================================================
// TASK 2
// ======

// DATA:

// const url = 'https://jsonplaceholder.typicode.com/users/1';

// TASKS:

// 1. Fetch the user using async/await.
// 2. Convert the response into JSON.
// 3. Print the user's name.
// 4. Print the user's username.
// 5. Print the user's email.
// 6. Print the user's city.
// 7. Print the user's company name.
// 8. Handle errors using try...catch.


fetch(url)
    .then((response) => {

        
        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }
        return response.json();
    })

    .then((data) => {

        console.log("Complete Response:", data);
        console.log("Post Title:", data.title);
        console.log("Post Body:", data.body);
        console.log("User ID:", data.userId);
    })

  
    .catch((error) => {
        console.error("Error:", error.message);
    });
// ======================================================================
// TASK 3
// ======

// DATA:

// const url = 'https://jsonplaceholder.typicode.com/posts';

// TASKS:

// 1. Fetch all posts.
// 2. Check response.ok.
// 3. Throw an error if the response is unsuccessful.
// 4. Convert the response to JSON.
// 5. Print the total number of posts.
// 6. Print the first post.
// 7. Print the last post.
// 8. Print the first 5 post titles.
// 9. Print the last 5 post titles.









// ======================================================================
// TASK 4
// ======

// DATA:

// const url = 'https://jsonplaceholder.typicode.com/users';

// TASKS:

// 1. Fetch all users.
// 2. Create an array containing only user names.
// 3. Create an array containing only user emails.
// 4. Create an array containing only usernames.
// 5. Find the user with id 5.
// 6. Find the first user whose username starts with "S".
// 7. Create a new array containing only:

//    {
//    id,
//    name,
//    email
//    }

// ======================================================================
// TASK 5
// ======

// DATA:

// const url = 'https://jsonplaceholder.typicode.com/todos';

// TASKS:

// 1. Fetch all todos.
// 2. Find all completed todos.
// 3. Find all pending todos.
// 4. Print the number of completed todos.
// 5. Print the number of pending todos.
// 6. Print the first completed todo.
// 7. Print the titles of all pending todos.
// 8. Create a new array containing only:

//    {
//    id,
//    title,
//    completed
//    }
