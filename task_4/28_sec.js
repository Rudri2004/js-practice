// ======================================================================
// SECTION 28 — FINAL CRUD + TRANSFORMATION CHALLENGE
// ======================================================================


// ======================================================================
// TASK 78
// ======================================================================

// TASKS:
//
// Build a complete product management flow.
//
// Requirements:
//
// 1. Fetch all products.
//
// 2. Display only:
//    {
//      id,
//      title,
//      price,
//      category
//    }
//
// 3. Filter products by price.
//
// 4. Sort products by price.
//
// 5. Find a product by ID.
//
// 6. Create a new product using POST.
//
// 7. Update a product using PATCH.
//
// 8. Delete a product using DELETE.
//
// 9. Handle every HTTP error.
//
// 10. Do not mutate the original product array.
//
// 11. Use reusable API functions.

const productUrl =
  "https://dummyjson.com/products";


// ======================================================================
// REUSABLE REQUEST FUNCTION
// ======================================================================

async function request(url, options = {}) {
  const response = await fetch(url, options);

  let data = null;

  const contentType =
    response.headers.get("content-type");

  if (
    contentType &&
    contentType.includes("application/json")
  ) {
    data = await response.json();
  }

  if (!response.ok) {
    throw new Error(
      data?.message ||
      `HTTP Error: ${response.status}`
    );
  }

  return data;
}


// ======================================================================
// GET PRODUCTS
// ======================================================================

async function getProducts() {
  return request(productUrl);
}


// ======================================================================
// CREATE PRODUCT
// ======================================================================

async function createProduct(product) {
  return request(
    `${productUrl}/add`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(product)
    }
  );
}


// ======================================================================
// UPDATE PRODUCT
// ======================================================================

async function updateProduct(
  productId,
  updateData
) {
  return request(
    `${productUrl}/${productId}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updateData)
    }
  );
}


// ======================================================================
// DELETE PRODUCT
// ======================================================================

async function deleteProduct(productId) {
  return request(
    `${productUrl}/${productId}`,
    {
      method: "DELETE"
    }
  );
}


// ======================================================================
// MAIN TASK
// ======================================================================

async function task78() {
  try {

    // 1. Fetch all products

    const data = await getProducts();

    const originalProducts =
      data.products;


    // 2. Display selected fields

    const simplifiedProducts =
      originalProducts.map(
        ({
          id,
          title,
          price,
          category
        }) => ({
          id,
          title,
          price,
          category
        })
      );

    console.log(
      "Simplified Products:",
      simplifiedProducts
    );


    // 3. Filter products by price

    const filteredProducts =
      originalProducts.filter(
        product => product.price > 500
      );

    console.log(
      "Products Above 500:",
      filteredProducts
    );


    // 4. Sort products by price

    const sortedProducts =
      [...originalProducts].sort(
        (a, b) => b.price - a.price
      );

    console.log(
      "Sorted Products:",
      sortedProducts
    );


    // 5. Find product by ID

    const productId = 1;

    const foundProduct =
      originalProducts.find(
        product => product.id === productId
      );

    console.log(
      "Found Product:",
      foundProduct
    );


    // 6. Create product

    const newProduct = {
      title: "Developer Laptop",
      price: 89999,
      description: "Laptop for developers",
      category: "laptops"
    };

    const createdProduct =
      await createProduct(newProduct);

    console.log(
      "Created Product:",
      createdProduct
    );


    // 7. Update product

    const updatedProduct =
      await updateProduct(
        productId,
        {
          title: "Updated Laptop",
          price: 99999
        }
      );

    console.log(
      "Updated Product:",
      updatedProduct
    );


    // 8. Delete product

    const deletedProduct =
      await deleteProduct(productId);

    console.log(
      "Deleted Product:",
      deletedProduct
    );


    // 9. Success message

    console.log(
      "Product management completed successfully."
    );


    // 10. Original array remains unchanged

    console.log(
      "Original Products:",
      originalProducts
    );

  } catch (error) {

    console.error(
      "Product Management Error:",
      error.message
    );
  }
}

task78();