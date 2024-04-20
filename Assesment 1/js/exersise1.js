//Grading System Exercise

function gradeSystem(grade) {
  if (grade < 0) {
    return "Invalid Grade";
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
  console.log(name + "s grade is: " + grade +" And Mark is " + marks);
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
