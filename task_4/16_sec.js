// ======================================================================
// SECTION 16 — FORM DATA
// ======================================================================


// ======================================================================
// TASK 47
// ======================================================================

// TASKS:
// 1. Create FormData.
// 2. Append all fields.
// 3. Print each FormData entry.
// 4. Send the FormData using fetch().
// 5. Use POST.

// name = "John"
// email = "john@example.com"
// age = "25"

const formData47 = new FormData();

formData47.append("name", "John");
formData47.append("email", "john@example.com");
formData47.append("age", "25");

console.log("FormData Entries:");

for (const [key, value] of formData47.entries()) {
  console.log(key, ":", value);
}

async function task47() {
  try {
    const response = await fetch(
      "https://httpbin.org/post",
      {
        method: "POST",
        body: formData47
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const data = await response.json();
 console.log("Server Response:", data.form);

  } catch (error) {
    console.error("Error:", error.message);
  }
}

task47();


// ======================================================================
// TASK 48
// ======================================================================

// DATA:

// const formData = new FormData();

// TASKS:
// 1. Add:
//    * username
//    * email
//    * phone
//    * country
// 2. Send the FormData using fetch().
// 3. Do not manually set Content-Type.
// 4. Handle the response.
// 5. Print the returned result.

const formData48 = new FormData();

formData48.append("username", "john123");
formData48.append("email", "john@example.com");
formData48.append("phone", "9876543210");
formData48.append("country", "India");

async function task48() {
  try {
    const response = await fetch(
      "https://httpbin.org/post",
      {
        method: "POST",
        body: formData48
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const data = await response.json();

    console.log("Returned Result:", data.form);

  } catch (error) {
    console.error("Error:", error.message);
  }
}

task48();


// ======================================================================
// TASK 49
// ======================================================================

// TASKS:
// Create a simulated registration form.
//
// Fields:
// name
// email
// password
// age
// country
//
// Requirements:
// 1. Store values in FormData.
// 2. Validate that all required fields exist.
// 3. Convert FormData entries into an object.
// 4. Print the final object.
// 5. Do not expose the password while logging the final result.

const formData49 = new FormData();

formData49.append("name", "John");
formData49.append("email", "john@example.com");
formData49.append("password", "secret123");
formData49.append("age", "25");
formData49.append("country", "India");

const requiredFields49 = [
  "name",
  "email",
  "password",
  "age",
  "country"
];

let validForm49 = true;

for (const field of requiredFields49) {
  if (!formData49.get(field)) {
    console.error(`${field} is required`);
    validForm49 = false;
  }
}

if (validForm49) {
  const userObject49 = Object.fromEntries(formData49.entries());

  const safeUserObject49 = {
    ...userObject49,
    password: "[HIDDEN]"
  };

  console.log("Final Object:", safeUserObject49);
}