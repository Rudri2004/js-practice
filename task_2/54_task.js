
async function getData() {

//       const response = fetch('https://jsonplaceholder.typicode.com/users/1');
//   const data = response.json();

//   console.log(data);


    // 1. Identify the problems.
    // fetch() returns a Promise, but await is missing.
    // response.json() also returns a Promise,
    // so await is needed here as well.
    // There is no error handling for failed requests.


    // 2. Correct the code using async/await.

    const response = await fetch(
        'https://jsonplaceholder.typicode.com/users/1'
    );

    const data = await response.json();

    console.log(data);

}
        getData();


// 3. Add error handling.

async function getDataWithErrorHandling() {
    try {
        const response = await fetch(
            'https://jsonplaceholder.typicode.com/users/1'
        );

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        const data = await response.json();

        console.log("User data:", data);

    } catch (error) {
        console.log("Error fetching data:", error.message);
    }
}

getDataWithErrorHandling();