const products = [
    { id: 1, title: 'Women Shirt', category: 'clothing', price: 30.50 },
    { id: 2, title: 'Men Trousers', category: 'clothing', price: 45.75 },
    { id: 3, title: 'Women Dress', category: 'clothing', price: 60.20 },
    { id: 4, title: 'Laptop', category: 'electronics', price: 75.99 },
    { id: 5, title: 'Headphones', category: 'electronics', price: 55.00 },
];


// TASK:
// Find products with a price greater than 40
// and create a new array containing:
//
// {
//     title,
//     discountedPrice
// }
//
// Apply a 10% discount.
// Discounted price should contain exactly 2 decimals.


const result = products
    .filter((product) => {
        return product.price > 40;
    })
    .map((product) => {

        const discountedPrice = product.price - (product.price * 10 / 100);

        return {
            title: product.title,
discountedPrice: discountedPrice.toFixed(2)
        };

    });

console.log("Products with Discount:");
console.log(result);