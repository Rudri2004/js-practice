const users = [
  { id: 1, name: 'Amit', age: 18, active: true },
  { id: 2, name: 'Rahul', age: 25, active: false },
  { id: 3, name: 'Priya', age: 31, active: true },
  { id: 4, name: 'Neha', age: 22, active: true },
];

// 1. Find all active users
const activeuser = users.filter(user => user.active);

console.log("1. Active users:", activeuser);


// 2. Find all inactive users
const inactiveuser = users.filter(user => !user.active);

console.log("2. Inactive users:", inactiveuser);


// 3. Find active users above age 20
const activeabove = users.filter(
  user => user.active && user.age > 20
);

console.log("3. Active users above age 20:", activeabove);


// 4. Check whether any inactive user exists
const hasinactiveuser = users.some(user => !user.active);

console.log("4. Any inactive user exists:", hasinactiveuser);


// 5. Check whether all active users are above age 18
const allActiveAbove = users
  .filter(user => user.active)
  .every(user => user.age > 18);

console.log("5. All active users above age 18:", allActiveAbove);


// 6. Create a new array with name and status
const userstatus = users.map(user => ({
  name: user.name,
  status: user.active ? "Active" : "Inactive"
}));

console.log("6. User status:", userstatus);
