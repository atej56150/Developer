type User2 = {
    name: string;
    age: number;
    email?: string;
};

let user2: User2 = {
    name: "John Doe",
    age: 30,
    email: "john.doe@example.com"
};

console.log(user2.name);
console.log(user2.age);   
console.log(user2.email);
console.log(user2);       
