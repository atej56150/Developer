const user = {
  name: "John",
  age: 25,
  city: "Hyderabad"
};

// access Object values
console.log(user.name);                                 // John
console.log(user["age"]);                               // 25

// Update value
user.age = 26;

// Add new property
user.job = "Developer";

console.log(user);
