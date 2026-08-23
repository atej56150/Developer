interface User {
  id: number;
  name: string;
}

const user: User = {
  id: 1,
  name: "John"
};

const users: User[] = [
  user,
  {
    id: 2,
    name: "David"
  },
  {
    id: 3,
    name: "Mike"
  }
];

console.log(user);
console.log(user.name);

console.log(users);

// Access each object
console.log(users[0].name);
console.log(users[1].name);
console.log(users[2].name);

// Loop all users
users.map((user) => {
  console.log(user.name);
});