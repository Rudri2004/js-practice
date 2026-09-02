
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


// TASK 9 Create a new products array where the product with id 3 has its price changed to 69999.
// The original products array must remain unchanged.

const newpro = products.map((product) => {
    if (product.id===3){
        return{
            ...product,
            price: 69999
        };
    };
    return product;
});
console.log("New Products:");
console.log(newpro);

// TASK 10
// Create a new products array where the stock of product id 5 is changed from 0 to 15.
// Do not mutate the original object.

const stockpro = products.map((product) => {
    if (product.id===5){
        return{
            ...product,
            stock:15
        };
    };
    return product;
});
console.log("New Products:");
console.log(stockpro);


//TASK 11 Create a new products array where every product gets a new property:

// discount: 10

// Do not modify the original products.

const dispro = products.map((product) => {
   
        return{
            ...product,
            discount:10
        };

});
console.log("New Products:");
console.log(dispro);


// TASK 12 Create a new products array where only Apple products receive:

// isApple: true

// All other products should receive:

// isApple: false


const applepro = products.map((product) => {
   
        return{
            ...product,
          isApple: product.brand === "Apple" 
        };
 
  
});
console.log("New Products:");
console.log(applepro);

// TASK 13 Create a new products array where product id 4 is removed.

// The original products array must remain unchanged.

// const newProducts = products.filter((product) => {
//     return product.id !== 4;
// });
// console.log( newProducts);

//TASK 14 Create a new products array where a new product is added at the beginning.



const newProduct= {
  id: 11,
  name: "iPhone 16 Pro",
  price: 109999,
  category: "Electronics",
  brand: "Apple",
  stock: 7,
  rating: 4.9,
  tags: ["mobile", "apple", "pro"]
};


const addfirst = [
    newProduct,
    ...products
];

console.log("New Products:");
console.log(addfirst);


// TASK 15 Create a new products array where the new product from Task 14 is added at the end.
// Do not use push().

const addlast = [
    
    ...products,
    newProduct
];

console.log("New Products:");
console.log(addlast);
