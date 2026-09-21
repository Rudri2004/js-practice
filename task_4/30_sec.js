// =====
// SECTION 30 — MASTER CHALLENGE
// =============================

// ======================================================================
// TASK 80
// =======

// Build a complete JavaScript API service from scratch.

const loginUrl = "https://dummyjson.com/auth/login";
const productsUrl = "https://dummyjson.com/products";
const userUrl = "https://dummyjson.com/auth/me";
// Your implementation should contain:

let accessToken = null;

const apiStatistics = {
    successfulRequests: 0,
    failedRequests: 0
};
// ## AUTHENTICATION

// 1. Login.

async function login(username, password) {

    try {

        const response = await fetch(loginUrl, {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

    body: JSON.stringify({
        username,
                password
            })

        });


        const data = await parseJSON(response);


        if (!response.ok) {
                    apiStatistics.failedRequests++;

            throw new Error(
                data?.message || "Invalid username or password"
            );

        }


        accessToken = data.accessToken;

        if (!accessToken) {

            throw new Error("Access token was not received");

        }


        apiStatistics.successfulRequests++;

        console.log("Login successful");

        return accessToken;


    } catch (error) {

        if (error instanceof TypeError) {

            throw new Error(
                "Network error during login"
            );

        }

        throw error;

    }

}

// 2. Store access token.

function storeToken(token) {

    localStorage.setItem(
        "accessToken",
        token
    );

}

// 3. Retrieve token.

function getToken() {

    return localStorage.getItem(
        "accessToken"
    );

}


// 4. Logout.
function logout() {

    localStorage.removeItem(
        "accessToken"
    );

    accessToken = null;

    console.log("Logout successful");

}

// 5. Handle invalid credentials.
// 6. Handle unauthorized requests.
async function parseJSON(response) {

    const contentType =
        response.headers.get("content-type");


    if (
        !contentType ||
        !contentType.includes("application/json")
    ) {

        return null;

    }


    try {

        return await response.json();

    } catch (error) {

        throw new Error(
            "Malformed JSON response"
        );

    }

}
async function apiRequest({

    url,

    method = "GET",

    data = null,

    headers = {},

    timeout = 5000,

    useAuth = true

}) {

    const controller =
        new AbortController();


    const timeoutId = setTimeout(() => {

        controller.abort();

    }, timeout);


    try {
        const finalHeaders = {
            ...headers
        };

        const token = getToken();


        if (useAuth && token) {

            finalHeaders.Authorization =
                `Bearer ${token}`;

        }
        const options = {

            method,

            headers: finalHeaders,

            signal: controller.signal

        };

        if (data instanceof FormData) {
            options.body = data;

        }

        else if (data !== null) {

            options.body =
                JSON.stringify(data);


            if (
                !finalHeaders["Content-Type"]
            ) {

                finalHeaders["Content-Type"] =
                    "application/json";

            }

        }
        const response =
            await fetch(url, options);

        if (response.status === 401) {

            apiStatistics.failedRequests++;

            throw new Error(
                "Unauthorized request"
            );

        }


        const responseData =
            await parseJSON(response);

        if (!response.ok) {

            apiStatistics.failedRequests++;

            throw new Error(

                responseData?.message ||

                `HTTP Error: ${response.status}`

            );

        }

        apiStatistics.successfulRequests++;


        return responseData;


    }

    catch (error) {

        if (
            error.name === "AbortError"
        ) {

            apiStatistics.failedRequests++;

            throw new Error(
                `Request timed out after ${timeout} ms`
            );

        }

        if (
            error instanceof TypeError
        ) {

            apiStatistics.failedRequests++;

            throw new Error(
                "Network error. Please check your connection."
            );

        }


        throw error;

    }

    finally {

        clearTimeout(timeoutId);

    }

}



// 4. HTTP METHODS

// 7. GET
async function apiGet(url, options = {}) {

    return apiRequest({
        url,
        method: "GET",
        ...options
    });

}
// 8. POST

async function apiPost(url, data, options = {}) {

    return apiRequest({
        url,
    method: "POST",
     data,
        ...options

    });

}


// 9. PUT
async function apiPut(url, data, options = {}) {

    return apiRequest({
        url,
        method: "PUT",
      data,
        ...options
    });

}

// 10. PATCH
async function apiPatch(url, data, options = {}) {

    return apiRequest({
        url,
        method: "PATCH",
        data,
        ...options
    });

}


// 11. DELETE

async function apiDelete(url, options = {}) {

    return apiRequest({
        url,
        method: "DELETE",
        ...options
    });

}


// 5. AUTHENTICATED USER


