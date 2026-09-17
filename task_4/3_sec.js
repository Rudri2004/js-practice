// =====
// SECTION 3 — API RESPONSE SLICING & DICING
// =========================================

// ======================================================================
// TASK 9
// ======

// DATA:

// const url = 'https://jsonplaceholder.typicode.com/users';

// TASKS:

// 1. Fetch all users.
// 2. Get the first 3 users.
// 3. Get the last 3 users.
// 4. Skip the first 2 users.
// 5. Skip the last 2 users.
// 6. Get users from index 2 to index 6.
// 7. Create separate arrays for:

//    * first user
//    * remaining users


async function getUsers() {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const users = await response.json();

    const firstThreeUsers = users.slice(0, 3);
    const lastThreeUsers = users.slice(-3);
    const skipFirstTwoUsers = users.slice(2);
    const skipLastTwoUsers = users.slice(0, -2);
    const usersFromIndex2To6 = users.slice(2, 7);

    const [firstUser, ...remainingUsers] = users;

    console.log("All Users:", users);
    console.log("First 3 Users:", firstThreeUsers);
    console.log("Last 3 Users:", lastThreeUsers);
    console.log("Skip First 2 Users:", skipFirstTwoUsers);
    console.log("Skip Last 2 Users:", skipLastTwoUsers);
    console.log("Users from Index 2 to 6:", usersFromIndex2To6);
    console.log("First User:", firstUser);
    console.log("Remaining Users:", remainingUsers);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

getUsers();
// ======================================================================
// TASK 10
// =======

// DATA:

// const url = 'https://jsonplaceholder.typicode.com/posts';

// TASKS:

// 1. Fetch all posts.

// 2. Get the first 10 posts.

// 3. From those 10 posts, return only:

//    {
//    id,
//    title
//    }

// 4. Get posts belonging to userId 3.

// 5. Return only their titles.

// 6. Sort those titles alphabetically.


async function getPosts() {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const posts = await response.json();

    const firstTenPosts = posts.slice(0, 10);

    const idAndTitles = firstTenPosts.map(post => ({
      id: post.id,
      title: post.title
    }));

    const userThreeTitles = posts
      .filter(post => post.userId === 3)
      .map(post => post.title)
      .sort();

    console.log("All Posts:", posts);
    console.log("First 10 Posts:", firstTenPosts);
    console.log("ID and Titles:", idAndTitles);
    console.log("User ID 3 Titles:", userThreeTitles);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

getPosts();

// ======================================================================
// TASK 11
// =======

// DATA:

//const url = 'https://fakestoreapi.com/products';

// TASKS:

// 1. Fetch all products.

// 2. Get the first 5 products.

// 3. Get the last 5 products.

// 4. Find products costing more than 50.

// 5. Return only:

//    {
//    id,
//    title,
//    price
//    }

// 6. Sort the result by price from highest to lowest.

async function getProducts() {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const products = await response.json();

    const firstFiveProducts = products.slice(0, 5);
    const lastFiveProducts = products.slice(-5);

    const expensiveProducts = products
      .filter(product => product.price > 50)
      .map(product => ({
        id: product.id,
        title: product.title,
        price: product.price
      }))
      .sort((a, b) => b.price - a.price);

    console.log("All Products:", products);
    console.log("First 5 Products:", firstFiveProducts);
    console.log("Last 5 Products:", lastFiveProducts);
    console.log("Products Costing More Than 50:", expensiveProducts);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

getProducts();
// ======================================================================
// TASK 12
// =======

// DATA:

// const url = 'https://fakestoreapi.com/products';

// TASKS:

// 1. Fetch all products.

// 2. Extract:

//    * title
//    * price
//    * category
//    * rating

// 3. Create a new object:

//    {
//    productName,
//    productPrice,
//    productCategory,
//    productRating
//    }

// 4. Create a new array using the transformed objects.

const url = 'https://fakestoreapi.com/products';

async function getProducts() {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const products = await response.json();

    const transformedProducts = products.map(product => ({
      productName: product.title,
      productPrice: product.price,
      productCategory: product.category,
      productRating: product.rating
    }));

    console.log("Transformed Products:", transformedProducts);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

getProducts();