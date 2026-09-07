const countries = [
  { name: 'USA', population: 331000000, area: 9833517 },
  { name: 'China', population: 1444216107, area: 9596961 },
  { name: 'India', population: 1393409038, area: 3287263 },
];


// 1. Calculate population density for every country
const countriesWithDensity = countries.map(country => {
  const density = country.population / country.area;

  return {
    ...country,
    density: density
  };
});

console.log("1. Population density:", countriesWithDensity);


// 2. Create a new array containing name and density
const nameAndDensity = countries.map(country => {
  return {
    name: country.name,
    density: country.population / country.area
  };
});

console.log("2. Name and density:", nameAndDensity);


// 3. Find the country with the highest population density
const highestDensity = nameAndDensity.reduce((highest, country) => {
  return country.density > highest.density ? country : highest;
});

console.log("3. Highest population density:", highestDensity);


// 4. Find the country with the lowest population density
const lowestDensity = nameAndDensity.reduce((lowest, country) => {
  return country.density < lowest.density ? country : lowest;
});

console.log("4. Lowest population density:", lowestDensity);


// 5. Calculate the sum of the population densities
const totalDensity = nameAndDensity.reduce((total, country) => {
  return total + country.density;
}, 0);

console.log("5. Sum of population densities:", totalDensity);
