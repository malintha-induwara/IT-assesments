//Type Of Functioins

//1. Named Functions

function addNumbers(num1, num2) {
    return num1 + num2;
}

console.log(addNumbers(2, 3));


//2. Annonymous Function

let multiplyNumbers = function (num1, num2) {
  return num1 * num2;
};

console.log(multiplyNumbers(2, 3));

console.log("===================")


//3. Arrow Function


let divideNumbers = (num1, num2) => {
  return num1 / num2;
}

console.log(divideNumbers(6, 3));

//if single line

let subtractNumbers = (num1, num2) => num1 - num2;

console.log(subtractNumbers(6, 3));


console.log("===================");

//4.  Constructor Function

let Student = function (name, age) {
    this.name = name;
    this.age = age;
}

//js only have one constructor function if you create multiple constructor function it will take the last one


let student1 = new Student("John", 25);
console.log(student1);


console.log("===================");

//5. Callback Function

function myFunction(callback) {
  //console.log(callback);
   callback();
}

let person ={
    name: "John",
    age: 25
}

let numbersArray = [1, 2, 3, 4, 5];


function secondFunction() {
  console.log("Second Function");
}

 //myFunction(numbersArray);
 //myFunction(person);
 myFunction(secondFunction);


