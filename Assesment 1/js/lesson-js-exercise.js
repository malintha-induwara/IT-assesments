let studentNames = ["Kamal", "Nimal", "Sunil"];

console.log("Student Array: ", studentNames);

//Built in functions

console.log("====================================");

//1. push() - Adds one or more elements to the end of an array

studentNames.push("Amal", "Saman");
console.log("Student Array after push: ", studentNames);

console.log("====================================");

//2. pop() - Removes the last element from an array and returns it

let removedStudent = studentNames.pop();

console.log("Removed student: ", removedStudent);
console.log("Student Array after pop: ", studentNames);

console.log("====================================");

//3. shift() - Removes the first element from an array and returns it

let removedFirstStudent = studentNames.shift();
console.log("Removed first student: ", removedFirstStudent);
console.log("Student Array after shift: ", studentNames);
console.log ("O index after shift: ", studentNames[0]);

console.log("====================================");

//4. unshift() - Adds one or more elements to the beginning of an array

studentNames.unshift("Kasun", "Nadeesha");
console.log("Student Array after unshift: ", studentNames);
console.log("0 index after unshift: ", studentNames[0]);

console.log("====================================");

//5. splice() - Adds or removes elements from an array

//splice(start, deleteCount, item1, item2, item3)

//start - Index at which to start changing the array
//deleteCount - An integer indicating the number of old array elements to remove
//item1, item2, item3 - The elements to add to the array, beginning from start

studentNames.splice(2, 0, "Kamal", "Simon");
console.log("Student Array after splice: ", studentNames);

console.log("====================================");

//6. concat() - Merges two or more arrays and create a new array 
//without modifying the existing arrays

let maleStudents = ["Kamal", "Nimal", "Sunil"];
let femaleStudents = ["Sithumi", "Kamani"];

let allStudents = maleStudents.concat(femaleStudents);
console.log("All Students Array after merge: ", allStudents);


