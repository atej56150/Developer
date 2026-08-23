let User2:{ name: string; age: number; } = {
    name: "John Doe",
    age: 30,
};

User2.name = "Jane Smith";
User2.age = 25;

console.log(User2.name);
console.log(User2.age);
console.log(User2);