const employees = [
  { id: 1, name: 'John', department: 'IT', salary: 65000 },
  { id: 2, name: 'Jane', department: 'IT', salary: 75000 },
  { id: 3, name: 'Bob', department: 'HR', salary: 50000 },
  { id: 4, name: 'Alice', department: 'IT', salary: 80000 },
  { id: 5, name: 'Mark', department: 'HR', salary: 55000 },
];

// 1. Find all IT employees
const itemployees = employees.filter(
  employee => employee.department === 'IT'
);
console.log("1. IT Employees:", itemployees);


// 2. Sort IT employees by salary from highest to lowest
const sortedITEmployees = [...itemployees].sort(
  (a, b) => b.salary - a.salary
);

console.log("2. IT Employees sorted by salary:", sortedITEmployees);


// 3. Display the top 2 highest-paid IT employees
const top2ITEmployees = sortedITEmployees.slice(0, 2);

console.log("3. Top 2 highest-paid IT employees:", top2ITEmployees);


// 4. Calculate the average IT salary
const totalITSalary = itemployees.reduce(
  (total, employee) => total + employee.salary,
  0
);
const averageITSalary = totalITSalary / itEmployees.length;

console.log("4. Average IT salary:", averageITSalary);


// 5. Calculate the total salary expense for IT
console.log("5. Total IT salary expense:", totalITSalary);






// 6. Find the highest-paid employee in each department
const highestPaidByDepartment = employees.reduce((result, employee) => {

  const department = employee.department;

  if (
    !result[department] ||
    employee.salary > result[department].salary
  ) {
    result[department] = employee;
  }

  return result;

}, {});
console.log("6. Highest-paid employee in each department:", highestPaidByDepartment);
