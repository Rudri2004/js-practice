
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


// TASK 86
// Create a new array containing the top 3 highest-rated products.

// Sort by rating first and then take the first 3.

// Do not modify the original array.

const highrate = [...products]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);
console.log(highrate);

// TASK 87
// Find the 3 most expensive products that are currently in stock.

// Return only:

// {
//   name,
//   price,
//   stock
// }

const expstock = products
    .filter((product) => {
        return product.stock > 0;
    })
    .sort((a, b) => b.price - a.price)
    .slice(0, 3)
    .map(({ name, price, stock }) => {
        return {
            name,
            price,
            stock
        };
    });
console.log(expstock);

// TASK 88
// Find all Apple products that cost more than 50000.

// Return only:

// {
//   name,
//   price,
//   rating
// }
const morecost = products
    .filter((product) => {
        return product.brand === "Apple" &&
               product.price > 50000;
    })
    .map(({ name, price, rating }) => {
        return {
            name,
            price,
            rating
        };
    });
console.log( morecost );

// TASK 89
// Calculate the total inventory value for each category.

// Expected structure:

// {
//   Electronics: 0,
//   Accessories: 0,
//   Audio: 0
// }
const inventory = products.reduce((categories, product) => {
    const value = product.price * product.stock;

    if (categories[product.category]) {
        categories[product.category] += value;
    } else {
        categories[product.category] = value;
    }

    return categories;
}, {});
console.log(inventory);

// TASK 90
// Create a product summary object with:

// {
//   totalProducts,
//   totalStock,
//   totalInventoryValue,
//   averageRating,
//   mostExpensiveProduct,
//   cheapestProduct
// }


// TASK 91
// Create a new array containing only products whose:

// - stock > 0
// - rating >= 4.5
// - price < 50000

// Return only:

// {
//   name,
//   price,
//   rating
// }
const condition = products
    .filter((product) => {
        return product.stock > 0 &&
               product.rating >= 4.5 &&
               product.price < 50000;
    })
    .map(({ name, price, rating }) => {
        return {
            name,
            price,
            rating
        };
    });
console.log(condition);

// TASK 92
// Create a new array where every product contains:

// {
//   id,
//   name,
//   category,
//   price,
//   isAvailable,
//   priceLevel
// }

// Rules:

// isAvailable:
// - true when stock > 0
// - false when stock === 0

// priceLevel:
// - "LOW" when price < 10000
// - "MEDIUM" when price >= 10000 and price < 50000
// - "HIGH" when price >= 50000
