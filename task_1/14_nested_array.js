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


// TASK 81
// Create an array containing every unique tag used by all products.

// Example:

// [
//   "laptop",
//   "apple",
//   "premium",
//   ...
// ]

const unitag = products.reduce((allTags, product) => {
    product.tags.forEach((tag) => {
        if (!allTags.includes(tag)) {
            allTags.push(tag);
        }
    });

    return allTags;
}, []);
console.log(unitag);

// TASK 82
// Count how many times each tag appears across all products.

// Expected structure:

// {
//   apple: 4,
//   wireless: 4,
//   mobile: 2
// }
const counttag = products.reduce((tagCount, product) => {
    product.tags.forEach((tag) => {
        if (tagCount[tag]) {
            tagCount[tag]++;
        } else {
            tagCount[tag] = 1;
        }
    });

    return tagCount;
}, {});
console.log(counttag);

// TASK 83
// Find all products that contain both:

// "apple"

// AND

// "wireless"

// inside their tags.

const bothtag = products.filter((product) => {
    return product.tags.includes("apple") &&
           product.tags.includes("wireless");
});
console.log(bothtag);

// TASK 84
// Find all products that contain at least one of these tags:

// "mobile"
// "tablet"

const ortag = products.filter((product) => {
    return product.tags.includes("mobile") ||
           product.tags.includes("tablet");
});
console.log(ortag);

// TASK 85
// Create an object where each tag contains an array of product names
// that use that tag.

// Expected structure:

// {
//   apple: ["MacBook Air M4", "iPhone 16", ...],
//   wireless: ["Mechanical Keyboard", ...]
// }
const arraytags = products.reduce((tagProducts, product) => {
    product.tags.forEach((tag) => {
        if (!tagProducts[tag]) {
            tagProducts[tag] = [];
        }

        tagProducts[tag].push(product.name);
    });

    return tagProducts;
}, {});
console.log(arraytags);
