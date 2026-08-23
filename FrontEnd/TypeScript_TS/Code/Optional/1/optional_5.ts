interface User4 {
  name: string;
  age: number;
  email?: string;
}

let user4: User4 = {
  name: "John Doe",
  age: 30,
};

user4.name = "Jane Smith";
user4.age = 25;
user4.email = "jane.smith@example.com";

console.log(user4.name);
console.log(user4.age);
console.log(user4.email);
console.log(user4);
