const students = [
  { name: 'Amit', marks: [80, 75, 90] },
  { name: 'Rahul', marks: [65, 70, 60] },
  { name: 'Priya', marks: [95, 90, 92] },
];

// 1 & 2. Calculate total and average for every student
const result = students.map(student => {
  const total = student.marks.reduce((sum, mark) => sum + mark, 0);
  const average = total / student.marks.length;

  return {name: student.name,total,average};
});
console.log(result);

// 3. Find the topper 
const topper = result.reduce((top, student) => student.average > top.average ? student : top);
console.log("Topper:", topper);

// 4. Students whose average is above 75
const above75 = result.filter(student => student.average > 75);
console.log("Average above 75:", above75);

// 5. Find the highest individual marks from students
const highmark = Math.max(...students.flatMap(student => student.marks));
console.log("Highest mark:", highmark);

// 6. Find the lowest individual marks from above  
const lowmark = Math.min(...students.flatMap(student => student.marks));
console.log("Lowest mark:", lowmark);
