const user: {
  name: string;
  age: number;
  city: string;
  job?: string;                 // job is optional. It may or may not exist
} = {
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
