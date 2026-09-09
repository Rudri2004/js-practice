const products = [
  { id: 1, name: 'Laptop', price: 75000, category: 'Electronics' },
  { id: 2, name: 'Mouse', price: 1200, category: 'Electronics' },
  { id: 3, name: 'Chair', price: 8500, category: 'Furniture' },
  { id: 4, name: 'Desk', price: 12000, category: 'Furniture' },
  { id: 5, name: 'Lamp', price: 1800, category: 'Home' },
];


// 1. Create an array containing only the product names.

const proname = products.map((product) => {
    return product.name;
});
console.log(proname);

// 2. Create an array containing only the product prices.

const proprice = products.map((product) => {
    return product.price;
});
console.log(proprice);

// 3. Find the product with id 3.

const pro3 = products.find((product) => {
    return product.id === 3;
});
console.log(pro3);

// 4. Find the index of the product with id 4.

const index4 = products.findIndex((product) => {
    return product.id === 4;
});
console.log(index4);

// 5. Find all products with a price greater than 5000.

const pricegreat = products.filter((product) => {
    return product.price > 5000;
});
console.log(pricegreat);

// 6. Calculate the total price of all products.

const totprice = products.reduce((total, product) => {
    return total + product.price;
}, 0);
console.log(totprice);
