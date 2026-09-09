const users = [
  { id: 1, name: 'John', email: 'john@example.com' },
  { id: 2, name: 'Alice', email: 'alice@example.com' },
  { id: 3, name: 'Bob', email: 'bob@example.com' },
];

const orders = [
  { id: 101, userId: 1, amount: 1200 },
  { id: 102, userId: 2, amount: 2000 },
  { id: 103, userId: 1, amount: 1500 },
];


// 1. Find users who have placed orders
const usersWithOrders = users.filter(user =>
  orders.some(order => order.userId === user.id)
);

console.log("1. Users who have placed orders:", usersWithOrders);


// 2. Create an array containing their email addresses
const orderUserEmails = usersWithOrders.map(user => user.email);

console.log("2. Email addresses:", orderUserEmails);


// 3. Find users who have not placed any orders
const usersWithoutOrders = users.filter(user =>
  !orders.some(order => order.userId === user.id)
);

console.log("3. Users without orders:", usersWithoutOrders);


// 4. Calculate total amount spent by each user
const totalSpentByUser = users.map(user => {
  const total = orders
    .filter(order => order.userId === user.id)
    .reduce((sum, order) => sum + order.amount, 0);

  return {
    name: user.name,
    totalSpent: total
  };
});

console.log("4. Total spent by each user:", totalSpentByUser);


// 5. Find the user who spent the most
const highestSpender = totalSpentByUser.reduce((highest, user) =>
  user.totalSpent > highest.totalSpent ? user : highest
);

console.log("5. User who spent the most:", highestSpender);
