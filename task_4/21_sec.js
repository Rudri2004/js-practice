// ======================================================================
// SECTION 21 — CRUD API PRACTICE
// ======================================================================


// ======================================================================
// TASK 59 — CREATE
// ======================================================================

// DATA:

// const product = {
//   title: 'New Laptop',
//   price: 89999,
//   description: 'Developer laptop',
//   category: 'electronics'
// };

// TASKS:
// 1. Send a POST request.
// 2. Send the product as JSON.
// 3. Check response.ok.
// 4. Convert the response to JSON.
// 5. Return:
//    {
//      id,
//      title,
//      price,
//      category
//    }

const product59 = {
  title: "New Laptop",
  price: 89999,
  description: "Developer laptop",
  category: "electronics"
};

async function task59() {
  try {
    const response = await fetch(
      "https://dummyjson.com/products/add",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(product59)
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.message || `HTTP Error: ${response.status}`
      );
    }

    const result = {
      id: data.id,
      title: data.title,
      price: data.price,
      category: data.category
    };

    console.log("Created Product:", result);

  } catch (error) {
    console.error("Create Error:", error.message);
  }
}

task59();


// ======================================================================
// TASK 60 — READ
// ======================================================================

// DATA:

// const url = 'https://dummyjson.com/products';

// TASKS:
// 1. Fetch all products.
// 2. Print total products.
// 3. Print first product.
// 4. Print last product.
// 5. Create an array containing:
//    * id
//    * title
//    * price
// 6. Find the most expensive product.
// 7. Find the cheapest product.

const url60 = "https://dummyjson.com/products";

async function task60() {
  try {
    const response = await fetch(url60);

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.message || `HTTP Error: ${response.status}`
      );
    }

    const products = data.products;

    console.log("Total Products:", products.length);

    console.log("First Product:", products[0]);

    console.log(
      "Last Product:",
      products[products.length - 1]
    );

    const simplifiedProducts = products.map(
      ({ id, title, price }) => ({
        id,
        title,
        price
      })
    );

    console.log(
      "Simplified Products:",
      simplifiedProducts
    );

    const mostExpensive = products.reduce(
      (max, product) =>
        product.price > max.price ? product : max
    );

    const cheapest = products.reduce(
      (min, product) =>
        product.price < min.price ? product : min
    );

    console.log(
      "Most Expensive:",
      mostExpensive
    );

    console.log(
      "Cheapest:",
      cheapest
    );

  } catch (error) {
    console.error("Read Error:", error.message);
  }
}

task60();


// ======================================================================
// TASK 61 — UPDATE
// ======================================================================

// DATA:

// const productId = 1;
//
// const url =
// `https://dummyjson.com/products/${productId}`;
//
// const updateData = {
//   title: 'Updated Laptop',
//   price: 99999
// };

// TASKS:
// 1. Send a PUT or PATCH request.
// 2. Update the product.
// 3. Convert response to JSON.
// 4. Return only:
//    {
//      id,
//      title,
//      price
//    }

const productId61 = 1;

const url61 =
  `https://dummyjson.com/products/${productId61}`;

const updateData61 = {
  title: "Updated Laptop",
  price: 99999
};

async function task61() {
  try {
    const response = await fetch(url61, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updateData61)
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.message || `HTTP Error: ${response.status}`
      );
    }

    const result = {
      id: data.id,
      title: data.title,
      price: data.price
    };

    console.log("Updated Product:", result);

  } catch (error) {
    console.error("Update Error:", error.message);
  }
}

task61();


// ======================================================================
// TASK 62 — DELETE
// ======================================================================

// DATA:

// const productId = 1;
//
// const url =
// `https://dummyjson.com/products/${productId}`;

// TASKS:
// 1. Send DELETE request.
// 2. Check response.ok.
// 3. Convert the response to JSON if a body exists.
// 4. Print the deleted product information.
// 5. Print a success message.

const productId62 = 1;

const url62 =
  `https://dummyjson.com/products/${productId62}`;

async function task62() {
  try {
    const response = await fetch(url62, {
      method: "DELETE"
    });

    if (!response.ok) {
      throw new Error(
        `HTTP Error: ${response.status}`
      );
    }

    let data = null;

    const contentType =
      response.headers.get("content-type");

    if (
      contentType &&
      contentType.includes("application/json")
    ) {
      data = await response.json();
    }

    console.log("Deleted Product:", data);

    console.log(
      "Product deleted successfully."
    );

  } catch (error) {
    console.error("Delete Error:", error.message);
  }
}

task62();