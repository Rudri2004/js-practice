
const employees = [
  { id: 1, name: 'John', department: 'IT', salary: 60000 },
  { id: 2, name: 'Jane', department: 'HR', salary: 50000 },
  { id: 3, name: 'Bob', department: 'IT', salary: 75000 },
  { id: 4, name: 'Alice', department: 'Sales', salary: 55000 },
  { id: 5, name: 'Mark', department: 'IT', salary: 68000 },
];

// 1. Find all employees from the IT department.

const result1 = employees.filter((employee) => {
    return employee.department === "IT";
});

console.log(result1);

// 2. Find employees earning more than 60000.

const result2 = employees.filter((employee) => {
    return employee.salary > 60000;
});


console.log(result2);


// 3. Find the highest-paid employee.

const result3 = employees.reduce((highest, employee) => {

    if (employee.salary > highest.salary) {
        return employee;
    }

    return highest;

});
console.log(result3);

// 4. Find the lowest-paid employee.

const result4 = employees.reduce((lowest, employee) => {

    if (employee.salary < lowest.salary) {
        return employee;
    }

    return lowest;

});

console.log(result4);


// 5. Calculate the average salary.

const totalSalary = employees.reduce((total, employee) => {
    return total + employee.salary;
}, 0);

const result5 = totalSalary / employees.length;

console.log(result5);


// 6. Create an array containing only employee names.

const result6 = employees.map((employee) => {
    return employee.name;
});
console.log(result6);
