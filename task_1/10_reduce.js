
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
// TASK 59
// Calculate the total price of all products.

const calprice = products.reduce((total, product) => {
    return total + product.price;
}, 0);
console.log(calprice);

// TASK 60
// Calculate the total stock across all products.

const totstock = products.reduce((total, product) => {
    return total + product.stock;
}, 0);
console.log(totstock);

// TASK 61
// Find the most expensive product.

const exppro = products.reduce((expensive, product) => {
    if (product.price > expensive.price) {
        return product;
    }

    return expensive;
});
console.log(exppro);

// TASK 62
// Find the cheapest product.

const cheappro = products.reduce((cheap, product) => {
    if (product.price < cheap.price) {
        return product;
    }

    return cheap;
});
console.log(cheappro);

// TASK 63
// Calculate the average product rating.

const totalRating = products.reduce((total, product) => {
    return total + product.rating;
}, 0);

const avgpro = totalRating / products.length;
console.log(avgpro);

// TASK 64
// Calculate the total value of inventory.

// Formula:

// price × stock

const inventorypro = products.reduce((total, product) => {
    return total + (product.price * product.stock);
}, 0);
console.log(inventorypro);

// TASK 65
// Create an object containing the total number of products in each
// category.

// Expected structure:

// {
//   Electronics: 0,
//   Accessories: 0,
//   Audio: 0
// }


// TASK 66
// Create an object containing the total stock for each category.

// Expected structure:

// {
//   Electronics: 0,
//   Accessories: 0,
//   Audio: 0
// }
