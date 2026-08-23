// 1. CALLBACK
function getUser(callback) {

    setTimeout(() => {

        const user = { name: "Arun" };

        callback(user);

    }, 1000);
}


// 2. PROMISE
function getOrders(user) {

    return new Promise((resolve) => {

        setTimeout(() => {

            const orders = ["Order 1", "Order 2"];

            resolve(orders);

        }, 1000);

    });
}


// 3. ASYNC/AWAIT
async function main() {

    getUser((user) => {

        console.log("User:", user);

        // Promise
        const ordersPromise = getOrders(user);

        // Async/Await cannot be used directly here
        // unless we create another async function

        ordersPromise.then((orders) => {
            console.log("Orders:", orders);
        });

    });

}

main();
