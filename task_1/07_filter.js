
const products = [
  {
    id: 1,
    name: "MacBook Air M4",
    price: 99999,
    category: "Electronics",
    brand: "Apple",
    stock: 12,
    rating: 4.8,
    tags: ["laptop", "apple", "premium"]
  },
  {
    id: 2,
    name: "iPhone 16",
    price: 79999,
    category: "Electronics",
    brand: "Apple",
    stock: 25,
    rating: 4.7,
    tags: ["mobile", "apple", "5g"]
  },
  {
    id: 3,
    name: "Galaxy S25",
    price: 74999,
    category: "Electronics",
    brand: "Samsung",
    stock: 18,
    rating: 4.6,
    tags: ["mobile", "samsung", "5g"]
  },
  {
    id: 4,
    name: "Mechanical Keyboard",
    price: 5499,
    category: "Accessories",
    brand: "Keychron",
    stock: 8,
    rating: 4.5,
    tags: ["keyboard", "mechanical", "wireless"]
  },
  {
    id: 5,
    name: "Magic Mouse",
    price: 6999,
    category: "Accessories",
    brand: "Apple",
    stock: 0,
    rating: 4.2,
    tags: ["mouse", "apple", "wireless"]
  },
  {
    id: 6,
    name: "Sony WH-1000XM6",
    price: 34999,
    category: "Audio",
    brand: "Sony",
    stock: 14,
    rating: 4.8,
    tags: ["headphone", "wireless", "noise-canceling"]
  },
  {
    id: 7,
    name: "AirPods Pro 3",
    price: 24999,
    category: "Audio",
    brand: "Apple",
    stock: 30,
    rating: 4.7,
    tags: ["earbuds", "apple", "wireless"]
  },
  {
    id: 8,
    name: "Dell 27 Monitor",
    price: 28999,
    category: "Electronics",
    brand: "Dell",
    stock: 6,
    rating: 4.3,
    tags: ["monitor", "4k", "display"]
  },
  {
    id: 9,
    name: "Logitech MX Master 3S",
    price: 8999,
    category: "Accessories",
    brand: "Logitech",
    stock: 21,
    rating: 4.6,
    tags: ["mouse", "wireless", "productivity"]
  },
  {
    id: 10,
    name: "iPad Air",
    price: 59999,
    category: "Electronics",
    brand: "Apple",
    stock: 10,
    rating: 4.5,
    tags: ["tablet", "apple", "portable"]
  }
];

// TASK 37
// Get all products that cost more than 30000.

const getpro= products.filter((product) => {
    return product.price > 30000;
});
console.log(getpro);

// TASK 38
// Get all products that cost less than 10000.

const less = products.filter((product) => {
    return product.price < 10000;
});
console.log(less);

// TASK 39
// Get all products that belong to the Electronics category.

const elepro = products.filter((product) => {
    return product.category === "Electronics";
});
console.log(elepro);

// TASK 40
// Get all Apple products.

const apppro = products.filter((product) => {
    return product.brand === "Apple";
});
console.log(apppro);

// TASK 41
// Get all products that are currently in stock.

const instock = products.filter((product) => {
    return product.stock > 0;
});
console.log(instock);

// TASK 42
// Get all products that are out of stock.

const outstock = products.filter((product) => {
    return product.stock === 0;
});
console.log(outstock);

// TASK 43
// Get all products with a rating greater than or equal to 4.7.

const rate = products.filter((product) => {
    return product.rating >= 4.7;
});
console.log(rate);

// TASK 44
// Get all products that have "wireless" inside their tags.

const wire = products.filter((product) => {
    return product.tags.includes("wireless");
});
console.log(wire);

// TASK 45
// Get all Apple products that are currently in stock.

const appstock = products.filter((product) => {
    return product.brand === "Apple" && product.stock > 0;
});
console.log(appstock);

// TASK 46
// Get all products that are either:

// - Electronics
// OR
// - Audio

const device = products.filter((product) => {
    return product.category === "Electronics" || product.category === "Audio";
});
console.log(device);