
function addNumbers(num1,number2) {
    return num1+number2;
}


//Arrow Functions
const addNummbersArrowFunc = (num1, num2) =>{
    return num1+num2;
}


console.log( addNumbers(5,4));
console.log( addNummbersArrowFunc(5,4))


//Converting annonymous function to arrow function
let multiplyNumbers = (num1, num2) => num1 * num2;



//Converting constructor  function to arrow function
//Syntax wise this is possible
//but dont do this because "this" and "new" keyword will not work in arrow function
let Student = (name, age) =>{
    this.name = name;
    this.age = age;
}