
const temperatures = [0, 15, 30, 5, -10, 25];

// 1 & 2. Convert Celsius to Fahrenheit
const fahrenheit = temperatures.map(C => (C * 9 / 5) + 32);
console.log("Fahrenheit:", fahrenheit);

// 3. Temperatures above 20°C
const above20 = temperatures.filter(C => C > 20);
console.log( "temp above 20:", above20);

// 4. Highest Celsius temperature
const highest = Math.max(...temperatures);
console.log("Highest:", highest);

// 5. Average Celsius temperature
const average = temperatures.reduce((sum, C) => sum + C, 0) / temperatures.length;
console.log("Average:", average);
