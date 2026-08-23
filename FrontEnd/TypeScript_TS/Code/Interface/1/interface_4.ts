interface User1 {
  name: string;
  age: number;
  email?: string;
}

let user1: User1 = {
  name: "John Doe",
  age: 30,
  email: "admin@admin.com"
};

console.log(user1.name);
console.log(user1.age);
console.log(user1);
