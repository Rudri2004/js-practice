

const originalUser = {
  name: 'John',
  address: {
    city: 'Ahmedabad'
  }
};

// const copiedUser = { ...originalUser };

// copiedUser.address.city = 'Surat';

// console.log(originalUser.address.city);


// 1. Predict the output.


// Output:
// Surat

// 2. Explain why the original object changes.

//output
// The spread operator creates a shallow copy.

// 3. Create a proper deep copy.

const copiedUser = structuredClone(originalUser);

copiedUser.address.city = 'Surat';

// 4. Test the copied object again.

console.log("Original city:", originalUser.address.city);
console.log("Copied city:", copiedUser.address.city);