async function getCurrentUser() {

    const user =
        await apiGet(userUrl);


    return {

        id: user.id,

        username: user.username,

        name:
            `${user.firstName} ${user.lastName}`,

        email: user.email

    };

}

// FETCH PRODUCTS


async function getProducts() {

    const data =
        await apiGet(productsUrl);


    return data.products;

}


// ======================================================================
// 7. DATA TRANSFORMATION
// ======================================================================


// ----------------------------------------------------------------------
// 34. map()
// 35. filter()
// 36. reduce()
// 37. find()
// 38. findIndex()
// 39. some()
// 40. every()
// 41. sort()
// 42. slice()
// ----------------------------------------------------------------------

function analyzeProducts(products) {

    const simplifiedProducts =
        products.map(
            ({
                id,
                title,
                price,
                category,
                stock
            }) => ({

                id,

                title,

                price,

                category,

                stock

            })
        );


    const availableProducts =
        products.filter(
            product => product.stock > 0
        );


    const unavailableProducts =
        products.filter(
            product => product.stock === 0
        );



    const totalPrice =
        products.reduce(
            (sum, product) =>
                sum + product.price,
            0
        );


    const averagePrice =
        products.length > 0
            ? totalPrice / products.length
            : 0;


   
    const highestPriced =
        products.length > 0

            ? products.reduce(
                (highest, product) =>
                    product.price > highest.price
                        ? product
                        : highest
            )

            : {};



    const highestIndex =
        products.findIndex(
            product =>
                product.id === highestPriced.id
        );



    const hasOutOfStock =
        products.some(
            product => product.stock === 0
        );


    const allHavePrice =
        products.every(
            product => product.price > 0
        );

const sortedProducts =
    [...products].sort(
        (a, b) =>
            b.price - a.price
    );

    const topFiveProducts =
        sortedProducts.slice(0, 5);

    const lowestPriced =
        products.length > 0

            ? products.reduce(
                (lowest, product) =>
                    product.price < lowest.price
                        ? product
                        : lowest
            )

            : {};


    return {

        simplifiedProducts,

        availableProducts,

        unavailableProducts,

        totalPrice,

        averagePrice,

        highestPriced,

        highestIndex,

        lowestPriced,

        hasOutOfStock,

     allHavePrice,

        topFiveProducts

    };

}



// 43. Spread operator

function demonstrateSpread(products) {

    const copiedProducts = [
        ...products
    ];


    return copiedProducts;

}

// 9. REST OPERATOR

// 44. Rest operator

function createProductSummary(
    firstProduct,
    ...otherProducts
) {

    return {

        firstProduct,

        totalOtherProducts:
            otherProducts.length

    };

}

// 10. OBJECT DESTRUCTURING


// 45. Object destructuring

function getProductInfo(product) {

    const {
        id,
        title,
        price,
        category
    } = product;


    return {

        id,

        title,

        price,

        category

    };

}

// 11. ARRAY DESTRUCTURING
// 46. Array destructuring

function getFirstTwoProducts(products) {

    const [
        firstProduct,
        secondProduct
    ] = products;


    return {

        firstProduct,

        secondProduct

    };

}

// 12. IMMUTABLE OBJECT UPDATE

// 47. Immutable object updates

function updateProductObject(
    product,
    updateData
) {

    return {

        ...product,

        ...updateData

    };

}


// 13. IMMUTABLE ARRAY UPDATE

// 48. Immutable array updates

function updateProductArray(
    products,
    productId,
    updateData
) {

    return products.map(
        product =>

            product.id === productId

                ? {
                    ...product,
                    ...updateData
                }

                : product
    );

}


// 14. NESTED OBJECT TRANSFORMATION

// 49. Nested object transformation

function transformNestedProduct(product) {

    return {

        id: product.id,

        productInfo: {

            title: product.title,

            pricing: {

                price: product.price,

                discount:
                    product.discountPercentage

            }

        },

        inventory: {

            stock: product.stock,

            available:
                product.stock > 0

        }

    };

}



// 15. NESTED ARRAY TRANSFORMATION

// 50. Nested array transformation

function transformNestedProducts(products) {

    return products.map(
        product => ({

            id: product.id,

            title: product.title,

            tags:
                [...product.tags],

            reviews:
                product.reviews
                    ? product.reviews.map(
                        review => ({

                            rating:
                                review.rating,

                            comment:
                                review.comment

                        })
                    )

                    : []

        })
    );

}

// 16. CREATE PRODUCT

async function createProduct(productData) {

    return apiPost(

        `${productsUrl}/add`,

        productData

    );

}

// 17. UPDATE PRODUCT — PUT

