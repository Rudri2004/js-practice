
const apiData = [
  { user_id: 1, first_name: 'John', last_name: 'Doe', status: 'active' },
  { user_id: 2, first_name: 'Jane', last_name: 'Smith', status: 'inactive' },
  { user_id: 3, first_name: 'Bob', last_name: 'Brown', status: 'active' },
];

// QUESTION:
// Transform the data into:
// {
//   id,
//   fullName,
//   isActive
// }
//
// Requirements:
// 1. Combine first_name and last_name.
// 2. Convert status into a boolean.
// 3. Do not modify the original data.
// 4. Create a separate version containing only active users.

// Create a new array without modifying apiData
const users = apiData.map((user) => ({
  id: user.user_id,
  fullName: `${user.first_name} ${user.last_name}`,
  isActive: user.status === 'active',
}));

const activeUsers = users.filter((user) => user.isActive);
console.log(users);
console.log(activeUsers);
console.log(apiData);