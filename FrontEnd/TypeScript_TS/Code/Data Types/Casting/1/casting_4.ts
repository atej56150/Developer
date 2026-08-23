interface User {
  name: string;
  age: number;
}

const response: unknown = { name: "Arun", age: 30 };

const user = response as User;

console.log(user);
console.log(user.name);
console.log(user.age);
