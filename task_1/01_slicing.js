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

//slice(strat,end): used for create a new array without changing the original array.

// TASK 1: Get the first 5 products from the products array without modifying the original array.


const fivepro = products.slice(0,5);
console.log(fivepro);


//TASK 2 Get the last 3 products from the products array without modifying the original array.

const threepro = products.slice(7,10);// slice(-3)
console.log(threepro);

//TASK 3 Get products from index 2 to index 6.

const getpro = products.slice(2,7);
console.log(getpro);

//TASK 4 Create a new array containing only products at even indexes.

const evenpro =[];
for(let index=0; index<products.length;index++){
    if (index%2==0){

        evenpro.push(products[index]);
        
    }
    
}
console.log(evenpro);

//TASK 5 Create a new array containing only products at odd indexes.

const oddpro =[];
for(let index=0; index<products.length;index++){
    if (index%2!==0){

        oddpro.push(products[index]);
        
    }
    
}
console.log(oddpro);

//TASK 6 Get the first product, last product, and all products between them using array destructuring.
// Destructuring means taking values from an array and putting them into separate variables. const [variable1, variable2, variable3] = array;

const [first, ...remaining] = products;
console.log(first);
console.log(remaining);



//TASK 7 Create a new array that skips the first 2 and last 2 products.

const skippro = products.slice(2,-2);
 console.log(skippro);

//  TASK 8 Create a new array containing the first 3 products and another array  containing the remaining products.

const firstThree = products.slice(0, 3);
const remainingPro = products.slice(3);

console.log(firstThree);
console.log(remainingPro);

