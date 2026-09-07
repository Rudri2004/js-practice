const orders = [
  { id: 1, amount: 1000, date: '2025-01-10' },
  { id: 2, amount: 1500, date: '2025-01-25' },
  { id: 3, amount: 900, date: '2025-02-11' },
  { id: 4, amount: 2000, date: '2025-02-20' },
  { id: 5, amount: 500, date: '2025-03-01' },
];

// 1. Find all orders from January 2025
const janord = orders.filter(order =>
  order.date.startsWith('2025-01')
);

console.log('January:', janord);


// 2. Find all orders from February 2025
const febord = orders.filter(order =>
  order.date.startsWith('2025-02')
);

console.log('February:', febord);


// 3. Group orders by month
const grpmon = orders.reduce((groups, order) => {
  const month = order.date.slice(0, 7); 

  if (!groups[month]) {
    groups[month] = [];
  }

  groups[month].push(order);

  return groups;
}, {});

console.log('Grouped:', grpmon);


// 4. Calculate total revenue for every month
const totrev = Object.entries(grpmon).reduce(
  (result, [month, monthOrders]) => {
    result[month] = monthOrders.reduce(
      (total, order) => total + order.amount,
      0
    );

    return result;
  },
  {}
);

console.log('Total Revenue:', totrev);


// 5. Calculate average order amount for every month
const avgordamt = Object.entries(grpmon).reduce(
  (result, [month, monthOrders]) => {
    const total = monthOrders.reduce(
      (sum, order) => sum + order.amount,
      0
    );

    result[month] = total / monthOrders.length;

    return result;
  },
  {}
);

console.log('Averaggge Order Amount:', avgordamt);


// 6. Find the month with the highest revenue
