function sayHello() {
  console.log("Hello");
  // no return → function returns undefined
}
let result0 = sayHello();
console.log(result0);                                           // undefined

function sayHi() {
  return "Hi";
  // return value → function returns that value
}
let result1 = sayHi();
console.log(result1);