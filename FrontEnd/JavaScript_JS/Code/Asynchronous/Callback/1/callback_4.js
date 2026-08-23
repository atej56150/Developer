function getUser(callback) {
    setTimeout(() => {
        const user = { name: "Arun" };
        callback(user);
    }, 1000);
}

function getOrders(user, callback) {
    setTimeout(() => {
        console.log("Hello", user)
        console.log("Hi", `${user.name}`)
        const orders = ["Order 1", "Order 2"];
        callback(orders);
    }, 1000);
}

getUser((user) => {
    console.log("User:", user);
    getOrders(user, (orders) => {
        console.log("Orders:", orders);
    });
});
