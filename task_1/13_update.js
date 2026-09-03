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


// TASK 76
// Increase the price of every Electronics product by 5%.

// Do not modify the original array.
const ele5 = products.map((product) => {

    if (product.category === "Electronics") {
        return {
            ...product,
            price: product.price + (product.price * 5 / 100)
        };
    }

    return product;
});
console.log(ele5);

// TASK 77
// Apply a 15% discount to every product that costs more than 50000.

// Create a new property:

// discountedPrice

const disprice = products.map((product) => {

    if (product.price > 50000) {
        return {
            ...product,
            discountedPrice: product.price - (product.price * 15 / 100)
        };
    }

    return product;
});
console.log(disprice);

// TASK 78
// Set stock to 0 for every product from the brand "Apple".

// Create a new array only.

const stockapp = products.map((product) => {

    if (product.brand === "Apple") {
        return {
            ...product,
            stock: 0
        };
    }

    return product;
});
console.log(stockapp);

// TASK 79
// Change the category of "Magic Mouse" from:

// Accessories

// to:

// Computer Accessories

// Do not modify the original data.

const magicmouse = products.map((product) => {

    if (product.name === "Magic Mouse") {
        return {
            ...product,
            category: "Computer Accessories"
        };
    }

    return product;
});
console.log(magicmouse );

// TASK 80
// Add the tag "featured" to every product with rating >= 4.7.

// Do not mutate the existing tags arrays.
const feature = products.map((product) => {

    if (product.rating >= 4.7) {
        return {
            ...product,
            tags: [...product.tags, "featured"]
        };
    }

    return product;
});
console.log(feature);