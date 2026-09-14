const user = null;

// console.log(user.profile.name);

// 1. Predict what happens.

// Output:
// TypeError: Cannot read properties of null
// (reading 'profile')
//
// Because user is null, JavaScript cannot access
// the profile property.


// 2. Fix the code using optional chaining.

const userName = user?.profile?.name;

console.log(userName);


// 3. Return "Guest" if the name does not exist.

const name = user?.profile?.name ?? "Guest";

console.log(name);
