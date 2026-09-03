
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


// TASK 93
// Given the following code:

// const updatedProducts = products;

// Change the price of one product using updatedProducts.

// Observe what happens to products.

// Then rewrite the operation correctly so that products remains unchanged.
const updatedProducts = products.map((product) => {
    if (product.id === 1) {
        return {
            ...product,
            price: 50000
        };
    }

    return product;
});
console.log(products);

// TASK 94
// Create a deep immutable update for product id 1 where the tags array
// is changed from:

// ["laptop", "apple", "premium"]

// to:

// ["laptop", "apple", "premium", "m4"]

const tagarray = products.map((product) => {
    if (product.id === 1) {
        return {
            ...product,
            tags: [...product.tags, "m4"]
        };
    }

    return product;
});
console.log(tagarray);

// TASK 95
// Create a new products array where the "wireless" tag is removed from
// every product that contains it.

// Do not mutate the existing tags arrays.

const wirelesstag = products.map((product) => {
    if (product.tags.includes("wireless")) {
        return {
            ...product,
            tags: product.tags.filter((tag) => {
                return tag !== "wireless";
            })
        };
    }

    return product;
});
console.log(wirelesstag);

// TASK 96
// Create a new products array where every product receives a copied
// tags array.

// Verify that changing a tag in the new array does not change the
// original product's tags.


const copytag = products.map((product) => {
    return {
        ...product,
        tags: [...product.tags]
    };
});
console.log(copytag);

copytag[0].tags[0] = "changed";

console.log("New Product Tags:");
console.log(copytag[0].tags);

console.log("Original Product Tags:");
console.log(products[0].tags);