const orders = [
  { id: 1, customer: 'Amit', amount: 1200, status: 'delivered' },
  { id: 2, customer: 'Rahul', amount: 2500, status: 'pending' },
  { id: 3, customer: 'Amit', amount: 1800, status: 'delivered' },
  { id: 4, customer: 'Priya', amount: 900, status: 'cancelled' },
  { id: 5, customer: 'Rahul', amount: 3200, status: 'delivered' },
];

// 1. Find all delivered orders
const delivord= orders.filter(
  order => order.status === 'delivered'
);
console.log("1. Delivered orders:", delivord);

// 2. Calculate total delivered order amount
const totalDelivamt = delivord.reduce(
  (total, order) => total + order.amount,
  0
);
console.log("2. Total delivered amount:", totalDelivamt);

// 3. Count orders by status
const orderByStatus = orders.reduce((result, order) => {
  result[order.status] = (result[order.status] || 0) + 1;
  return result;
}, {});
console.log("3. Orders by status:", orderByStatus);

// 4. Calculate total order amount for each customer
const totalByCustomer = orders.reduce((result, order) => {
  result[order.customer] = (result[order.customer] || 0) + order.amount;
  return result;
}, {});
console.log("4. Total by customer:", totalByCustomer);

// 5. Find the customer with the highest total order amount
const highcust = Object.entries(totalByCustomer)
  .reduce((highest, current) =>
    current[1] > highest[1] ? current : highest
  );
console.log("5. Highest spending customer:", highcust );

// 6. Find customers who have more than one order
const orderCnt = orders.reduce((result, order) => {
  result[order.customer] = (result[order.customer] || 0) + 1;
  return result;
}, {});

const custmlp = Object.entries(orderCnt)
  .filter(([customer, count]) => count > 1)
  .map(([customer]) => customer);
console.log("6. Customers with multiple orders:", custmlp);
