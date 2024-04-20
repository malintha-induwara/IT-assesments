class Person {
    constructor(name, age, phone, email) {
        this.name = name;
        this.age = age;
        this.phone = phone;
        this.email = email;

    }
}

let person1 = new Person("John",25,"1234567890","hello@gmail.com")
console.log(person1.name);
console.log(person1.age);