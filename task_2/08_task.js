const products = [
    { id: 1, name: 'Phone', category: 'Electronics', price: 30000 },
    { id: 2, name: 'Shirt', category: 'Clothing', price: 1500 },
    { id: 3, name: 'Laptop', category: 'Electronics', price: 70000 },
    { id: 4, name: 'Shoes', category: 'Clothing', price: 3000 },
    { id: 5, name: 'Table', category: 'Furniture', price: 8000 },
];


// 1. Group products by category.

const procat = products.reduce((grouped, product) => {

    if (!grouped[product.category]) {
        grouped[product.category] = [];
    }

    grouped[product.category].push(product);

    return grouped;

}, {});
console.log(procat);


// 2. Count how many products exist in each category.


const existpro = products.reduce((count, product) => {

    if (count[product.category]) {
        count[product.category]++;
    } else {
        count[product.category] = 1;
    }

    return count;

}, {});
console.log(existpro);


// 3. Calculate the total price of products in each category.

const totpro = products.reduce((total, product) => {

    if (total[product.category]) {
        total[product.category] += product.price;
    } else {
        total[product.category] = product.price;
    }

    return total;

}, {});
console.log(totpro);


// 4. Find the most expensive product in each category.

const expcategory = products.reduce((highest, product) => {

    if (!highest[product.category]) {
        highest[product.category] = product;
    } 
    else if (product.price > highest[product.category].price) {
        highest[product.category] = product;
    }

    return highest;

}, {});
console.log(expcategory);

// 5. Find the category containing the most products.

const mostpro = Object.entries(existpro).reduce(
    (highest, category) => {

        if (category[1] > highest[1]) {
            return category;
        }

        return highest;

    }
);

console.log(mostpro);