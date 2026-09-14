


// const ids = [1, 2, 3];

// ids.forEach(async (id) => {
//   const response = await fetch(
//     `https://jsonplaceholder.typicode.com/users/${id}`
//   );

//   const user = await response.json();

//   console.log(user.name);
// });

// console.log('Finished');



// 1. Explain why "Finished" can appear before the user names.
//output
//forEach() does not wait for the async callback to finish.


// 2. Rewrite the code so all requests finish before "Finished".
const ids = [1, 2, 3];

async function getUsers() {
    for (const id of ids) {
        const response = await fetch(
            `https://jsonplaceholder.typicode.com/users/${id}`
        );

        const user = await response.json();

        console.log(user.name);
    }

    console.log('Finished');
}

getUsers();


// 3. Create a version where requests run in parallel.
