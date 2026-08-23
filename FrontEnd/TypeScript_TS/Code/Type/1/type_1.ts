type Programmer1 = {
  name: string;
  knownFor: string[];
};

const ada1: Programmer1 = {
  name: 'Ada Lovelace',
  knownFor: ['Mathematics', 'Computing', 'First Programmer']
};

console.log(ada1.name);
console.log(ada1.knownFor);
console.log(ada1);
