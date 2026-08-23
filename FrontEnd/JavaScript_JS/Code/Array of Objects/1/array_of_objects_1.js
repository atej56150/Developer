const users = [
  {
    id: 1,
    name: "John"
  },
  {
    id: 2,
    name: "David"
  }
];

users.map((user) => {                   // user is not the array name. It is just a temporary variable that represents each item in the array.
  console.log(user.name);
});