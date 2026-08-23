interface User1 {
  name: string;
  age: number;
  readonly id: number;
}

let user1: User1 = {
  name: "John Doe",
  age: 30,
  id: 1
};

user1.id = 2;

console.log(user1.name);
console.log(user1.age);
console.log(user1);
