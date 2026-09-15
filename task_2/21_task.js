const orders = [
    {
        id: 1,
        items: [
            { name: "Phone", price: 30000, quantity: 1 },
            { name: "Cover", price: 500, quantity: 2 }
        ]
    },
    {
        id: 2,
        items: [
            { name: "Laptop", price: 80000, quantity: 1 },
            { name: "Mouse", price: 1200, quantity: 2 }
        ]
    }
];


// 1. Calculate the total amount of each order
const orderTotals = orders.map(order => {
    const total = order.items.reduce((sum, item) => {
        return sum + item.price * item.quantity;
    }, 0);

    return {
        orderId: order.id,
        totalAmount: total
    };
});
console.log(orderTotals);


// 2. Calculate the total revenue from all orders
const totalRevenue = orderTotals.reduce((total, order) => {
    return total + order.totalAmount;
}, 0);
console.log(totalRevenue);


// 3. Find the most expensive item
const allItems = orders.flatMap(order => order.items);

const mostExpensiveItem = allItems.reduce((highest, item) => {
    return item.price > highest.price ? item : highest;
});
console.log(mostExpensiveItem);


// 4. Find the total quantity of all products sold
const totalQuantity = allItems.reduce((total, item) => {
    return total + item.quantity;
}, 0);
console.log(totalQuantity);


// 5. Create one flat array containing all order items

console.log(allItems);