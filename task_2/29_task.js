const products = [
  { id: 1, name: 'Phone', price: 30000, rating: 4.5 },
  { id: 2, name: 'Laptop', price: 80000, rating: 4.8 },
  { id: 3, name: 'Mouse', price: 1200, rating: 3.9 },
  { id: 4, name: 'Keyboard', price: 2500, rating: 4.2 },
  { id: 5, name: 'Monitor', price: 18000, rating: 4.6 },
];


// 1. Find products with rating 4 or above
const ratingAbove4 = products.filter(
  product => product.rating >= 4
);

console.log("1. Products with rating 4 or above:", ratingAbove4);


// 2. Find products with price below 20000
const priceBelow20000 = products.filter(
  product => product.price < 20000
);

console.log("2. Products below ₹20,000:", priceBelow20000);


// 3. Find products with rating above 4 and price below 50000
const filteredProducts = products.filter(
  product => product.rating > 4 && product.price < 50000
);

console.log("3. Rating above 4 and price below ₹50,000:",filteredProducts);


// 4. Find the highest-rated product
const highestRated = products.reduce(
  (highest, product) =>
    product.rating > highest.rating ? product : highest
);
console.log("4. Highest-rated product:", highestRated);


// 5. Find the cheapest product with a rating above 4
const cheapestRatedProduct = products
  .filter(product => product.rating > 4)
  .reduce((cheapest, product) =>
    product.price < cheapest.price ? product : cheapest
  );

console.log("5. Cheapest product with rating above 4:",cheapestRatedProduct);


// 6. Sort products by rating descending
const sortedByRating = [...products].sort(
  (a, b) => b.rating - a.rating
);
console.log("6. Products sorted by rating:", sortedByRating);
