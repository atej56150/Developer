function greet0() {
  console.log("Hi");
}
greet0();

function greet1(): void {
  console.log("Hi");
}
greet1();

function greet2(name: string): void {
  console.log(`Hello, ${name}!`);
}
greet2("Alice");
