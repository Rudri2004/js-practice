
const numbers = [12, 5, 8, 21, 16, 3, 10, 7];


// 1. Find all even numbers.

const calc1 = numbers.filter((number) => {
    return number % 2 === 0;
});
console.log(calc1);

// 2. Find all odd numbers.

const calc2 = numbers.filter((number) => {
    return number % 2 !== 0;
});
console.log(calc2);

// 3. Find numbers greater than 10.

const calc3 = numbers.filter((number) => {
    return number > 10;
});
console.log(calc3);

// 4. Find the first number greater than 15.
const calc4 = numbers.find((number) => {
    return number > 15;
});
console.log(calc4);

// 5. Calculate the total of all numbers.

const calc5 = numbers.reduce((total, number) => {
    return total + number;
}, 0);
console.log(calc5);

// 6. Calculate the average number.

const total = numbers.reduce((sum, number) => {
    return sum + number;
}, 0);
const calc6 = total / numbers.length;

console.log(calc6);

// 7. Find the highest number.

const calc7 = numbers.reduce((highest, number) => {
    if (number > highest) {
        return number;
    }

    return highest;
});
console.log(calc7);

// 8. Find the lowest number.

const calc8 = numbers.reduce((lowest, number) => {
    if (number < lowest) {
        return number;
    }

    return lowest;
});
console.log(calc8);
