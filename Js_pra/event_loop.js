console.log("start");

setTimeout(function cbt() {
    console.log("cb settimeout");
}, 5000);

fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(function cbF(response) {
        return response.json();
    })
    .then(function (data) {
        console.log("cb API");
    })
    .catch(function (error) {
        console.log("Fetch failed:", error.message);
    });

console.log("End");