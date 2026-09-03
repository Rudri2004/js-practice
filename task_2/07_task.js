const expenses = [
    { category: 'Food', amount: 300 },
    { category: 'Travel', amount: 500 },
    { category: 'Food', amount: 250 },
    { category: 'Shopping', amount: 700 },
    { category: 'Travel', amount: 300 },
    { category: 'Food', amount: 150 },
];


// 1. Filter all Food expenses.

const foodexp = expenses.filter((expense) => {

    return expense.category === "Food";

});
console.log(foodexp);


// 2. Calculate total Food expense.

const totfoodexp = expenses.reduce((total, expense) => {

    if (expense.category === "Food") {
        return total + expense.amount;
    }

    return total;

}, 0);
console.log(totfoodexp);

// 3. Calculate total Travel expense.

const tottra = expenses.reduce((total, expense) => {

    if (expense.category === "Travel") {
        return total + expense.amount;
    }

    return total;

}, 0);
console.log(tottra);

// 4. Calculate total Shopping expense.

const totexp = expenses.reduce((total, expense) => {

    if (expense.category === "Shopping") {
        return total + expense.amount;
    }

    return total;

}, 0);
console.log(totexp);


// 5. Calculate total expense for every category.

const expcat = expenses.reduce((categoryTotal, expense) => {

    if (categoryTotal[expense.category]) {
        categoryTotal[expense.category] += expense.amount;
    } else {
        categoryTotal[expense.category] = expense.amount;
    }

    return categoryTotal;

}, {});
console.log(expcat);


// 6. Find the category with the highest total expense.

const highexp = Object.entries(expcat).reduce(
    (highest, category) => {

        if (category[1] > highest[1]) {
            return category;
        }

        return highest;

    }
);
console.log(highexp);