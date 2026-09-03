const transactions = [
    { id: 1, amount: 1200, type: 'debit' },
    { id: 2, amount: 5000, type: 'credit' },
    { id: 3, amount: 800, type: 'debit' },
    { id: 4, amount: 2500, type: 'credit' },
    { id: 5, amount: 600, type: 'debit' },
];


// 1. Calculate total credit amount.

const calctot = transactions.reduce((total, transaction) => {

    if (transaction.type === "credit") {
        return total + transaction.amount;
    }

    return total;

}, 0);
console.log( calctot );


// 2. Calculate total debit amount.

const totdebit = transactions.reduce((total, transaction) => {

    if (transaction.type === "debit") {
        return total + transaction.amount;
    }

    return total;

}, 0);
console.log(totdebit);


// 3. Calculate the final balance.
// Credit is added and debit is subtracted.

const finbal = transactions.reduce((balance, transaction) => {

    if (transaction.type === "credit") {
        return balance + transaction.amount;
    }

    return balance - transaction.amount;

}, 0);
console.log(finbal);


// 4. Find the largest transaction.

const lartran = transactions.reduce((largest, transaction) => {

    if (transaction.amount > largest.amount) {
        return transaction;
    }

    return largest;

});
console.log(lartran);


// 5. Find all debit transactions above 700.

const debittran = transactions.filter((transaction) => {

    return transaction.type === "debit" &&
           transaction.amount > 700;

});
console.log(debittran);


// 6. Find the average transaction amount.

const totalAmount = transactions.reduce((total, transaction) => {

    return total + transaction.amount;

}, 0);

const avgtran = totalAmount / transactions.length;
console.log(avgtran);