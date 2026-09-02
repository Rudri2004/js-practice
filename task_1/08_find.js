
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
// TASK 47
// Find the product with id 7.

const proid = products.find((product) => {
    return product.id === 7;
});
console.log(proid);

// TASK 48
// Find the first product with a price greater than 50000.

const firpro = products.find((product) => {
    return product.price > 50000;
});
console.log(firpro);

// TASK 49
// Find the index of the product with id 8.

const indexpro = products.findIndex((product) => {
    return product.id === 8;
});
console.log(indexpro);

// TASK 50
// Check whether at least one product is out of stock.

const prostock = products.some((product) => {
    return product.stock === 0;
});
console.log(prostock);

// TASK 51
// Check whether at least one product costs more than 100000.

const costpro = products.some((product) => {
    return product.price > 100000;
});
console.log(costpro);

// TASK 52
// Check whether every product has a rating greater than 4.

const everypro = products.every((product) => {
    return product.rating > 4;
});
console.log(everypro);

// TASK 53
// Check whether every product has at least one tag.

const lasttag = products.every((product) => {
    return product.tags.length > 0;
});
console.log(lasttag);