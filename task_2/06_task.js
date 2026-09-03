const students = [
    { name: 'Amit', marks: 78 },
    { name: 'Rahul', marks: 45 },
    { name: 'Priya', marks: 92 },
    { name: 'Neha', marks: 65 },
    { name: 'Raj', marks: 32 },
];


// 1. Find students who scored 50 or more.


const stu1 = students.filter((student) => {
    return student.marks >= 50;
});
console.log(stu1);

// 2. Find students who failed.

const stu2 = students.filter((student) => {
    return student.marks < 50;
});
console.log(stu2);


// 3. Find the student with the highest marks.

const stu3 = students.reduce((highest, student) => {

    if (student.marks > highest.marks) {
        return student;
    }

    return highest;

});
console.log(stu3);


// 4. Find the student with the lowest marks.


const stu4 = students.reduce((lowest, student) => {

    if (student.marks < lowest.marks) {
        return student;
    }

    return lowest;

});
console.log(stu4);


// 5. Calculate the average marks.

const totalMarks = students.reduce((total, student) => {
    return total + student.marks;
}, 0);

const stu5 = totalMarks / students.length;

console.log(stu5);

// 6. Create a new array containing:
// {
//     name,
//     marks,
//     result
// }
// where result is "Pass" or "Fail".


const stu6 = students.map((student) => {

    return {
        name: student.name,
        marks: student.marks,
        result: student.marks >= 50 ? "Pass" : "Fail"
    };

});
console.log(stu6);