async function replaceProduct(
    productId,
    productData
) {

    return apiPut(

        `${productsUrl}/${productId}`,

        productData

    );

}

// 18. UPDATE PRODUCT — PATCH

async function patchProduct(
    productId,
    updateData
) {

    return apiPatch(

        `${productsUrl}/${productId}`,

        updateData

    );

}


// 19. DELETE PRODUCT


async function deleteProduct(
    productId
) {

    return apiDelete(

        `${productsUrl}/${productId}`

    );

}


// 20. FORMDATA REQUEST


// 14. FormData request body

async function sendFormData() {

    const formData =
        new FormData();


    formData.append(
        "name",
        "Rudri"
    );


    formData.append(
        "email",
        "rudri@example.com"
    );


    return apiPost(

        "https://httpbin.org/post",

        formData,

        {
            useAuth: false
        }

    );

}


// 14. Custom headers
// 15. Authorization headers

async function customHeaderRequest() {

    return apiGet(

        productsUrl,

        {

            headers: {

                "X-Custom-Header":
                    "Master-Challenge"

            }

        }

    );

}


// ======================================================================
// 22. PROMISE CHAINING
// ======================================================================


// 21. Promise chaining

function promiseChainingExample() {

    return fetch(productsUrl)

        .then(response => {

            if (!response.ok) {

                throw new Error(
                    `HTTP Error: ${response.status}`
                );

            }

            return response.json();

        })

        .then(data => {

            return data.products;

        })

        .then(products => {

            return products.length;

        });

}



// 22. async/await

async function asyncAwaitExample() {

    const data =
        await apiGet(productsUrl);


    return data.products;

}



// 23. Promise.all()
// 27. Parallel API requests

async function parallelRequests() {

    const [

        user,

        products

    ] = await Promise.all([

        getCurrentUser(),

        getProducts()

    ]);


    return {

        user,

        products

    };

}




// 24. Promise.race()

async function raceExample() {

    const request =
        apiGet(productsUrl);


    const timeout =
        new Promise(
            (_, reject) => {

                setTimeout(
                    () => reject(
                        new Error(
                            "Race timeout"
                        )
                    ),
                    3000
                );

            }
        );


    return Promise.race([

        request,

        timeout

    ]);

}


// 25. Promise.allSettled()

async function allSettledExample() {

    const results =
        await Promise.allSettled([

            apiGet(
                "https://dummyjson.com/products/1"
            ),

            apiGet(
                "https://dummyjson.com/products/2"
            ),

            apiGet(
                "https://dummyjson.com/products/999999"
            )

        ]);


    return results;

}



// 26. Sequential API requests

async function sequentialRequests() {

    const user =
        await getCurrentUser();


    const products =
        await getProducts();


    return {

        user,

        products

    };

}



// 28. setTimeout()

function timeoutExample() {

    const timeoutId =
        setTimeout(() => {

            console.log(
                "setTimeout executed"
            );

        }, 2000);


    return timeoutId;

}


// 29. setInterval()

function intervalExample() {

    let count = 0;


    const intervalId =
        setInterval(() => {

            count++;

            console.log(
                `Interval: ${count}`
            );


            if (count === 3) {

                clearInterval(
                    intervalId
                );

                console.log(
                    "Interval stopped"
                );

            }

        }, 1000);


    return intervalId;

}


function clearTimeoutExample() {

    const timeoutId =
        setTimeout(() => {

            console.log(
                "This will not execute"
            );

        }, 3000);


    clearTimeout(timeoutId);

    console.log(
        "Timeout cleared"
    );

}



function clearIntervalExample() {

    let count = 0;


    const intervalId =
        setInterval(() => {

            count++;

            console.log(count);


            if (count === 2) {

                clearInterval(
                    intervalId
                );

            }

        }, 1000);

}



async function requestWithTimeout(
    url,
    timeout = 5000
) {

    const controller =
        new AbortController();


    const timeoutId =
        setTimeout(() => {

            controller.abort();

        }, timeout);


    try {

        const response =
            await fetch(url, {

                signal:
                    controller.signal

            });


        if (!response.ok) {

            throw new Error(
                `HTTP Error: ${response.status}`
            );

        }


        return await response.json();

    }

    catch (error) {

        if (
            error.name === "AbortError"
        ) {

            throw new Error(
                "Request timed out"
            );

        }


        throw error;

    }

    finally {

        clearTimeout(timeoutId);

    }

}



