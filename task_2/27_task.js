const products = [
  { id: 1, name: 'Phone', price: 30000, stock: 5 },
  { id: 2, name: 'Laptop', price: 80000, stock: 2 },
  { id: 3, name: 'Mouse', price: 1200, stock: 0 },
  { id: 4, name: 'Keyboard', price: 2500, stock: 10 },
];


// 1. Find all products that are in stock
const inStock = products.filter(product => product.stock > 0);

console.log("1. Products in stock:", inStock);


// 2. Find all products that are out of stock
const outOfStock = products.filter(product => product.stock === 0);

console.log("2. Products out of stock:", outOfStock);


// 3. Calculate total inventory value using price × stock
const totalInventoryValue = products.reduce((total, product) => {
  return total + (product.price * product.stock);
}, 0);

console.log("3. Total inventory value:", totalInventoryValue);


// 4. Find the product with the highest stock
const highestStock = products.reduce((highest, product) => {
  return product.stock > highest.stock ? product : highest;
});

console.log("4. Product with highest stock:", highestStock);


// 5. Find the product with the lowest stock
const lowestStock = products.reduce((lowest, product) => {
  return product.stock < lowest.stock ? product : lowest;
});

console.log("5. Product with lowest stock:", lowestStock);


// 6. Calculate the total number of items in stock
const totalItemsInStock = products.reduce((total, product) => {
  return total + product.stock;
}, 0);

console.log("6. Total items in stock:", totalItemsInStock);
