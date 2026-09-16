
//1. What is the difference between `var`, `let`, and `const`?
//=>var : it has functional scope and redeclaration allowed and reassignment allowed
//=>let : it has block scope and redeclaration not allowed and reassignment allowed
//=>const : it has block scope and redeclaration not allowed also reassigment not allowed


// 2.What is the difference between `==` and `===` in JavaScript? Give an example where they produce different results.
//== (Loose equality) : It compares values after converting their types if necessary.
// === ( Strict equality): It compares both value and data type. It does not perform type conversion.
//example: console.log(5 == "5");//op:true
//console.log(5 === "5");//op:false


//3. What is the difference between an array and an object in JavaScript?
//Array: 
// An array stores multiple values in an ordered list. It uses numeric indexes starting from 0.
// Example:
//const fruits = ["Apple", "Banana", "Mango"];
// console.log(fruits[0]); // op: apple
// console.log(fruits.length); //op: 3

// Object
// An object stores data using key-value pairs.
//example:
//const user = {
//     name: "Rudri",
//     age: 22,
//     city: "Bhavnagar"
// };
// console.log(user.name); // Rudri
// console.log(user.age);  // 22

// 4. What is the difference between `map()`, `filter()`, and `forEach()`? Write one simple example for each.
//map: It Transforms every item and return new array
//filter: It Selects matching items and return new array
//forEach: It Performs an action for each item and return undefind

//example for forEach:
// const fruits = ["Apple", "Banana", "Mango"];

// fruits.forEach((fruit) => {
//     console.log(fruit);
// });

//5. What is the difference between synchronous and asynchronous JavaScript? Explain what `setTimeout()` demonstrates about asynchronous execution.
//Synchronous JavaScript: Synchronous code runs one statement at a time, in order. The next statement waits until the current statement finishes.

//Asynchronous JavaScript ; Asynchronous code allows JavaScript to start a task and continue executing other code while waiting.
// Common asynchronous examples:
//setTimeout(), fetch(), Promises,  async/await

//6. Debug this code. It should print the user's name.
//await keyword missing in fetch and respose.json()
// async function getUser() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
//   const user = await response.json();

//   console.log(user.name);
// }

// getUser();


//7.  Debug this code. The function should return the fetched posts.
// function start with async keyword and .then are missing at post return
// async function getPosts() {
//     return fetch("https://jsonplaceholder.typicode.com/posts")
//         .then((response) => {
//             return response.json();
//         })
//         .then((posts) => {
//             return posts;
//         });
// }

// getPosts().then((posts) => {
//     console.log(posts);
// });


//8. What is the output order of this code? Explain why.
//  the code execute priority wise first execute sync task , microtask and last  
//so op is 1 4 3 2return priority wise
// console.log("1");

// setTimeout(() => {
//   console.log("2");
// }, 0);

// Promise.resolve().then(() => {
//   console.log("3");
// });

// console.log("4");
//op:  1 4 3 2

//9. Write an `async/await` function that fetches users from:
// ```text
// https://jsonplaceholder.typicode.com/users
// ```
// The function should:
// check whether the HTTP response was successful
// convert the response to JSON
// return only users whose age is greater than 18, assuming an `age` property exists
// return only `{ id, name, email }`
// handle errors using `try/catch`
// async function userget() {
//     try {
//         const response = await fetch(
//             "https://jsonplaceholder.typicode.com/users"
//         );

//         if (!response.ok) {
//             throw new Error("Failed to fetch users");
//         }

//         const users = await response.json();

//         const adultUsers = users
//             .filter((user) => user.age > 18)
//             .map((user) => {
//                 return {
//                     id: user.id,
//                     name: user.name,
//                     email: user.email
//                 };
//             });

//         return adultUsers;
//     } catch (error) {
//         console.log("Error:", error.message);
//         return [];
//     }
// }

// userget().then((users) => {
//     console.log(users);
// });

// 10. Debug this code. The requirement is to print `"All requests completed"` only after all three requests finish.
//The problem is that forEach() does not wait for asynchronous callbacks. So "All requests completed" is printed before the requests finish.
async function loadUsers() {
    const ids = [1, 2, 3];

    const requests = ids.map(async (id) => {
        const response = await fetch(
            `https://jsonplaceholder.typicode.com/users/${id}`
        );

        if (!response.ok) {
            throw new Error(`Failed to fetch user ${id}`);
        }

        const user = await response.json();

        console.log(user.name);

        return user;
    });

    await Promise.all(requests);

    console.log("All requests completed");
}

