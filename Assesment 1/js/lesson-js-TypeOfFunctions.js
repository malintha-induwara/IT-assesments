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


//4.  Constructor Function

let Student = function (name, age) {
    this.name = name;
    this.age = age;
}

//js only have one constructor function if you create multiple constructor function it will take the last one

