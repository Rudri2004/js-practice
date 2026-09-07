const users = [
  { id: 1, name: 'Amit', age: 8 },
  { id: 2, name: 'Rahul', age: 15 },
  { id: 3, name: 'Priya', age: 24 },
  { id: 4, name: 'Neha', age: 37 },
  { id: 5, name: 'Raj', age: 43 },
  { id: 6, name: 'Kiran', age: 19 },
  { id: 7, name: 'Jay', age: 31 },
];


// 1 & 2. Group users into age groups using reduce()
const groupedUsers = users.reduce((groups, user) => {

  let group;

  if (user.age >= 0 && user.age <= 9) {
    group = '0-9';
  } else if (user.age >= 10 && user.age <= 19) {
    group = '10-19';
  } else if (user.age >= 20 && user.age <= 29) {
    group = '20-29';
  } else if (user.age >= 30 && user.age <= 39) {
    group = '30-39';
  } else if (user.age >= 40 && user.age <= 49) {
    group = '40-49';
  }

  if (!groups[group]) {
    groups[group] = [];
  }

  groups[group].push(user);

  return groups;

}, {});

console.log("1 & 2. Users grouped by age:", groupedUsers);


// 3. Count users in every group
const groupCounts = Object.entries(groupedUsers).reduce(
  (result, [group, users]) => {
    result[group] = users.length;
    return result;
  },
  {}
);

console.log("3. User count in every group:", groupCounts);


// 4. Find the group containing the highest number of users
const largestGroup = Object.entries(groupCounts).reduce(
  (highest, current) =>
    current[1] > highest[1] ? current : highest
);

console.log("4. Group with highest number of users:", largestGroup);
