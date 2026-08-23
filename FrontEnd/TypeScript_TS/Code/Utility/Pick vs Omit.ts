type User = {
    id: string;
    name: string;
    email: string;
    password: string;
}

// only id and name
type PublicUser = Pick<User, "id" | "name">;

// everything except password
type PrivateUser = Omit<User, "password">;

const publicUser: PublicUser = {
    id: "101",
    name: "Arun"
};

const privateUser: PrivateUser = {
    id: "101",
    name: "Arun",
    email: "arun@example.com",
};

console.log("Public User:", publicUser);
console.log("Private User:", privateUser);

console.log("Public User ID:", publicUser.id);
console.log("Public User Name:", publicUser.name);

console.log("Private User ID:", privateUser.id);
console.log("Private User Name:", privateUser.name);
console.log("Private User Email:", privateUser.email);
