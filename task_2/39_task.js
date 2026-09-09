const cartItems = [
  { productId: 1, name: 'Phone', quantity: 1 },
  { productId: 2, name: 'Mouse', quantity: 2 },
  { productId: 1, name: 'Phone', quantity: 3 },
  { productId: 3, name: 'Keyboard', quantity: 1 },
  { productId: 2, name: 'Mouse', quantity: 1 },
];

// 1, 2, 3. Remove duplicates, merge products,
// and add quantities together.
const mergedItems = cartItems.reduce((acc, item) => {
  const existingProduct = acc.find(
    (product) => product.productId === item.productId
  );

  if (existingProduct) {
    existingProduct.quantity += item.quantity;
  } else {
    acc.push({ ...item });
  }

  return acc;
}, []);

// 4. Find the product with the highest total quantity.
const highestQuantityProduct = mergedItems.reduce((max, item) => {
  return item.quantity > max.quantity ? item : max;
}, mergedItems[0]);

// 5. Print the results.
console.log("Merged Products:");
console.log(mergedItems);

console.log("Highest Quantity Product:");
console.log(highestQuantityProduct);
