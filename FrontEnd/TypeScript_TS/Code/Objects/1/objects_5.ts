interface User {
  name: string;
  age: number;
  city: string;
  job?: string;
}

const user: User = {
  name: "Arun",
  age: 25,
  city: "Sydney"
};

// access Object values
console.log(user);
console.log(user.city);

// Update value
user.age = 26;

// Add new property
user.job = "Developer";

// access Object values
console.log(user);
