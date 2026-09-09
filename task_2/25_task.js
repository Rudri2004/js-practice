const products = [
  { id: 1, name: 'Phone', category: 'Electronics', price: 30000 },
  { id: 2, name: 'Laptop', category: 'Electronics', price: 80000 },
  { id: 3, name: 'Shirt', category: 'Clothing', price: 1500 },
];

const cart = [
  { productId: 1, quantity: 2 },
  { productId: 3, quantity: 3 },
];


// 1. Match cart products with product details
const matchedCart = cart.map(cartItem => {
  const product = products.find(
    product => product.id === cartItem.productId
  );

  return {
    ...product,
    quantity: cartItem.quantity
  };
});

console.log("1. Matched cart products:", matchedCart);


// 2. Calculate subtotal for each cart item
const cartWithSubtotal = matchedCart.map(item => {
  return {
    ...item,
    subtotal: item.price * item.quantity
  };
});

console.log("2. Cart items with subtotal:", cartWithSubtotal);


// 3. Calculate total cart value
const totalCartValue = cartWithSubtotal.reduce(
  (total, item) => total + item.subtotal,
  0
);

console.log("3. Total cart value:", totalCartValue);


// 4. Find the most expensive cart item
const mostExpensiveCartItem = cartWithSubtotal.reduce(
  (highest, item) =>
    item.subtotal > highest.subtotal ? item : highest
);

console.log("4. Most expensive cart item:", mostExpensiveCartItem);


// 5. Create final array with required fields
const finalCart = cartWithSubtotal.map(item => {
  return {
    productId: item.id,
    name: item.name,
    quantity: item.quantity,
    price: item.price,
    subtotal: item.subtotal
  };
});

console.log("5. Final cart:", finalCart);
