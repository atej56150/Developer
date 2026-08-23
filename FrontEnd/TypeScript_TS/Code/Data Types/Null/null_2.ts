function findUser(id: number): string | null {
    if (id === 1) {
        return "John";
    }
    return null;
}

const user1 = findUser(1);
const user2 = findUser(2);

console.log(user1)

if (user2 === null) {
    console.log("User not found");
}

console.log(findUser(1))
console.log(findUser(3))