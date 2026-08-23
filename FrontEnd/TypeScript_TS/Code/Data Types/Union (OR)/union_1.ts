function greetOptional(name: string | number, age?: number) {
  if (age !== undefined) {
    console.log(`Hello, ${name}! You are ${age} years old.`);
  } else {
    console.log(`Hello, ${name}!`);
  }
}

greetOptional("Alice")        // "Hello, Alice!"
greetOptional("Bob", 25)      // "Hello, Bob! You are 25 years old."
greetOptional(10)             // "Hello, 10!"
greetOptional(100, 200) 