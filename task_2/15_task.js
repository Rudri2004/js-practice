const users = [
  { id: 1, name: 'Amit', age: 18, active: true },
  { id: 2, name: 'Rahul', age: 25, active: false },
  { id: 3, name: 'Priya', age: 31, active: true },
  { id: 4, name: 'Neha', age: 22, active: true },
];

// 1. Find all active users
const activeUsers = users.filter(user => user.active);

console.log("1. Active users:", activeUsers);


// 2. Find all inactive users
const inactiveUsers = users.filter(user => !user.active);

console.log("2. Inactive users:", inactiveUsers);


// 3. Find active users above age 20
const activeAbove20 = users.filter(
  user => user.active && user.age > 20
);

console.log("3. Active users above age 20:", activeAbove20);


// 4. Check whether any inactive user exists
const hasInactiveUser = users.some(user => !user.active);

console.log("4. Any inactive user exists:", hasInactiveUser);


// 5. Check whether all active users are above age 18
const allActiveAbove18 = users
  .filter(user => user.active)
  .every(user => user.age > 18);

console.log("5. All active users above age 18:", allActiveAbove18);


// 6. Create a new array with name and status
const userStatus = users.map(user => ({
  name: user.name,
  status: user.active ? "Active" : "Inactive"
}));

console.log("6. User status:", userStatus);
