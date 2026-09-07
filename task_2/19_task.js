const products = [
  { id: 1, name: 'Phone', price: 30000 },
  { id: 2, name: 'Laptop', price: 80000 },
  { id: 3, name: 'Mouse', price: 1200 },
  { id: 4, name: 'Keyboard', price: 2500 },
];

// 1. Sort products by price ascending
const priceAscending = [...products].sort(
  (a, b) => a.price - b.price
);
console.log("1. Price ascending:", priceAscending);


// 2. Sort products by price descending
const priceDescending = [...products].sort( (a, b) => b.price - a.price);

console.log("2. Price descending:", priceDescending);


// 3. Sort products alphabetically by name
const alphabetical = [...products].sort((a, b) => a.name.localeCompare(b.name));
console.log("3. Alphabetically by name:", alphabetical);


// 4. Find the two most expensive products
const topTwoExpensive = [...products].sort((a, b) => b.price - a.price).slice(0, 2);
console.log("4. Two most expensive products:", topTwoExpensive);


// 5. Create a new sorted array without changing the original
const sortedProducts = [...products].sort(
  (a, b) => a.price - b.price
);

console.log("5. New sorted array:", sortedProducts);
console.log("Original products array:", products);
