// Arrow Function - Explicit ➔ If use { }, so need to write return manually
const add = (a, b) => {
    return a + b;
};

let addresult = add(5, 5)

console.log(addresult)



// Arrow Function - Explicit ➔ If use { }, so need to write return manually
const sub = (a, b) => {
  return a - b;
};

console.log(sub(10, 20));



// Arrow Function - Implicit ➔ If don't use { }, the value is automatically returned, its a Shortest Version
const mul = (a, b) => a * b;

let mulresult = mul(100, 200)

console.log(mulresult)



// Arrow Function - Implicit ➔ If don't use { }, the value is automatically returned, its a Shortest Version
const div = (a, b) => a / b;

console.log(div(100, 200));



// Arrow Function - Implicit ➔ If don't use { }, the value is automatically returned, its a Shortest Version
const addTax = salary => salary + 500;

const result = addTax(30000);

console.log(result);
