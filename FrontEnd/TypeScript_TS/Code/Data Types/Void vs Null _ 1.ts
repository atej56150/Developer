function greet(name: string): void | null {
  console.log("Hello " + name);
  return null
}

const result = greet("Ravi");

console.log("Return value of greet:", result);



// Hello Ravi
// Return value of greet: null