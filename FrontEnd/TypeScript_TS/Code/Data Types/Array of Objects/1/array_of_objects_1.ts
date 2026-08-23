interface User {
  id: number;
  name: string;
}

const user: User = {
  id: 1,
  name: "John"
};

const users: User[] = [
  user
];

console.log(user);
console.log(user.name);

console.log(users);
console.log(users[0].name);
