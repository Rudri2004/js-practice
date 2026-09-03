
const users = [
  { id: 1, name: 'Amit', age: 18 },
  { id: 2, name: 'Rahul', age: 25 },
  { id: 3, name: 'Priya', age: 31 },
  { id: 4, name: 'Neha', age: 22 },
  { id: 5, name: 'Raj', age: 16 },
 ];

// 1. Find all users who are 18 or older.

const older = users.filter((user) => {
    return user.age >= 18;
});

console.log(older);

// 2. Find the first user whose age is greater than 25.

const userage = users.find((user) => {
    return user.age > 25;
});

console.log(userage);

// 3. Find the index of the user named 'Neha'.

const username = users.findIndex((user) => {
    return user.name === "Neha";
});

console.log(username);

// 4. Check whether any user is below 18.

const smaller = users.some((user) => {
    return user.age < 18;
});

console.log(smaller);

// 5. Check whether every user is above 10.

const result5 = users.every((user) => {
    return user.age > 10;
});

console.log(result5);

// 6. Create a new array containing name and age only.

const result6 = users.map((user) => {
    return {
        name: user.name,
        age: user.age
    };
});

console.log(result6);
