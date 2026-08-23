type Programmer2 = {
  name: string;
  knownFor: string[];
};

const ada2: Programmer2 = {
  name: true,
  knownFor: ['Mathematics', 'Computing', 'First Programmer']
};

console.log(ada2.name);
console.log(ada2.knownFor);
console.log(ada2);

// OUTPUT :- Type 'boolean' is not assignable to type 'string'.
