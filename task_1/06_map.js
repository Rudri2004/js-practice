
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
// TASK 31 Create an array containing only product names.

const proname = products.map(({ name }) => {
    return name;
});
console.log(proname);

// TASK 32 Create an array containing:

// [
//   {
//     id,
//     name
//   }
// ]

const productDetail = products.map(({ id, name }) => {
    return {
        id,
        name
    };
});
console.log(productDetail);

// TASK 33 Create an array containing:

// [
//   {
//     name,
//     priceWithGST
//   }
// ]

// Assume GST is 18%.
const gst = products.map(({ name, price }) => {
    return {
        name,
        priceWithGST: price + (price * 18 / 100)
    };
});
console.log(gst);

// TASK 34 Create an array where every product has its price increased by 10%.

const increas = products.map((product) => {
    return {
        ...product,
        price: product.price + (product.price * 10 / 100)
    };
});
console.log(increas);

// TASK 35 Create an array containing:

// [
//   {
//     name,
//     stockStatus
//   }
// ]

// stockStatus should be:

// "In Stock" when stock > 0

// "Out of Stock" when stock === 0

const stockStatus = products.map(({ name, stock }) => {
    return {
        name,
        stockStatus: stock > 0 ? "In Stock" : "Out of Stock"
    };
});
console.log(stockStatus);

// TASK 36 Create a new array where every product contains:

// {
//   id,
//   name,
//   category,
//   price
// }

// Remove all other properties.

const selectedPro = products.map(({ id, name, category, price }) => {
    return {
        id,
        name,
        category,
        price
    };
});
console.log(selectedPro);