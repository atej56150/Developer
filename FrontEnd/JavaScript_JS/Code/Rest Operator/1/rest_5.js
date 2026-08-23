// Rest with Object Destructuring

const user = {
    name: "Arun",
    age: 30,
    city: "Hyderabad"
};

const { name, ...details } = user;

console.log(name);
console.log(details);



/*

Output :-
Arun
{
    age: 30,
    city: "Hyderabad"
}

*/
