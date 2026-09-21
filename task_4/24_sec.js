// ======================================================================
// SECTION 24 — API PAGINATION
// ======================================================================


// ======================================================================
// TASK 70
// ======================================================================

// DATA:
//
// const limit = 10;
// const skip = 0;
//
// const url =
// `https://dummyjson.com/products?limit=${limit}&skip=${skip}`;

// TASKS:
// 1. Fetch the products.
// 2. Print:
//    * products
//    * total
//    * skip
//    * limit
// 3. Return only product titles.

const limit70 = 10;
const skip70 = 0;

const url70 =
  `https://dummyjson.com/products?limit=${limit70}&skip=${skip70}`;

async function task70() {
  try {
    const response = await fetch(url70);

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const data = await response.json();

    console.log("Products:", data.products);
    console.log("Total:", data.total);
    console.log("Skip:", data.skip);
    console.log("Limit:", data.limit);

    const titles = data.products.map(
      product => product.title
    );

    console.log("Product Titles:", titles);

  } catch (error) {
    console.error("Error:", error.message);
  }
}

task70();


// ======================================================================
// TASK 71
// ======================================================================

// TASKS:
//
// Create a function:
//
// getProductsPage(page, limit)
//
// Requirements:
// 1. Calculate skip from page and limit.
// 2. Fetch the appropriate API URL.
// 3. Return:
//    {
//      products,
//      total,
//      page,
//      limit
//    }
// 4. Test with multiple pages.

async function getProductsPage(page, limit) {
  const skip = (page - 1) * limit;

  const url =
    `https://dummyjson.com/products?limit=${limit}&skip=${skip}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(
      `HTTP Error: ${response.status}`
    );
  }

  const data = await response.json();

  return {
    products: data.products,
    total: data.total,
    page,
    limit
  };
}

async function task71() {
  try {
    const page1 = await getProductsPage(1, 5);
    const page2 = await getProductsPage(2, 5);
    const page3 = await getProductsPage(3, 5);

    console.log("Page 1:", page1);
    console.log("Page 2:", page2);
    console.log("Page 3:", page3);

  } catch (error) {
    console.error("Error:", error.message);
  }
}

task71();


// ======================================================================
// TASK 72
// ======================================================================

// TASKS:
//
// Create a function that keeps requesting product pages until all
// available products have been fetched.
//
// Requirements:
// 1. Use async/await.
// 2. Use the API's total count.
// 3. Fetch page by page.
// 4. Combine all products into one array.
// 5. Do not duplicate products.
// 6. Return the complete product list.

async function getAllProducts() {
  const limit = 10;
  let skip = 0;
  let total = 0;

  const allProducts = [];

  do {
    const url =
      `https://dummyjson.com/products?limit=${limit}&skip=${skip}`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(
        `HTTP Error: ${response.status}`
      );
    }

    const data = await response.json();

    total = data.total;

    allProducts.push(...data.products);

    skip += limit;

  } while (skip < total);

  const uniqueProducts = [
    ...new Map(
      allProducts.map(product => [
        product.id,
        product
      ])
    ).values()
  ];

  return uniqueProducts;
}

getAllProducts()
  .then(products => {
    console.log(
      "Total Products:",
      products.length
    );

    console.log(
      "All Products:",
      products
    );
  })
  .catch(error => {
    console.error("Error:", error.message);
  });