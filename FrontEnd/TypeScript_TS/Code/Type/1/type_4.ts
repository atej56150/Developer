type Programmer4 = {
  name: string;
  knownFor: string[];
};

const ada4: Programmer4 = {
  name: "Ada Lovelace",
  knownFor: ['Mathematics', 'Computing', 'First Programmer'],
  age: 36
};

console.log(ada4.name);
console.log(ada4.knownFor);
console.log(ada4);   

// OUTPUT :- Object literal may only specify known properties, and 'age' does not exist in type 'Programmer4'.