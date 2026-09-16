// fetch("https://dummyjson.com/users")
// .then((Response) => {
//     return Response.json();
// })
// .then((data) =>{
//     console.log(data);
// });


// ## Task

// Create a JavaScript program that acts as a simple **User Management API client**.

// Your program should perform the following operations:


// ### 1. Login

// Create a login function that accepts a username and password.

// Use the DummyJSON authentication API to authenticate the user.

// Test the function with valid credentials from the DummyJSON users API.

// Also test an invalid username/password combination and handle the error appropriately.

// After successful login, keep the returned authentication information available for subsequent operations.

let authData = null;
async function login(username,password) {
    try{
    const response = await fetch ("https://dummyjson.com/user/login", {
        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify({
            username ,
            password
        })
    });
    if(!response.ok){
        throw new Error("invalid username or password");
        
    }

    

    const data =await response.json();
    
        if (!data.accessToken) {
            throw new Error("Authentication information is missing");
        }

     authData = data;
   console.log("Login successful");
console.log("User:", `${authData.firstName} ${authData.lastName}`);
console.log("Token:", authData.accessToken);

    return authData;

}    
    catch(error){
        console.log("login failed", error.message);
        return null;
    }
}

// login("emilys", "emilyspass");
//login("rudri","rudri2004");


// ### 2. Get Users

// Create a function that retrieves users from the API.

// The function should:

// * Retrieve users
// * Print the users in a readable format
// * Handle API/request errors
// * Handle unsuccessful responses


async function getUsers(){
    try{
    const response = await fetch("https://dummyjson.com/users");
    if (!response.ok){
        throw new error("failed to get users");
        
    }
    const data = await response.json();
    console.log(data);
      data.users.forEach((user) => {
            console.log({
                id: user.id,
                name: `${user.firstName} ${user.lastName}`,
                email: user.email,
                age: user.age
            });
          
});
  return data.users;
}
    catch(error){
    console.log("get failed",error.message);
    }
}
// getUsers();

//### 3. Add User

// Create a function that adds a new user.

// Use data such as:

// ```js
// {
//   firstName: "John",
//   lastName: "Doe",
//   age: 25,
//   gender: "male",
//   email: "john@example.com"
// }
// ```

// Print the newly created user's information.

// Handle both successful and unsuccessful requests.
async function adduser(userData) {
    try {
        const response = await fetch("https://dummyjson.com/users/add", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(userData)
        });

        if (!response.ok) {
            throw new Error("user not added");
        }

        const data = await response.json();

        console.log("User created successfully");
        console.log("New user information");
        console.log(data);

        return data;
    } catch (error) {
        console.log("Add user failed:", error.message);
        return null;
    }
}

// adduser({
//     firstName: "Rudri",
//     lastName: "Joshi",
//     age: 25,
//     gender: "female",
//     email: "rudri@example.com"
// });


//### 4. Update User
// Create a function that updates an existing user.

// Update at least two properties of the user, then print the API response.

// Handle errors appropriately.
async function updateuser(id) {
    const updateu = {
        firstName: "Rudrij",
        age: 15
    };

    try {
        const response = await fetch(
            `https://dummyjson.com/users/${id}`,
            {
                method: "PUT",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(updateu)
            }
        );

        if (!response.ok) {
            throw new Error("user not updated");
        }

        const data = await response.json();

        console.log("User updated successfully");
        console.log("Updated user information");
        console.log(data);

        return data; // Important
    } catch (error) {
        console.log("Update user failed:", error.message);
        return null;
    }
}


// ### 5. Delete User
// Create a function that deletes an existing user.

// After the operation, print whether the deletion was successful.

// Handle unsuccessful responses and API errors.

async function deleteuser(id) {
    try {
        const response = await fetch(
            `https://dummyjson.com/users/${id}`,
            {
                method: "DELETE"
            }
        );

        if (!response.ok) {
            throw new Error("user not deleted");
        }

        const data = await response.json();

        console.log("User deleted successfully");
        console.log(data);

        return data; 
    } catch (error) {
        console.log("Delete user failed:", error.message);
        return null;
    }
}
// deleteuser(1);

// ### 6. Final Flow

// Create one main function that executes the complete flow:

// ```text
// Login
//   ↓
// Get Users
//   ↓
// Add User
//   ↓
// Update User
//   ↓
// Delete User
// ```

// The program should continue only when the previous required operation succeeds.

async function main() {
    try {
        // 1. Login
        const loginData = await login("emilys", "emilyspass");

        if (!loginData || !authData?.accessToken) {
            throw new Error("Login failed. Flow stopped.");
        }

        console.log("Login successful");
        console.log("Name:", `${authData.firstName} ${authData.lastName}`);
        console.log("Email:", authData.email);

        // 2. Get Users
        const users = await getUsers();

        if (!users) {
            throw new Error("Get users failed. Flow stopped.");
        }

        // 3. Add User
        const addedUser = await adduser({
            firstName: "Rudri",
            lastName: "Joshi",
            age: 25,
            gender: "female",
            email: "rudri@example.com"
        });

        if (!addedUser?.id) {
            throw new Error("Add user failed. Flow stopped.");
        }

      // 4. Update User
const updatedUser = await updateuser(addedUser.id);

if (!updatedUser?.id) {
    throw new Error("Update user failed. Flow stopped.");
}

// 5. Delete User
const deletedUser = await deleteuser(updatedUser.id);

if (!deletedUser?.id) {
    throw new Error("Delete user failed. Flow stopped.");
}

console.log("\nComplete API flow executed successfully");

} catch (error) {
    console.error("Complete flow failed:", error.message);
}
}
main();