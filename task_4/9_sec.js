// ======================================================================
// SECTION 9 — DELETE REQUEST
// ======================================================================


// ======================================================================
// TASK 26
// ======================================================================

// DATA:

const postId = 1;

const postUrl =
  `https://jsonplaceholder.typicode.com/posts/${postId}`;

// TASKS:
// 1. Send a DELETE request.
// 2. Check response.ok.
// 3. Print the HTTP status.
// 4. Handle the response correctly.
// 5. Print a success message after deletion.

async function deletePost() {
  try {
    const response = await fetch(postUrl, {
      method: "DELETE"
    });

    console.log("HTTP Status:", response.status);

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    console.log("Post deleted successfully.");
  } catch (error) {
    console.error("Error:", error.message);
  }
}

deletePost();


// ======================================================================
// TASK 27
// ======================================================================

// DATA:

const productIds = [1, 2, 3];

// TASKS:
// 1. Create DELETE URLs dynamically.
// 2. Send DELETE requests for all products.
// 3. Use Promise.all().
// 4. Wait for all requests to complete.
// 5. Print the status of each request.
// 6. Handle failures properly.

async function deleteProducts() {
  try {
    const requests = productIds.map(id => {
      const url = `https://fakestoreapi.com/products/${id}`;

      return fetch(url, {
        method: "DELETE"
      });
    });

    const responses = await Promise.all(requests);

    responses.forEach((response, index) => {
      
      console.log(
        `Product ${productIds[index]} Status:`,
        response.status
      );

     if (!response.ok) {
  throw new Error(
          `Product ${productIds[index]} deletion failed. Status: ${response.status}`
        );
      }
    });

    console.log("All products deleted successfully.");
  } catch (error) {
    console.error("Error:", error.message);
  }
}

deleteProducts();