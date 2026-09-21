// ======================================================================
// SECTION 17 — JSON VS FORM DATA
// ======================================================================


// ======================================================================
// TASK 50
// ======================================================================

// TASKS:
// Create the same user data using:
//
// 1. JSON object
// 2. FormData
//
// Compare how each is sent using fetch().
//
// Document the difference between:
//
// application/json
//
// and
//
// multipart/form-data

const userData50 = {
  name: "John",
  email: "john@example.com",
  age: 25
};


// ----------------------
// JSON
// ----------------------

async function sendJSON() {
  try {
    const response = await fetch(
      "https://httpbin.org/post",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(userData50)
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const data = await response.json();

    console.log("JSON Result:", data.json);

  } catch (error) {
    console.error("JSON Error:", error.message);
  }
}


// ----------------------
// FORM DATA
// ----------------------

const formData50 = new FormData();

formData50.append("name", "John");
formData50.append("email", "john@example.com");
formData50.append("age", "25");

async function sendFormData() {
  try {
    const response = await fetch(
      "https://httpbin.org/post",
      {
        method: "POST",
        body: formData50
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const data = await response.json();

    console.log("FormData Result:", data.form);

  } catch (error) {
    console.error("FormData Error:", error.message);
  }
}

sendJSON();
sendFormData();

//diference 

// application/json
// - Used when sending JSON data.
// - Data is converted using JSON.stringify().
// - Content-Type is usually set manually.
// - Example:
//   body: JSON.stringify(userData)
//
// multipart/form-data
// - Used by FormData.
// - Useful for forms and file uploads.
// - Browser automatically creates the Content-Type boundary.
// - Do NOT manually set Content-Type when using FormData.
// - Example:
//   body: formData