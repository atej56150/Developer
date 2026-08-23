// Arrow Function
const add0 = (a, b) => {
    console.log(a + b)
};

add0(4, 5)



// Arrow Function - Shortest Version
const add1 = (a, b) => a + b;

console.log(add1(10, 20));



// Arrow Function - with SINGLE Parameters
const greet0 = name => {
    console.log("Hello " + name);
};

greet0("Arun");



// Arrow Function - with MORE Parameters
const greet1 = (name, age) => {
    console.log("Hello " + name + " Age is " + age);
    console.log(`Hi ${name} your age was ${age}..!`)
};

greet1("Arun", 25);
