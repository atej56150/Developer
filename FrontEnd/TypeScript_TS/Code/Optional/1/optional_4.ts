interface User3 {
  name: string;
  age: number;
  email?: string;
}

let user3: User3 = {
  name: "John Doe",
  age: 30,
  email: "john.doe@example.com"
};

user3.name = "Jane Smith";
user3.age = 25;
user3.email = "jane.smith@example.com";

console.log(user3.name);
console.log(user3.age);
console.log(user3.email);
console.log(user3);
