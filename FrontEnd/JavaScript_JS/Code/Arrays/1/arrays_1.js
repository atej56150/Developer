// Array
const fruits = ["Apple", "Banana", "Mango"];
console.log(fruits[0]);                         // Apple

// Add item
fruits.push("Orange");
console.log(fruits);                           // ["Apple", "Banana", "Mango", "Orange"]

// Loop
fruits.forEach((fruit) => {                   // fruit is not defined because it is created as a temporary variable (parameter) inside the forEach() function.
  console.log(fruit);
});