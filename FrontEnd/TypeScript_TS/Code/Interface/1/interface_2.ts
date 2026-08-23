interface User2 {
  name: string;
  age: number;
}

let user2: User2 = {
  name: "John Doe",
  age: 30,
};

user2.name = "Jane Smith";
user2.age = 25;

console.log(user2.name);
console.log(user2.age);
console.log(user2);
