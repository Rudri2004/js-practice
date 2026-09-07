const cart = [
  { productId: 1, name: 'Phone', price: 30000, quantity: 1 },
  { productId: 2, name: 'Mouse', price: 1200, quantity: 2 },
  { productId: 3, name: 'Keyboard', price: 2500, quantity: 1 },
];

// 1. Calculate subtotal of every cart item
const cartsubttl = cart.map(item => ({
  ...item,
  subtotal: item.price * item.quantity
}));
console.log("Cart with subtotals:", cartsubttl);

// 2. Calculate total cart amount
const totalcartamt =cartsubttl .reduce(
  (total, item) => total + item.subtotal,
  0
);
console.log("Total cart amount:", totalcartamt);

// 3. Calculate total number of products
const totalProducts = cart.reduce(
  (total, item) => total + item.quantity,
  0
);
console.log("Total products:", totalProducts);

// 4. Find cart item with the highest subtotal
const highitem = cartsubttl.reduce(
  (highest, item) =>
    item.subtotal > highest.subtotal ? item : highest
);
console.log("Highest subtotal item:", highitem);

// 5. Apply 10% discount if total is greater than 30000
const discount = totalcartamt > 30000
  ? totalcartamt * 0.10
  : 0;
console.log("Discount:", discount);

// 6. Calculate final amount after discount
const finalAmt = totalcartamt- discount;
console.log("Final amount:", finalAmt);
