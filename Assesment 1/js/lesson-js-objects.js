let student = {};
//Literals way of creating an object

console.log("Students :", student);
console.log("Type of student", typeof student);

student = {
  firstName: "Kamal",
  lastName: "Perera",
  email: "hello@gmail.com",
  phoneNumber: "0779909923",
  age: 17,
  isRegisted: true,
};

console.log("Student: ", student);
console.log("Student Email using dot notation: ", student.email);
console.log("Student Email using  square bracket notation: ", student["email"]);

//Assigning values using dot notaion

student.age = 30;

console.log("Student age: ", student.age);
console.log("Student age: ", student);


console.log("====================================")


let person = {
  name: "John",
  age: 25,
  greet:()=>{
    console.log("Hello Good Morning");
  }
}

console.log(person.greet());


for(let key in person){
  console.log(key, person[key]);
}


console.log(person.age)