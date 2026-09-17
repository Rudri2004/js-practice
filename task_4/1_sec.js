// =====
// TASK 1
// ======

// DATA:

// const url = 'https://jsonplaceholder.typicode.com/posts/1';

// TASKS:

// 1. Fetch the data using fetch().
// 2. Convert the response into JSON.
// 3. Print the complete response object.
// 4. Print the post title.
// 5. Print the post body.
// 6. Print the userId.
// 7. Handle errors using .catch().


// 1. Fetch the data

// async function getPost() {
//     try {
     
//         const response = await fetch(url);

//         if (!response.ok) {
//             throw new Error(`HTTP Error: ${response.status}`);
//         }
//         const data = await response.json();
//         console.log("Complete Response:", data);
//         console.log("Post Title:", data.title);
//         console.log("Post Body:", data.body);
//         console.log("User ID:", data.userId);

//     } catch (error) {
//         console.error("Error:", error.message);
//     }
// }

// getPost();
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


// fetch(url)
//     .then((response) => {

        
//         if (!response.ok) {
//             throw new Error(`HTTP Error: ${response.status}`);
//         }
//         return response.json();
//     })

//     .then((data) => {

//         console.log("Complete Response:", data);
//         console.log("Post Title:", data.title);
//         console.log("Post Body:", data.body);
//         console.log("User ID:", data.userId);
//     })

  
//     .catch((error) => {
//         console.error("Error:", error.message);
//     });
// ======================================================================
// TASK 3
// ======

// DATA:

//  const url = 'https://jsonplaceholder.typicode.com/posts';

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



// async function getAllPosts() {
//     try {
//         const response = await fetch(url);

//         if (!response.ok) {
//             throw new Error(`HTTP Error: ${response.status}`);
//         }

//         const posts = await response.json();

//         console.log("Complete Response:", posts);
//         console.log("Total Posts:", posts.length);
//         console.log("First Post:", posts[0]);
//         console.log("Last Post:", posts[posts.length - 1]);

//         console.log(
//             "First 5 Titles:",
//             posts.slice(0, 5).map(post => post.title)
//         );

//         console.log(
//             "Last 5 Titles:",
//             posts.slice(-5).map(post => post.title)
//         );

//     } catch (error) {
//         console.error("Error:", error.message);
//     }
// }

// getAllPosts();


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

// const url = 'https://jsonplaceholder.typicode.com/users';

// async function getAllUsers() {
//     try {
       
//         const response = await fetch(url);

//         if (!response.ok) {
//             throw new Error(`HTTP Error: ${response.status}`);
//         }

//         const users = await response.json();
//         const names = users.map(user => user.name);
//         console.log("Names:", names);
//         const emails = users.map(user => user.email);
//         console.log("Emails:", emails);

    
//         const usernames = users.map(user => user.username);
//         console.log("Usernames:", usernames);

//         const user5 = users.find(user => user.id === 5);
//         console.log("User with ID 5:", user5);

        
//         const startsWithS = users.find(user =>
//             user.username.startsWith("S")
//         );
//         console.log("Username starts with S:", startsWithS);
//         const selectedUsers = users.map(user => ({
//             id: user.id,
//             name: user.name,
//             email: user.email
//         }));

//         console.log("Selected Users:", selectedUsers);

//     } catch (error) {
//         console.error("Error:", error.message);
//     }
// }

// getAllUsers();
// ======================================================================
// TASK 5
// ======

// DATA:

const url = 'https://jsonplaceholder.typicode.com/todos';

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


async function getAllTodos() {
    try {    
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        const todos = await response.json();

        const completedTodos = todos.filter(todo => todo.completed === true);
        console.log("Completed Todos:", completedTodos);

    
        const pendingTodos = todos.filter(todo => todo.completed === false);
        console.log("Pending Todos:", pendingTodos);

    
        console.log("Completed Count:", completedTodos.length);

      
        console.log("Pending Count:", pendingTodos.length);

        
        console.log("First Completed Todo:", completedTodos[0]);

        
        const pendingTitles = pendingTodos.map(todo => todo.title);
        console.log("Pending Titles:", pendingTitles);

        
        const selectedTodos = todos.map(todo => ({
            id: todo.id,
            title: todo.title,
            completed: todo.completed
        }));

        console.log("Selected Todos:", selectedTodos);

    } catch (error) {
        console.error("Error:", error.message);
    }
}

getAllTodos();