
const products = [
  { id: 1, name: 'Phone', category: 'Electronics', price: 30000, rating: 4.5, stock: 5 },
  { id: 2, name: 'Laptop', category: 'Electronics', price: 80000, rating: 4.8, stock: 2 },
  { id: 3, name: 'Shirt', category: 'Clothing', price: 1500, rating: 4.1, stock: 10 },
  { id: 4, name: 'Shoes', category: 'Clothing', price: 3000, rating: 4.3, stock: 0 },
  { id: 5, name: 'Chair', category: 'Furniture', price: 8000, rating: 4.6, stock: 4 },
];

// Create the JavaScript logic for a product listing page.
let cart = [];

// Requirements:

// 1. Display all products.

function displayProducts(productList) {
    if (productList.length === 0) {
        console.log("No products found.");
        return;
    }

    productList.forEach(product => {
        console.log(
            `${product.name} | Category: ${product.category} | Price: ₹${product.price} | Rating: ${product.rating} | Stock: ${product.stock}`
        );
    });
}
console.log("All Products:");
displayProducts(products);

// 2. Search products by name.
      function searchByName(searchText) {
          return products.filter(product =>
              product.name.toLowerCase().includes(searchText.toLowerCase())
          );
      }
      console.log("\nSearch result for 'phone':");
      displayProducts(searchByName("phone"));

// 3. Filter products by category.

function filterByCategory(category) {
    return products.filter(product =>
        product.category.toLowerCase() === category.toLowerCase()
    );
}
console.log("\nElectronics products:");
displayProducts(filterByCategory("Electronics"));

// 4. Filter products by minimum price.
function filterByMinPrice(minPrice) {
    return products.filter(product =>
        product.price >= minPrice
    );
}
console.log("\nProducts with price above ₹5000:");
displayProducts(filterByMinPrice(5000));


// 5. Filter products by maximum price.
function filterByMaxPrice(maxPrice) {
    return products.filter(product =>
        product.price <= maxPrice
    );
}
console.log("\nProducts with price below ₹10000:");
displayProducts(filterByMaxPrice(10000));


// 6. Sort products by price ascending.
function sortByPriceAscending() {
    return [...products].sort((a, b) => a.price - b.price);
}
console.log("\nPrice ascending:");
displayProducts(sortByPriceAscending());

// 7. Sort products by price descending.
function sortByPriceDescending() {
    return [...products].sort((a, b) => b.price - a.price);
}
console.log("\nPrice descending:");
displayProducts(sortByPriceDescending());

// 8. Sort products by rating.
function sortByRating() {
    return [...products].sort((a, b) => b.rating - a.rating);
}
console.log("\nHighest rating first:");
displayProducts(sortByRating());

// 9. Show only products that are in stock.
function getInStockProducts() {
    return products.filter(product =>
        product.stock > 0
    );
}
console.log("\nProducts in stock:");
displayProducts(getInStockProducts());

// 10. Find the most expensive product.
function getMostExpensiveProduct() {
    return products.reduce((mostExpensive, product) =>
        product.price > mostExpensive.price ? product : mostExpensive
    );
}
console.log("\nMost expensive product:");
console.log(getMostExpensiveProduct());

// 11. Find the highest-rated product.
function getHighestRatedProduct() {
    return products.reduce((highestRated, product) =>
        product.rating > highestRated.rating ? product : highestRated
    );
}
console.log("\nHighest-rated product:");
console.log(getHighestRatedProduct());

// 12. Calculate the total inventory value.
function calculateInventoryValue() {
    return products.reduce((total, product) =>
        total + product.price * product.stock, 0
    );
}
console.log("\nTotal inventory value:");
console.log("₹", calculateInventoryValue());

// 13. Calculate the number of products in each category.
function countProductsByCategory() {
    return products.reduce((categoryCount, product) => {
        categoryCount[product.category] =
            (categoryCount[product.category] || 0) + 1;

        return categoryCount;
    }, {});
}
console.log("\nTotal inventory value:");
console.log("₹", calculateInventoryValue());

// 14. Add a product to a cart.
function addToCart(productId) {
    const product = products.find(product =>
        product.id === productId
    );

    if (!product) {
        console.log("Product not found.");
        return;
    }

    if (product.stock === 0) {
        console.log(`${product.name} is out of stock.`);
        return;
    }

    const existingProduct = cart.find(item =>
        item.id === productId
    );

    // 15. Prevent duplicate products in the cart.
    if (existingProduct) {
        increaseQuantity(productId);
        return;
    }

    cart = [
        ...cart,
        {
            ...product,
            quantity: 1
        }
    ];

    console.log(`${product.name} added to cart.`);
}


console.log("\nAdding products to cart:");
addToCart(1);
addToCart(2);
addToCart(1);

// 16. Increase product quantity.

function increaseQuantity(productId) {
    cart = cart.map(item => {
        if (item.id === productId) {
            const originalProduct = products.find(product =>
                product.id === productId
            );

            if (item.quantity < originalProduct.stock) {
                return {
                    ...item,
                    quantity: item.quantity + 1
                };
            }

            console.log("Cannot increase quantity beyond stock.");
        }

        return item;
    });
}
increaseQuantity(1);
// 17. Decrease product quantity.
function decreaseQuantity(productId) {
    cart = cart
        .map(item => {
            if (item.id === productId) {
                return {
                    ...item,
                    quantity: item.quantity - 1
                };
            }

            return item;
        })
        .filter(item => item.quantity > 0);
}
decreaseQuantity(2);

// 18. Remove a product from the cart.
function removeFromCart(productId) {
    cart = cart.filter(item =>
        item.id !== productId
    );

    console.log("Product removed from cart.");
}
//removeFromCart(1);

// 19. Calculate cart total.
function calculateCartTotal() {
    return cart.reduce((total, item) =>
        total + item.price * item.quantity, 0
    );
}

// 20. Calculate total number of items in the cart.
function calculateTotalItems() {
    return cart.reduce((total, item) =>
        total + item.quantity, 0
    );
}
console.log("\nCart details:");
displayCart();

// 21. Apply a 10% discount when cart total is above 50000.
function calculateDiscount() {
    const cartTotal = calculateCartTotal();

    if (cartTotal > 50000) {
        return cartTotal * 0.10;
    }

    return 0;
}


// Calculate final cart amount
function calculateFinalAmount() {
    const cartTotal = calculateCartTotal();
    const discount = calculateDiscount();

    return cartTotal - discount;
}
// 22. Keep the original products array unchanged.
console.log("\nOriginal products array:");
console.log(products);

// 23. Handle an empty search result.
// 24. Handle an empty cart.
function displayCart() {
    if (cart.length === 0) {
        console.log("Your cart is empty.");
        return;
    }

    console.log("Cart Products:");

    cart.forEach(item => {
        console.log(
            `${item.name} | Quantity: ${item.quantity} | Price: ₹${item.price} | Total: ₹${item.price * item.quantity}`
        );
    });

    console.log("Total items:", calculateTotalItems());
    console.log("Cart total: ₹", calculateCartTotal());
    console.log("Discount: ₹", calculateDiscount());
    console.log("Final amount: ₹", calculateFinalAmount());
}

// 25. Split the logic into reusable functions.

//output:
//used in 3 program