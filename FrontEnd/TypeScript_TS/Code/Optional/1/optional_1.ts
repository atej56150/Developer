function greetOptional(name: string, age?: number) {
  if (age !== undefined) {
    console.log(`Hello, ${name}! You are ${age} years old.`);
  } else {
    console.log(`Hello, ${name}!`);
  }
}

greetOptional("Alice");                 // Output: "Hello, Alice!"
greetOptional("Bob", 30);               // Output: "Hello, Bob! You are 30 years old."