loadUsers().catch((error) => {
    console.log("Error:", error.message);
});
// 11. Use `Promise.all()` to fetch these three resources in parallel:
// ```text
// https://jsonplaceholder.typicode.com/users/1
// https://jsonplaceholder.typicode.com/users/2
// https://jsonplaceholder.typicode.com/users/3
// ```
// Return an array containing the three parsed users. Correctly handle both HTTP errors and request errors.



async function getUsers() {
    const urls = [
        "https://jsonplaceholder.typicode.com/users/1",
        "https://jsonplaceholder.typicode.com/users/2",
        "https://jsonplaceholder.typicode.com/users/3"
    ];

    try {
        const responses = await Promise.all(
            urls.map(url => fetch(url))
        );

        // Fetch does not reject for HTTP errors such as 404 or 500
        responses.forEach((response, index) => {
            if (!response.ok) {
                throw new Error(
                    `Request ${index + 1} failed: ${response.status}`
                );
            }
        });

        const users = await Promise.all(
            responses.map(response => response.json())
        );

        return users;
    } catch (error) {
        console.log("Error fetching users:", error.message);
        return [];
    }
}

getUsers().then(users => {
    console.log(users);
});


// 12. Given this array, return the total amount of all successful transactions for each user.
// ```js
// const transactions = [
//   { userId: 1, amount: 1000, status: "success" },
//   { userId: 2, amount: 700, status: "success" },
//   { userId: 1, amount: 500, status: "success" },
//   { userId: 2, amount: 300, status: "failed" },
//   { userId: 1, amount: 200, status: "failed" },
//   { userId: 2, amount: 100, status: "success" }
// ];
// ```
// The expected result shape is:
// ```js
// [
//   { userId: 1, total: 1500 },
//   { userId: 2, total: 800 }
// ]
// ```
// Do not modify the original array.


const transactions = [
    { userId: 1, amount: 1000, status: "success" },
    { userId: 2, amount: 700, status: "success" },
    { userId: 1, amount: 500, status: "success" },
    { userId: 2, amount: 300, status: "failed" },
    { userId: 1, amount: 200, status: "failed" },
    { userId: 2, amount: 100, status: "success" }
];

const result = transactions
    .filter((transaction) => transaction.status === "success")
    .reduce((totals, transaction) => {
        const existingUser = totals.find(
            (item) => item.userId === transaction.userId
        );

        if (existingUser) {
            existingUser.total += transaction.amount;
        } else {
            totals.push({
                userId: transaction.userId,
                total: transaction.amount
            });
        }

        return totals;
    }, []);

console.log(result);



// 13. Debug this function. It should return the first product with a price greater than `1000`, or `null` if no product matches.


const products = [
  { id: 1, name: "Mouse", price: 500 },
  { id: 2, name: "Keyboard", price: 1500 },
  { id: 3, name: "Monitor", price: 5000 }
];
function findProduct(products) {
    return products.find(product => product.price > 1000) || null;
}

console.log(findProduct(products));

//output: { id: 2, name: "Keyboard", price: 1500 }





//14. Debug this `reduce()` code. It should calculate the final cart price.
// only return keyword missing 
const cart = [
  { name: "Book", price: 300, quantity: 2 },
  { name: "Pen", price: 50, quantity: 3 },
  { name: "Bag", price: 1000, quantity: 1 }
];

const total = cart.reduce((sum, item) => {
  return sum + item.price * item.quantity;
}, 0);

console.log(total);
// op:1750





//15.  Write a function `groupByCategory(products)` that converts the following array into an object grouped by category.
// ```js

// The result should have this general structure:
// ```js
// {
//   mobile: [...],
//   laptop: [...],
//   tablet: [...]
// }

const productss = [
    { name: "iPhone", category: "mobile" },
    { name: "Samsung", category: "mobile" },
    { name: "MacBook", category: "laptop" },
    { name: "Dell", category: "laptop" },
    { name: "iPad", category: "tablet" }
];

function groupByCategory(productss) {
    return productss.reduce((groups, product) => {
        const category = product.category;

        if (!groups[category]) {
            groups[category] = [];
        }

        groups[category].push(product);

        return groups;
    }, {});
}


console.log(groupByCategory(productss));

//16. Debug this code. It should return an array of users who have at least one post.
//The problem is that map(async ...) returns an array of Promises, not an array of users. Use Promise.all() and then remove the users without posts.
async function getUsersWithPosts() {
    const users = await fetch(
        "https://jsonplaceholder.typicode.com/users"
    ).then(res => res.json());

    const results = await Promise.all(
        users.map(async user => {
            const posts = await fetch(
                `https://jsonplaceholder.typicode.com/posts?userId=${user.id}`
            ).then(res => res.json());

            if (posts.length > 0) {
                return user;
            }

            return null;
        })
    );

    return results.filter(user => user !== null);
}

