// string enums

enum Role {
    Admin = "ADMIN",
    User = "USER",
    Guest = "Guest"
}

let role: Role = Role.Admin;

console.log("Role:", role);
console.log("Admin value:", Role.Admin);
console.log("User value:", Role.User);
console.log("Guest value:", Role.Guest);
