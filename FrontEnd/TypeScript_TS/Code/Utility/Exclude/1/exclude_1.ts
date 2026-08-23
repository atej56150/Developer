type Role = "admin" | "user" | "guest";

type AllowedRoleExclude = Exclude<Role, "guest">;

let role1: AllowedRoleExclude;

role1 = "admin";                    // ✅
role1 = "user";                     // ✅
role1 = "guest";                    // ❌ Error



/*

Result: "admin" | "user"

*/