getUsersWithPosts().then(users => {
    console.log(users);
});







//17.  Create a reusable function:
// ```js
// fetchWithRetry(url, retries)
// ```
// The function should:
// use `async/await`
// make a `fetch()` request
// retry when the request fails
// stop after the specified number of retries
// correctly treat a non-2xx HTTP response as a failure
// return parsed JSON when successful
// throw an error after all attempts fail

async function fetchWithRetry(url, retries) {
    let attempts = 0;

    while (attempts <= retries) {
        try {
            const response = await fetch(url);

            // Treat non-2xx responses as failures
            if (!response.ok) {
                throw new Error(`HTTP error: ${response.status}`);
            }

            // Return parsed JSON when successful
            return await response.json();

        } catch (error) {
            attempts++;

            if (attempts > retries) {
                throw new Error(
                    `Request failed after ${attempts} attempts: ${error.message}`
                );
            }

            console.log(`Attempt ${attempts} failed. Retrying...`);
        }
    }
}






// 18. Given the following users and orders, calculate the total order amount for every user and return the users sorted from highest total to lowest.


// ```
// Return this shape:

// [
//   { id: 2, name: "Neha", total: 1200 },
//   { id: 1, name: "Amit", total: 1200 },
//   { id: 3, name: "Rahul", total: 1200 }
// ]
// ```
// If two users have the same total, keep their original user order.
const users = [
    { id: 1, name: "Amit" },
    { id: 2, name: "Neha" },
    { id: 3, name: "Rahul" }
];

const orders = [
    { userId: 1, amount: 500 },
    { userId: 2, amount: 1000 },
    { userId: 1, amount: 700 },
    { userId: 3, amount: 300 },
    { userId: 2, amount: 200 },
    { userId: 3, amount: 900 }
];

function getUsersWithTotal(users, orders) {
    const totals = orders.reduce((acc, order) => {
        acc[order.userId] = (acc[order.userId] || 0) + order.amount;
        return acc;
    }, {});

    return users
        .map(user => ({
            ...user,
            total: totals[user.id] || 0
        }))
        .sort((a, b) => b.total - a.total);
}

console.log(getUsersWithTotal(users, orders));







//19.Fetch both of these APIs:
// ```text
// https://jsonplaceholder.typicode.com/users
// https://jsonplaceholder.typicode.com/posts
// ```
// Build a function that returns the top 3 users based on the number of posts they have written.
// The returned objects must contain only:
// ```js
// {
//   id,
//   name,
//   postCount
// }
// ```
// Requirements:
// use `async/await`
// fetch the two APIs efficiently
// match posts to users using `userId`
// calculate the post count for every user
// sort from highest post count to lowest
// return only the top 3
// handle HTTP/request errors
// do not modify the fetched arrays
// 

async function getTopThreeUsers() {
    try {
        const [usersResponse, postsResponse] = await Promise.all([
            fetch("https://jsonplaceholder.typicode.com/users"),
            fetch("https://jsonplaceholder.typicode.com/posts")
        ]);

       
        if (!usersResponse.ok || !postsResponse.ok) {
            throw new Error("Failed to fetch users or posts");
        }

        const [users, posts] = await Promise.all([
            usersResponse.json(),
            postsResponse.json()
        ]);
 const result = users
            .map(user => {      const postCount = posts.filter(
                    post => post.userId === user.id
                ).length;

                return {
                    id: user.id,
                    name: user.name,
                    postCount: postCount
                };
            })
            .sort((a, b) => b.postCount - a.postCount)
            .slice(0, 3);

        return result;

    } catch (error) {
        console.log("Error:", error.message);
        return [];
    }
}

getTopThreeUsers().then(result => {
    console.log(result);
});





//20. Debug and improve this function. The requirement is to fetch a list of posts and return the titles of posts whose title contains the word `"qui"` (case-insensitive).
// ```js
async function getMatchingPostTitles() {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts"
        );

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        const posts = await response.json();

        const matchingTitles = posts
            .filter(post =>
                post.title.toLowerCase().includes("qui")
            )
            .map(post => post.title.toUpperCase());

      
        return matchingTitles;

    } catch (error) {
        console.log("Error fetching posts:", error.message);
        return [];
    }
}

getMatchingPostTitles().then(titles => {
    console.log(titles);
});
// The function should:
// correctly handle an unsuccessful HTTP response
// correctly return the transformed titles
// not modify the original posts
// return a useful result when no posts match