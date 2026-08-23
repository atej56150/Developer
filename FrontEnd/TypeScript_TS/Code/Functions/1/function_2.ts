// Default Parameters - With Default Value

function greetDefault(name: string, age: number = 25) {
  console.log(`Hello, ${name}! You are ${age} years old.`);
}

greetDefault("Alice");               // Output: "Hello, Alice! You are 25 years old."
greetDefault("Bob", 30);             // Output: "Hello, Bob! You are 30 years old."
