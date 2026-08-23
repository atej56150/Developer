type Role = "admin" | "user" | "guest";

type AllowedRoleExtract = Extract<Role, "admin" | "user">;

let role2: AllowedRoleExtract;

role2 = "admin";                    // ✅
role2 = "user";                     // ✅
role2 = "guest";                    // ❌ Error



/*

Result: "admin" | "user"

*/
