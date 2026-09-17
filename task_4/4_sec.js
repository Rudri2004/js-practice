// =====
// SECTION 4 — DESTRUCTURING API RESPONSES
// =======================================

// ======================================================================
// TASK 13
// =======

// DATA:

 //const url = 'https://jsonplaceholder.typicode.com/users/1';

// TASKS:

// 1. Fetch the user.

// 2. Use object destructuring to extract:

//    * name
//    * username
//    * email

// 3. Destructure city from the nested address object.

// 4. Destructure company name.

// 5. Print all extracted values.


async function getUser() {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const user = await response.json();

    const {
      name,
      username,
      email,
      address: { city },
      company: { name: companyName }
    } = user;

    console.log("Name:", name);
    console.log("Username:", username);
    console.log("Email:", email);
    console.log("City:", city);
    console.log("Company Name:", companyName);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

getUser();

// ======================================================================
// TASK 14
// =======

// DATA:

// const url = 'https://randomuser.me/api/';

// TASKS:

// 1. Fetch the API.

// 2. Extract the first user from the results array.

// 3. Use destructuring to extract:

//    * first name
//    * last name
//    * email
//    * phone
//    * country
//    * city

// 4. Create a new simplified user object.

async function getUser() {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const data = await response.json();

    const [user] = data.results;

    const {
      name: { first: firstName, last: lastName },
      email,
      phone,
      location: {
        country,
        city
      }
    } = user;

    const simplifiedUser = {
      firstName,
      lastName,
      email,
      phone,
      country,
      city
    };

    console.log("Simplified User:", simplifiedUser);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

getUser();
// ======================================================================
// TASK 15
// =======

// DATA:

const url = 'https://fakestoreapi.com/products/1';

// TASKS:

// 1. Fetch the product.

// 2. Destructure:

//    * id
//    * title
//    * price
//    * category
//    * rating

// 3. Destructure rating.rate.

// 4. Destructure rating.count.

// 5. Create:

//    {
//    id,
//    name,
//    price,
//    category,
//    rating
//    }


async function getProduct() {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const product = await response.json();

    const {
      id,
      title: name,
      price,
      category,
      rating: {
        rate,
        count
      }
    } = product;

    const simplifiedProduct = {
      id,
      name,
      price,
      category,
      rating: {
        rate,
        count
      }
    };

    console.log("Simplified Product:", simplifiedProduct);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

getProduct();