async function retryRequest(
    requestFunction,
    retries = 3,
    delay = 1000
) {

    let lastError;


    for (
        let attempt = 1;
        attempt <= retries;
        attempt++
    ) {

        try {

            return await requestFunction();

        }

        catch (error) {

            lastError = error;


            if (
                attempt < retries
            ) {

                await new Promise(
                    resolve =>
                        setTimeout(
                            resolve,
                            delay
                        )
                );

            }

        }

    }


    throw lastError;

}


// ======================================================================
// 34. FINAL DASHBOARD
// ======================================================================

function createDashboard(
    authenticatedUser,
    products
) {


    const available =
        products.filter(
            product =>
                product.stock > 0
        );


    const unavailable =
        products.filter(
            product =>
                product.stock === 0
        );


    const totalPrice =
        products.reduce(
            (sum, product) =>
                sum + product.price,
            0
        );


    const averagePrice =
        products.length > 0

            ? totalPrice /
              products.length

            : 0;


    const highestPriced =
        products.length > 0

            ? products.reduce(
                (highest, product) =>

                    product.price >
                    highest.price

                        ? product

                        : highest
            )

            : {};


    const lowestPriced =
        products.length > 0

            ? products.reduce(
                (lowest, product) =>

                    product.price <
                    lowest.price

                        ? product

                        : lowest
            )

            : {};


    return {

        authenticatedUser: {

            id:
                authenticatedUser.id,

            username:
                authenticatedUser.username,

            name:
                authenticatedUser.name,

            email:
                authenticatedUser.email

        },


        products: {

            total:
                products.length,

            available:
                available.length,

            unavailable:
                unavailable.length,

            averagePrice:
                Number(
                    averagePrice.toFixed(2)
                ),

            highestPriced: {

                id:
                    highestPriced.id,

                title:
                    highestPriced.title,

                price:
                    highestPriced.price

            },

            lowestPriced: {

                id:
                    lowestPriced.id,

                title:
                    lowestPriced.title,

                price:
                    lowestPriced.price

            }

        },


        apiStatistics: {

            successfulRequests:
                apiStatistics.successfulRequests,

            failedRequests:
                apiStatistics.failedRequests

        }

    };

}


// 35. FINAL MASTER WORKFLOW


async function masterChallenge() {

    try {



        console.log(
            "========== LOGIN =========="
        );


        const token =
            await login(
                "emilys",
                "emilyspass"
            );
        storeToken(token);
        console.log(
            "Token stored"
        );

        const storedToken =
            getToken();


        console.log(
            "Token available:",
            Boolean(storedToken)
        );
        console.log(
            "========== USER =========="
        );


        const authenticatedUser =
            await getCurrentUser();


        console.log(
            authenticatedUser
        );
        console.log(
            "========== PRODUCTS =========="
        );


        const products =
            await getProducts();


        console.log(
            "Total products:",
            products.length
        );
        const analysis =
            analyzeProducts(products);


        console.log(
            "Available:",
            analysis.availableProducts.length
        );


        console.log(
            "Unavailable:",
            analysis.unavailableProducts.length
        );


        console.log(
            "Average Price:",
            analysis.averagePrice
        );


        console.log(
            "Highest:",
            analysis.highestPriced
        );


        console.log(
            "Lowest:",
            analysis.lowestPriced
        );
        console.log(
            "========== CREATE =========="
        );


        const createdProduct =
            await createProduct({

                title:
                    "Developer Laptop",

                price:
                    89999,

                description:
                    "Laptop for developers",

                category:
                    "laptops"

            });


        console.log(
            "Created:",
            createdProduct
        );

        console.log(
            "========== PUT =========="
        );


        const replacedProduct =
            await replaceProduct(
                1,
                {

                    title:
                        "Updated Laptop",

                    price:
                        95000,

                    description:
                        "Updated developer laptop",

                    category:
                        "laptops"

                }
            );


        console.log(
            "PUT result:",
            replacedProduct
        );
        console.log(
            "========== PATCH =========="
        );


        const patchedProduct =
            await patchProduct(
                1,
                {

                    price:
                        99999

                }
            );


        console.log(
            "PATCH result:",
            patchedProduct
        );
        console.log(
            "========== DELETE =========="
        );


        const deletedProduct =
            await deleteProduct(1);


        console.log(
            "Deleted:",
            deletedProduct
        );
        console.log(
            "========== FINAL DASHBOARD =========="
        );


        const dashboard =
            createDashboard(
                authenticatedUser,
                products
            );


        console.log(
            dashboard
        );
        console.log(
            "========== LOGOUT =========="
        );


        logout();


        console.log(
            "Token after logout:",
            getToken()
        );


    }

    catch (error) {

        console.error(
            "Master Challenge Error:",
            error.message
        );

    }

}


masterChallenge();