// CALLBACK
function getUser(callback) {

    setTimeout(() => {

        const user = { name: "Arun" };

        callback(user);

    }, 1000);
}


// PROMISE
function getOrders(user) {

    return new Promise((resolve) => {

        setTimeout(() => {

            console.log("Getting orders for:", user.name);

            const orders = ["Order 1", "Order 2"];

            resolve(orders);

        }, 1000);

    });
}


// ASYNC/AWAIT
async function main() {

    getUser(async (user) => {

        console.log("User:", user);

        const orders = await getOrders(user);

        console.log("Orders:", orders);

    });

}

main();
