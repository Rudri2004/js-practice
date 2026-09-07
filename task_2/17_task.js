const numbers = [10, 20, 10, 30, 20, 40, 50, 30, 10];

// 1. Remove duplicate numbers
const uniqueNumbers = [...new Set(numbers)];

console.log("1. Unique numbers:", uniqueNumbers);


// 2. Count how many times each number appears
const numberCount = numbers.reduce((count, number) => {
  count[number] = (count[number] || 0) + 1;
  return count;
}, {});

console.log("2. Number count:", numberCount);


// 3. Find the number that appears most frequently
const mostFrequent = Object.entries(numberCount)
  .reduce((highest, current) =>
    current[1] > highest[1] ? current : highest
  );

console.log("3. Most frequent number:", Number(mostFrequent[0]));
console.log("   Appears:", mostFrequent[1], "times");


// 4. Find numbers that appear more than once
const repeatedNumbers = Object.entries(numberCount)
  .filter(([number, count]) => count > 1)
  .map(([number]) => Number(number));

console.log("4. Numbers appearing more than once:", repeatedNumbers);


// 5. Sort the unique numbers in ascending order
const sortedUniqueNumbers = [...uniqueNumbers].sort(
  (a, b) => a - b
);

console.log("5. Sorted unique numbers:", sortedUniqueNumbers);
