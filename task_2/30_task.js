const employees = [
  { name: 'John', department: 'IT', salary: 70000 },
  { name: 'Jane', department: 'HR', salary: 55000 },
  { name: 'Bob', department: 'IT', salary: 85000 },
  { name: 'Alice', department: 'Sales', salary: 60000 },
  { name: 'Mark', department: 'IT', salary: 75000 },
  { name: 'Sara', department: 'HR', salary: 65000 },
];


// 1. Group employees by department



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


// 5. Find the highest-paid employee in every department


// 6. Find the department with the highest total salary expense

