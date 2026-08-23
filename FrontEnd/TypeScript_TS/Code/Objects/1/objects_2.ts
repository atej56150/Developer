let personExOne: {
  name: string;
  age: number;
  jobTitle?: string;
  address: {
    street: string;
    city: string;
    zipCode: number;
  };
};

personExOne = {
  name: 'John',
  age: 25,
  jobTitle: "Software Engineer",
  address: {
    street: '123 Main St',
    city: "New York",
    zipCode: 10001,
  },
};

console.log(personExOne.name);                // Output: John
console.log(personExOne.age);                 // Output: 25
console.log(personExOne.jobTitle);            // Output: Software Engineer
console.log(personExOne.address.street);      // Output: 123 Main St
console.log(personExOne.address.city);        // Output: New York
console.log(personExOne.address.zipCode);     // Output: 10001
console.log(personExOne);                     // Output: { name: 'John', age: 25, jobTitle: 'Software Engineer', address: { street: '123 Main St', city: 'New York', zipCode: 10001 } }
