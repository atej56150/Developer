function getUser() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const user = { name: "Arun" };
            resolve(user);
        }, 1000);
    });
}

function getOrders(user) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const orders = ["Order 1", "Order 2"];
            resolve(orders);
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