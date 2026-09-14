


const values = [
  0,
  1,
  '',
  'hello',
  null,
  undefined,
  false,
  true,
  [],
  {},
  NaN
];

// 1. Separate the values into truthy and falsy values.

const truthyValues = values.filter(value => Boolean(value));

const falsyValues = values.filter(value => !Boolean(value));

console.log("Truthy values:", truthyValues);
console.log("Falsyvalues:", falsyValues);

// 2. Explain why an empty array is truthy.

//output
//An empty array [] is an object in JavaScript so ..

// 4. Explain why NaN is falsy.
//output
//NaN means Not-a-Number. It represents an invalid numeric result


// 5. Write a function that checks whether a value is actually empty without treating 0 as empty.
function isActuallyEmpty(value) {
    if (value === null || value === undefined) {
        return true;
    }

    if (typeof value === "string") {
        return value.trim() === "";
    }

    if (Array.isArray(value)) {
        return value.length === 0;
    }

    if (typeof value === "object") {
        return Object.keys(value).length === 0;
    }

    return false;
}

// Test the function

console.log(isActuallyEmpty(0));          // false
console.log(isActuallyEmpty(""));         // true
console.log(isActuallyEmpty("hello"));    // false
console.log(isActuallyEmpty(null));       // true
console.log(isActuallyEmpty(undefined));  // true
console.log(isActuallyEmpty([]));         // true
console.log(isActuallyEmpty({}));         // true
console.log(isActuallyEmpty(NaN));        // false 