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
// TASK 16
// From the first product, extract:

// name
// price
// brand


const {name, price,brand} = products[0];
console.log(name);
console.log(price);
console.log(brand);


// TASK 17
// From every product, extract only:

// id
// name
// price

const spePro = products.map(({ id, name, price }) => {
    return {
        id,
        name,
        price
    };
});

console.log(spePro);

// TASK 18
// Extract the following properties from every product:

// name
// category
// rating
// Create a new array containing the extracted information.
const somePro = products.map(({ name,category,rating }) => {
    return {
        name,
        category,
        rating
    };
});

console.log(somePro);




// TASK 19
// For every product, create an object with this structure:

// {
//   productName,
//   productPrice,
//   productBrand
// }

const newProducts = products.map(({
    name: productName,
    price: productPrice,
    brand: productBrand
}) => {
    return {
        productName,
        productPrice,
        productBrand
    };
});

console.log(newProducts);
// TASK 20
// Create a new array containing only the product names using object
// destructuring. 

const proName = products.map(({ name }) => {
    return name;
});

console.log(proName);