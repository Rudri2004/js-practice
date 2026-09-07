const expenses = [
  { category: 'Food', amount: 300 },
  { category: 'Food', amount: 500 },
  { category: 'Travel', amount: 700 },
  { category: 'Travel', amount: 300 },
  { category: 'Shopping', amount: 900 },
];


// The function should:

// 1. Accept the expense array.
// 2. Accept a category.
// 3. Return the total amount for that category.
// 4. Return 0 if the category does not exist.



// Reusable function
function getCategoryTotal(expenses, category) {
  return expenses
    .filter(expense => expense.category === category)
    .reduce((total, expense) => total + expense.amount, 0);
}


// Food
console.log("Food total:",getCategoryTotal(expenses, 'Food'));


// Travel
console.log( "Travel total:",getCategoryTotal(expenses, 'Travel'));


// Shopping
console.log("Shopping total:", getCategoryTotal(expenses, 'Shopping'));


// Category does not exist
console.log("Entertainment total:",getCategoryTotal(expenses, 'Entertainment'));
