// Update Object Property

const user = {
    name: "Arun",
    age: 30
};

const updatedUser = {
    ...user,
    age: 31
};

console.log(updatedUser);



/*

Output :-

{
    name: "Arun",
    age: 31
}

The old object is not directly modified.

*/
