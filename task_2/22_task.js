const transactions = [
  { id: 1, amount: 120.50, type: 'debit', category: 'Shopping', date: '2024-01-15' },
  { id: 2, amount: 80.20, type: 'credit', category: 'Salary', date: '2024-01-10' },
  { id: 3, amount: 25.00, type: 'debit', category: 'Food', date: '2024-01-08' },
  { id: 4, amount: 150.75, type: 'debit', category: 'Entertainment', date: '2024-01-20' },
  { id: 5, amount: 200.00, type: 'credit', category: 'Bonus', date: '2024-01-05' },
  { id: 6, amount: 45.50, type: 'debit', category: 'Utilities', date: '2024-01-18' },
  { id: 7, amount: 90.00, type: 'credit', category: 'Refund', date: '2024-01-12' },
  { id: 8, amount: 35.25, type: 'debit', category: 'Groceries', date: '2024-01-22' },
  { id: 9, amount: 60.80, type: 'credit', category: 'Gift', date: '2024-01-03' },
  { id: 10, amount: 70.10, type: 'debit', category: 'Health', date: '2024-01-14' },
];


// 1. Calculate the total balance
const totalCredit = transactions
  .filter(transaction => transaction.type === 'credit')
  .reduce((total, transaction) => total + transaction.amount, 0);

const totalDebit = transactions
  .filter(transaction => transaction.type === 'debit')
  .reduce((total, transaction) => total + transaction.amount, 0);

const totalBalance = totalCredit - totalDebit;

console.log("1. Total balance:", totalBalance);


// 2. Filter transactions after 2024-01-10
const transactionsAfterDate = transactions.filter(
  transaction => transaction.date > '2024-01-10'
);

console.log("2. Transactions after 2024-01-10:", transactionsAfterDate);


// 3. Find the average amount of credit transactions
const creditTransactions = transactions.filter(
  transaction => transaction.type === 'credit'
);

const totalCreditAmount = creditTransactions.reduce(
  (total, transaction) => total + transaction.amount,
  0
);

const averageCreditAmount =
  totalCreditAmount / creditTransactions.length;

console.log("3. Average credit amount:", averageCreditAmount);


// 4. Sort transactions by amount ascending
const sortedTransactions = [...transactions].sort(
  (a, b) => a.amount - b.amount
);

console.log("4. Transactions sorted by amount:", sortedTransactions);


// 5. Calculate total spending for each debit category
const debitCategorySpending = transactions
  .filter(transaction => transaction.type === 'debit')
  .reduce((result, transaction) => {
    result[transaction.category] =
      (result[transaction.category] || 0) + transaction.amount;

    return result;
  }, {});

console.log("5. Spending by debit category:", debitCategorySpending);


// 6. Find the category with the highest total spending
const highestSpendingCategory = Object.entries(
  debitCategorySpending
).reduce((highest, current) =>
  current[1] > highest[1] ? current : highest
);

console.log( "6. Category with highest spending:", highestSpendingCategory);
