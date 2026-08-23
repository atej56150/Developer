const users = [
  {
    id: 1,
    name: "John"
  },
  {
    id: 2,
    name: "David"
  },
  {
    name: "Arun",
    age: 25
  }
];

// Each item inside users is an object

console.log(users)
console.log(users[0]);                        // access first object
console.log(users[0].name);                   // SYNTAX :- array[index].property ➔ users[0].name
console.log(users[2].age);                    // SYNTAX :- array[index].property ➔ users[1].age

// Loop
users.forEach((user) => {
  console.log(user)
  console.log(user.name);
});

// user is not the array name. It is just a temporary variable that represents each item in the array
users.map((user) => {        
  console.log(user)           
  console.log(user.name);
});
