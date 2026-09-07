const employees = [
  { name: 'John', department: 'IT', salary: 70000 },
  { name: 'Jane', department: 'HR', salary: 55000 },
  { name: 'Bob', department: 'IT', salary: 85000 },
  { name: 'Alice', department: 'Sales', salary: 60000 },
  { name: 'Mark', department: 'IT', salary: 75000 },
  { name: 'Sara', department: 'HR', salary: 65000 },
];


// 1. Group employees by department
const groupedEmployees = employees.reduce((groups, employee) => {
  const department = employee.department;

  if (!groups[department]) {
    groups[department] = [];
  }

  groups[department].push(employee);

  return groups;
}, {});

console.log("1. Employees grouped by department:", groupedEmployees);


// 2. Calculate employee count per department
const employeeCount = Object.entries(groupedEmployees).reduce(
  (result, [department, employees]) => {
    result[department] = employees.length;
    return result;
  },
  {}
);

console.log("2. Employee count per department:", employeeCount);


// 3. Calculate average salary per department
const averageSalary = Object.entries(groupedEmployees).reduce(
  (result, [department, employees]) => {

    const totalSalary = employees.reduce(
      (total, employee) => total + employee.salary,
      0
    );

    result[department] = totalSalary / employees.length;

    return result;
  },
  {}
);

console.log("3. Average salary per department:", averageSalary);


// 4. Calculate total salary expense per department
const totalSalaryExpense = Object.entries(groupedEmployees).reduce(
  (result, [department, employees]) => {

    result[department] = employees.reduce(
      (total, employee) => total + employee.salary,
      0
    );

    return result;
  },
  {}
);

console.log(
  "4. Total salary expense per department:",
  totalSalaryExpense
);


// 5. Find the highest-paid employee in every department
const highestPaidByDepartment = Object.entries(
  groupedEmployees
).reduce((result, [department, employees]) => {

  result[department] = employees.reduce(
    (highest, employee) =>
      employee.salary > highest.salary ? employee : highest
  );

  return result;
}, {});

console.log(
  "5. Highest-paid employee in every department:",
  highestPaidByDepartment
);


// 6. Find the department with the highest total salary expense
const highestExpenseDepartment = Object.entries(
  totalSalaryExpense
).reduce((highest, current) =>
  current[1] > highest[1] ? current : highest
);

console.log ("6. Department with highest total salary expense:", highestExpenseDepartment);
