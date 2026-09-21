// ======================================================================
// SECTION 22 — API DATA TRANSFORMATION
// ======================================================================


// ======================================================================
// TASK 63
// ======================================================================

// DATA:
//
// const url = 'https://dummyjson.com/products';

// TASKS:
// 1. Fetch all products.
// 2. Create a list of products costing more than 100.
// 3. From those products return only:
//    {
//      id,
//      title,
//      price
//    }
// 4. Sort by price descending.
// 5. Take the first 5 products.

const url63 = "https://dummyjson.com/products";

async function task63() {
  try {
    const response = await fetch(url63);

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const data = await response.json();

    const result = data.products
      .filter(product => product.price > 100)
      .map(({ id, title, price }) => ({
        id,
        title,
        price
      }))
      .sort((a, b) => b.price - a.price)
      .slice(0, 5);

    console.log("Task 63:", result);

  } catch (error) {
    console.error("Error:", error.message);
  }
}

task63();


// ======================================================================
// TASK 64
// ======================================================================

// DATA:
//
// const url = 'https://dummyjson.com/products';

// TASKS:
// 1. Fetch all products.
// 2. Group products by category.
// 3. Create an object:
//    {
//      categoryName: [
//        products
//      ]
//    }
// 4. Do not modify the original response.

const url64 = "https://dummyjson.com/products";

async function task64() {
  try {
    const response = await fetch(url64);

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const data = await response.json();

    const groupedProducts = data.products.reduce(
      (groups, product) => {
        const category = product.category;

        if (!groups[category]) {
          groups[category] = [];
        }

        groups[category].push({
          ...product
        });

        return groups;
      },
      {}
    );

    console.log("Task 64:", groupedProducts);

  } catch (error) {
    console.error("Error:", error.message);
  }
}

task64();


// ======================================================================
// TASK 65
// ======================================================================

// DATA:
//
// TASKS:
// 1. Fetch products.
// 2. Calculate:
//    * total products
//    * total price
//    * average price
//    * highest price
//    * lowest price
// 3. Return:
//    {
//      totalProducts,
//      totalPrice,
//      averagePrice,
//      highestPrice,
//      lowestPrice
//    }

const url65 = "https://dummyjson.com/products";

async function task65() {
  try {
    const response = await fetch(url65);

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const data = await response.json();

    const products = data.products;

    const totalProducts = products.length;

    const totalPrice = products.reduce(
      (sum, product) => sum + product.price,
      0
    );

    const averagePrice =
      totalProducts > 0
        ? totalPrice / totalProducts
        : 0;

    const highestPrice = Math.max(
      ...products.map(product => product.price)
    );

    const lowestPrice = Math.min(
      ...products.map(product => product.price)
    );

    const result = {
      totalProducts,
      totalPrice,
      averagePrice,
      highestPrice,
      lowestPrice
    };

    console.log("Task 65:", result);

  } catch (error) {
    console.error("Error:", error.message);
  }
}

task65();


// ======================================================================
// TASK 66
// ======================================================================

// DATA:
//
// const url = 'https://dummyjson.com/products';

// TASKS:
// 1. Fetch products.
// 2. Extract all categories.
// 3. Remove duplicate categories.
// 4. Create an array of unique categories.
// 5. Count how many products belong to each category.

const url66 = "https://dummyjson.com/products";

async function task66() {
  try {
    const response = await fetch(url66);

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const data = await response.json();

    const categories = data.products.map(
      product => product.category
    );

    const uniqueCategories = [
      ...new Set(categories)
    ];

    const categoryCounts = data.products.reduce(
      (counts, product) => {
        counts[product.category] =
          (counts[product.category] || 0) + 1;

        return counts;
      },
      {}
    );

    console.log("Unique Categories:", uniqueCategories);
    console.log("Category Counts:", categoryCounts);

  } catch (error) {
    console.error("Error:", error.message);
  }
}

task66();