const students = [
  {
    name: 'Amit',
    marks: {
      maths: 80,
      science: 75,
      english: 90
    }
  },
  {
    name: 'Rahul',
    marks: {
      maths: 65,
      science: 70,
      english: 60
    }
  },
  {
    name: 'Priya',
    marks: {
      maths: 95,
      science: 90,
      english: 92
    }
  }
];


// 1. Calculate total marks for every student
const totalMarks = students.map(student => {
  const { maths, science, english } = student.marks;

  return {
    name: student.name,
    total: maths + science + english
  };
});

console.log("1. Total marks:", totalMarks);


// 2. Calculate average marks for every student
const averageMarks = students.map(student => {
  const { maths, science, english } = student.marks;

  const average = (maths + science + english) / 3;

  return {
    name: student.name,
    average: average
  };
});

console.log("2. Average marks:", averageMarks);


// 3. Find the student with the highest total
const highestTotalStudent = totalMarks.reduce(
  (highest, student) =>
    student.total > highest.total ? student : highest
);

console.log("3. Student with highest total:", highestTotalStudent);


// 4. Calculate the average marks for Maths
const mathsAverage =
  students.reduce((total, student) => {
    return total + student.marks.maths;
  }, 0) / students.length;

console.log("4. Maths average:", mathsAverage);


// 5. Calculate the average marks for Science
const scienceAverage =
  students.reduce((total, student) => {
    return total + student.marks.science;
  }, 0) / students.length;

console.log("5. Science average:", scienceAverage);


// 6. Calculate the average marks for English
const englishAverage =
  students.reduce((total, student) => {
    return total + student.marks.english;
  }, 0) / students.length;

console.log("6. English average:", englishAverage);


// 7. Find which subject has the highest average
const subjectAverages = {
  maths: mathsAverage,
  science: scienceAverage,
  english: englishAverage
};

const highestSubject = Object.entries(subjectAverages)
  .reduce((highest, current) =>
    current[1] > highest[1] ? current : highest
  );

console.log("7. Subject with highest average:", highestSubject);
