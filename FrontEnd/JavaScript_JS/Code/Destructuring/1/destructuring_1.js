// Object without Destructuring

const user0 = {
    name: "Arun",
    age: 33,
    city: "Tirupati"
};

const names = user0.name;
const ages = user0.age;

console.log(names);
console.log(ages);



// Object with Destructuring

const user1 = {
    name: "Arun",
    age: 33,
    city: "Tirupati"
};

const { name, age } = user1;

console.log(name);
console.log(age);
