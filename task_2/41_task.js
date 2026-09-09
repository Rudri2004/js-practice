const user = {
  id: 1,
  profile: {
    personal: {
      name: 'John',
      address: {
        city: 'Ahmedabad',
        pin: 380001
      }
    }
  }
};

// 1. Access city safely using optional chaining
const city = user?.profile?.personal?.address?.city;

console.log("City:", city);

// 2. Access a property that does not exist
// Optional chaining prevents an error.
const country = user?.profile?.personal?.address?.country;

console.log("Country:", country);

// 3 & 4. Reusable function to get nested value
// and return a default value if path doesn't exist.
function getValue(object, path, defaultValue = 'Not Found') {
  const result = path
    .split('.')
    .reduce((current, key) => current?.[key], object);

  return result ?? defaultValue;
}

console.log("City:",getValue(user, 'profile.personal.address.city'));
console.log("Country:",getValue(user, 'profile.personal.address.country'));
console.log("Country:",getValue(user, 'profile.personal.address.country', 'India'));
