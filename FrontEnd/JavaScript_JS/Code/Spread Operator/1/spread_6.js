// Add a Property

const user = {
    name: "Arun",
    age: 30
};

const newUser = {
    ...user,
    city: "Hyderabad"
};

console.log(newUser);



/*

Output :-

{
    name: "Arun",
    age: 30,
    city: "Hyderabad"
}

*/
