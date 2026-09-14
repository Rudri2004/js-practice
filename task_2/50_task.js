const products = [
    { id: 1, price: 100 },
    { id: 2, price: 50 },
    { id: 3, price: 200 }
];

// Original code
const sortedProducts = products.sort((a, b) => a.price - b.price);

console.log(products);
console.log(sortedProducts);

// 1. Predict the output.

// Output:
// [ { id: 2, price: 50 }, { id: 1, price: 100 }, { id: 3, price: 200 } ]
// [ { id: 2, price: 50 }, { id: 1, price: 100 }, { id: 3, price: 200 } ]

// 2. Explain what happened to the original array.

// sort() changes the original array , Therefore, both products and sortedProducts
// refer to the same sorted array.

// The original order is changed from:
// 100, 50, 200

// To:
// 50, 100, 200


// 3. Fix the code so the original array remains unchanged.

const products2 = [
    { id: 1, price: 100 },
    { id: 2, price: 50 },
    { id: 3, price: 200 }
];

const sortedProducts2 = [...products2].sort(
    (a, b) => a.price - b.price
);

console.log("Original array:", products2);
console.log("Sorted array:", sortedProducts2);
