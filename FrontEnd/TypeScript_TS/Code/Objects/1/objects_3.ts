let personExTwo: {
  name: string;
  age: number;
  jobTitle?: string;
  address: {
    street: string;
    city: string;
    zipCode: number;
  };
} = {
  name: 'John Cena',
  age: 20,
  jobTitle: "Software Developer",
  address: {
    street: '123 El Main St',
    city: "Brooklyn",
    zipCode: 10011,
  },
};

console.log(personExTwo.name);                // Output: John Cena
console.log(personExTwo.age);                 // Output: 20
console.log(personExTwo.jobTitle);            // Output: Software Developer
console.log(personExTwo.address.street);      // Output: 123 El Main St
console.log(personExTwo.address.city);        // Output: Brooklyn
console.log(personExTwo.address.zipCode);     // Output: 10011
console.log(personExTwo);                     // Output: { name: 'John Cena', age: 20, jobTitle: 'Software Developer', address: { street: '123 El Main St', city: 'Brooklyn', zipCode: 10011 } }
