//Object Destructure
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Rudri"
}

// course.courseInstructor

const {courseInstructor: instructor} = course// destructure means assign short name to long name 

// console.log(courseInstructor);
console.log(instructor);
