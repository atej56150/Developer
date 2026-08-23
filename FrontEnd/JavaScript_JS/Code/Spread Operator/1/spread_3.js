// Add Values to an Array

const numbers = [10, 20, 30];

const newNumbers0 = [...numbers, 40, 50];

console.log(newNumbers0);

// Output :- [10, 20, 30, 40, 50]

const newNumbers1 = [5, ...numbers];

console.log(newNumbers1);

// Output :- [5, 10, 20, 30]
