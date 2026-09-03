const people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 22 },
    { name: 'David', age: 28 },
    { name: 'Emily', age: 35 },
    { name: 'Frank', age: 40 },
    { name: 'Grace', age: 27 },
];

// 1. Calculate the average age.

const totalAge = people.reduce((total, person) => {
    return total + person.age;
}, 0);

const avgage = totalAge / people.length;
console.log(avgage);


// 2. Find the oldest person.

const oldestper = people.reduce((oldest, person) => {

    if (person.age > oldest.age) {
        return person;
    }

    return oldest;

});
console.log(oldestper);


// 3. Find the youngest person.

const youngper = people.reduce((youngest, person) => {

    if (person.age < youngest.age) {
        return person;
    }

    return youngest;

});
console.log(youngper);


// 4. Find all people between age 25 and 35.

const btwage = people.filter((person) => {

return person.age >= 25 && person.age <= 35;

});
console.log(btwage);

// 5. Group people into:
//
//     20-29
//     30-39
//     40-49

const plpgroup = people.reduce((groups, person) => {

    if (person.age >= 20 && person.age <= 29) {
        groups["20-29"].push(person);
    }
    else if (person.age >= 30 && person.age <= 39) {
        groups["30-39"].push(person);
    }
    else if (person.age >= 40 && person.age <= 49) {
        groups["40-49"].push(person);
    }

    return groups;

}, {
    "20-29": [],
       "30-39": [],
    "40-49": []
});
console.log(plpgroup);


// 6. Find which age group has the most people.

const mostplp = Object.entries(plpgroup).reduce(
    (highest, group) => {

        if (group[1].length > highest[1].length) {
            return group;
        }

        return highest;

    }
);
console.log(mostplp);