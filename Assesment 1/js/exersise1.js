//Grading System Exercise

function gradeSystem(grade) {
  if (grade < 0) {
    return "Invalid";
  } else if (grade >= 90) {
    return "A+";
  } else if (grade >= 80) {
    return "A-";
  } else if (grade >= 75) {
    return "A";
  } else if (grade >= 65) {
    return "B";
  } else if (grade >= 55) {
    return "C";
  } else if (grade >= 35) {
    return "S";
  } else {
    return "F";
  }
}

function getStudentGrade(name, marks) {
  let grade = gradeSystem(marks);
  console.log(name + "s grade is: " + grade + " And Mark is " + marks);
}

getStudentGrade("John", 92);
getStudentGrade("John", 73);
getStudentGrade("John", 78);
getStudentGrade("John", 100);
getStudentGrade("John", 12);
getStudentGrade("John", 38);
getStudentGrade("John", 59);
getStudentGrade("John", 62);
getStudentGrade("John", -10);


console

//Another Method

let studentArray = [
  { name: "John", marks: 92 },
  { name: "John", marks: 73 },
  { name: "John", marks: 78 },
  { name: "John", marks: 100 },
  { name: "John", marks: 12 },
  { name: "John", marks: 38 },
  { name: "John", marks: 59 },
  { name: "John", marks: 62 },
  { name: "John", marks: -10 },
];


for (let i = 0; i < studentArray.length; i++) {
  getStudentGrade(studentArray[i].name, studentArray[i].marks);
}
