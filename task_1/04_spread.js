
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
// TASK 21
// Create a new object based on product id 1 but change its price to:

// 89999

const product1 = products.find((product) => product.id === 1);

const pro1 = {
    ...product1,
    price: 89999
};


console.log(pro1);


// TASK 22
// Create a new object based on product id 2 but change:

// stock: 50
// rating: 4.9
const product2 = products.find((product) => product.id === 2);

const pro2 = {
    ...product2,
    stock: 50,
    rating: 4.9
};


console.log(pro2);

// TASK 23
// Create a new array where every product contains:

// {
//   ...product,
//   available: true
// }

// The value of available should be false when stock is 0.

const newProduct= products.map((product) => {
    return {
        ...product,
        available: product.stock !== 0
    };
});


console.log(newProduct);
// TASK 24
// Create a new array where every product contains a new nested object:

// pricing: {
//   originalPrice,
//   finalPrice
// }

// For now, finalPrice should be equal to price.

const newProducts = products.map((product) => {
    return {
        ...product,
        pricing: {
            originalPrice: product.price,
            finalPrice: product.price
        }
    };
});

console.log("Task 24:");
console.log(newProducts);

// TASK 25
// Create a new object from product id 6 containing all existing
// properties except the tags property.
