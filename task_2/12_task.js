const users = [
  { id: 1, name: 'John', city: 'Ahmedabad' },
  { id: 2, name: 'Alice', city: 'Surat' },
  { id: 3, name: 'Bob', city: 'Ahmedabad' },
  { id: 4, name: 'Neha', city: 'Mumbai' },
  { id: 5, name: 'Raj', city: 'Surat' },
];

// 1. Group users by city
const groupedByCity = users.reduce((groups, user) => {
  if (!groups[user.city]) {
    groups[user.city] = [];
  }

  groups[user.city].push(user);
  return groups;
}, {});
console.log("Grouped by city:", groupedByCity);

// 2. Count users in every city
const userCountByCity = Object.fromEntries(
  Object.entries(groupedByCity).map(([city, users]) => [
    city,
    users.length
  ])
);
console.log("User count by city:", userCountByCity);

// 3. Find all users from Ahmedabad
const ahmedabadUsers = users.filter(
  user => user.city === 'Ahmedabad'
);

console.log("Ahmedabad users:", ahmedabadUsers);

// 4. Find the city having the highest number of users
const highestCity = Object.entries(userCountByCity)
  .reduce((highest, current) =>
    current[1] > highest[1] ? current : highest
  );
console.log("Ahmedabad users:", ahmedabadUsers);

// 5. Create an array containing unique city names
const uniqueCities = [...new Set(users.map(user => user.city))];
console.log("Unique cities:", uniqueCities);
