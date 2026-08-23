// Error Handling with try/catch

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
User: { name: "Arun" }
Orders: [ "Order 1", "Order 2" ]

*/
