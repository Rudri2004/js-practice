const products = [
   { id: 1, name: "iPhone 15", category: "smartphone", price: 799 },
   { id: 2, name: "Samsung Galaxy S24", category: "smartphone", price: 899 },
   { id: 3, name: "MacBook Air", category: "laptop", price: 1099 },
   { id: 4, name: "Dell XPS 15", category: "laptop", price: 1299 },
   { id: 5, name: "AirPods Pro", category: "audio", price: 249 },
   { id: 6, name: "Sony WH-1000XM5", category: "audio", price: 399 },
   { id: 7, name: "iPad Air", category: "tablet", price: 599 },
   { id: 8, name: "Galaxy Tab S9", category: "tablet", price: 699 },
  { id: 9, name: "Google Pixel 9", category: "smartphone", price: 799 }
 ]; 

 //task: group product by category 

 const grouppro = products.reduce((res, product) => {
  const category = product.category;

  if (!res[category]) {
    res[category] = [];
  }

  res[category].push(product);

  return res;
}, {});

console.log(grouppro);

//count products in each category

const catCount = products.reduce((res, product) => {
  const category = product.category;

  if (!res[category]) {
    res[category] = 0;
  }

  res[category]++;

  return res;
}, {});

console.log(catCount);

