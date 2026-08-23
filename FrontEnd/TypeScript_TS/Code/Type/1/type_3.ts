type Programmer3 = {
  name: string;
  knownFor: string[];
};

const ada3: Programmer3 = {
  name: 'Ada Lovelace'
};

console.log(ada3.name);
console.log(ada3.knownFor);
console.log(ada3);

// OUTPUT :- Property 'knownFor' is missing in type '{ name: string; }' but required in type 'Programmer3'.
