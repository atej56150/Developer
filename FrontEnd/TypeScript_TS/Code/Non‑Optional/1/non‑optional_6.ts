interface User6 {
  name: string;
  age: number;
  email: string;
}

let user6: User6 = {
  name: "John Doe",
  age: 30,
};

user6.name = "Jane Smith";
user6.age = 25;

console.log(user6.name);
console.log(user6.age);
console.log(user6.email);
console.log(user6);
