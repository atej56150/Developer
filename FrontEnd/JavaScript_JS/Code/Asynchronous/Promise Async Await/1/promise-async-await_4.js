function getUser() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ name: "Arun" });
        }, 1000);
    });
}

function getOrders(user) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Getting orders for:", user.name);
            resolve(["Order 1", "Order 2"]);
        }, 1000);
    });
}

async function main() {
    try {
        const user = await getUser();

        console.log("User:", user);

        const orders = await getOrders(user);

        console.log("Orders:", orders);

    } catch (error) {
        
        console.log("Error:", error);
    }
}

main();



/*

Output:
wait 1 second 
       ↓
User: { name: "Arun" }
       ↓ 
wait 1 second 
       ↓
Getting orders for: Arun
Orders: [ "Order 1", "Order 2" ]

*/

/*

getUser()
   ↓
Wait 1 second
   ↓
user = { name: "Arun" }
   ↓
getOrders(user)
   ↓
Wait 1 second
   ↓
Getting orders for: user.name → "Arun"
orders = ["Order 1", "Order 2"]
   ↓
console.log("Orders:", orders)

*/
