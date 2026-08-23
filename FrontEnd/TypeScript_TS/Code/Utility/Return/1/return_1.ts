function createUser() {
    return {
        id: 1,
        name: "Piyush",
        email: "admin@admin.com"
    }
}

type UserType = ReturnType<typeof createUser>;

const user: UserType = createUser()

console.log("User:", user);

console.log("User ID:", user.id);
console.log("User Name:", user.name);
console.log("User Email:", user.email);
