// ======================================================================
// SECTION 29 — FINAL AUTH + CRUD CHALLENGE
// ======================================================================

// TASK 79
// ======================================================================
// Build an authenticated product workflow.
//
// Requirements:
// 1. Login using the authentication API.
// 2. Obtain the access token.
// 3. Store the token.
// 4. Create an authenticated API request function.
// 5. Fetch protected user data.
// 6. Fetch products.
// 7. Transform the products.
// 8. Create a new product.
// 9. Update a product.
// 10. Delete a product.
// 11. Handle unauthorized responses.
// 12. Handle network errors.
// 13. Handle timeout errors.
// 14. Handle JSON parsing errors.
// 15. Logout and remove the token.
// ======================================================================


const loginUrl = "https://dummyjson.com/auth/login";

const loginData = {
    username: "emilys",
    password: "emilyspass"
};

let accessToken = null;
async function login() {

    try {

        const response = await fetch(loginUrl, {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(loginData)

        });



        const data = await response.json();



        if (!response.ok) {

            throw new Error(
                data.message || `Login failed: ${response.status}`
            );

        }



        accessToken = data.accessToken;



        if (!accessToken) {

            throw new Error("Access token not received");

        }


        console.log("Login successful");
        console.log("User:", {
            id: data.id,
            username: data.username,
            email: data.email
        });


        return accessToken;


    } catch (error) {

        if (error instanceof TypeError) {

            throw new Error(
                "Network error. Please check your internet connection."
            );

        }

        throw error;

    }
}



function storeToken(token) {

    localStorage.setItem("accessToken", token);

    console.log("Token stored successfully");

}



function getToken() {

    return localStorage.getItem("accessToken");

}


async function apiRequest(url, options = {}) {

    const controller = new AbortController();


    const timeout = setTimeout(() => {

        controller.abort();

    }, 5000);


    try {

        const token = getToken();


        const headers = {
            ...(options.headers || {})
        };


        if (token) {

            headers.Authorization = `Bearer ${token}`;

        }

        if (
            options.body &&
            !(options.body instanceof FormData) &&
            !headers["Content-Type"]
        ) {

            headers["Content-Type"] = "application/json";

        }


        const response = await fetch(url, {

            ...options,

            headers,

            signal: controller.signal

        });


        
        let data = null;

        const contentType = response.headers.get("content-type");


        if (
            contentType &&
            contentType.includes("application/json")
        ) {

            try {

                data = await response.json();

            } catch (error) {

                throw new Error("Invalid JSON response");

            }

        }


        if (response.status === 401) {

            throw new Error(
                "Unauthorized. Token is missing or invalid."
            );

        }


        if (!response.ok) {

            throw new Error(
                data?.message ||
                `HTTP Error: ${response.status}`
            );

        }


        return data;


    } catch (error) {


        
        if (error.name === "AbortError") {

            throw new Error(
                "Request timed out after 5 seconds."
            );

        }


        if (error instanceof TypeError) {

            throw new Error(
                "Network error. Please check your connection."
            );

        }


        throw error;


    } finally {

        clearTimeout(timeout);

    }

}

async function getCurrentUser() {

    const url = "https://dummyjson.com/auth/me";


    const user = await apiRequest(url);


    return {

        id: user.id,

        username: user.username,

        name: `${user.firstName} ${user.lastName}`,

        email: user.email,

        gender: user.gender,

        image: user.image

    };

}


async function getProducts() {

    const url = "https://dummyjson.com/products";


    const data = await apiRequest(url);


    return data.products;

}



function transformProducts(products) {

    return products.map(product => ({

        id: product.id,

        title: product.title,

        price: product.price,

        category: product.category

    }));

}

async function createProduct(product) {

    const url = "https://dummyjson.com/products/add";


    const createdProduct = await apiRequest(url, {

        method: "POST",

        body: JSON.stringify(product)

    });


    return {

        id: createdProduct.id,

        title: createdProduct.title,

        price: createdProduct.price,

        category: createdProduct.category

    };

}


async function updateProduct(productId, updateData) {

    const url =
        `https://dummyjson.com/products/${productId}`;


    const updatedProduct = await apiRequest(url, {

        method: "PATCH",

        body: JSON.stringify(updateData)

    });


    return {

        id: updatedProduct.id,

        title: updatedProduct.title,

        price: updatedProduct.price,

        category: updatedProduct.category

    };

}


async function deleteProduct(productId) {

    const url =
        `https://dummyjson.com/products/${productId}`;


    const deletedProduct = await apiRequest(url, {

        method: "DELETE"

    });


    return deletedProduct;

}


function logout() {

    localStorage.removeItem("accessToken");

    accessToken = null;

    console.log("Logout successful");

}


async function task79() {

    try {


        const token = await login();
        storeToken(token);
const user = await getCurrentUser();
    console.log("Protected User Data:");
 console.log(user);
        const products = await getProducts();
        console.log("Total Products:", products.length);
        const transformedProducts =
            transformProducts(products);
        console.log("Transformed Products:");
        console.log(transformedProducts);

        const newProduct = {

            title: "Developer Laptop",

            price: 89999,

            description: "Laptop for developers",

            category: "electronics"

        };


        const createdProduct =
            await createProduct(newProduct);


        console.log("Created Product:");

        console.log(createdProduct);



        const updatedProduct =
            await updateProduct(1, {

                title: "Updated Developer Laptop",

                price: 99999

            });


        console.log("Updated Product:");

        console.log(updatedProduct);


        const deletedProduct =
            await deleteProduct(1);


        console.log("Deleted Product:");

        console.log(deletedProduct);

        logout();

        console.log(
            "Token after logout:",
            getToken()
        );


    } catch (error) {

        console.error(
            "Task 79 Error:",
            error.message
        );

    }

}

task79();