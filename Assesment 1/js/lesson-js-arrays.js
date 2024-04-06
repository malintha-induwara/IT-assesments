let fruits = [];

console.log("Type of fruits: ", typeof fruits);
console.log("Type of array: ", fruits);
console.log("Fruits array length: ", fruits.length);

fruits = ["apple", "orange", "pinapple"];
console.log("Type of array: ", fruits);
console.log("Fruits array length: ", fruits.length);

console.log("Fruits array index 1: ", fruits[1]);
console.log("Fruits array index 2: ", fruits[2]);
console.log("Fruits array index 0: ", fruits[0]);
console.log("Fruits array index 0: ", fruits[4]);

fruits[5] = "Banana";
console.log("Type of array: ", fruits);
console.log("Fruits array length: ", fruits.length);
console.log("Fruits array index 0: ", fruits[5]);
