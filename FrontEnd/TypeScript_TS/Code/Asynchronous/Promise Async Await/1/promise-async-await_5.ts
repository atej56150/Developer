// Multiple Food Orders :- This is where async/await becomes really useful.

function orderFood(): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("🍕 Pizza");
        }, 2000);
    });
}

function orderDrink(): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("🥤 Coke");
        }, 1000);
    });
}

async function main(): Promise<void> {
    console.log("Ordering...");

    const food = await orderFood();

    console.log(food);

    const drink = await orderDrink();

    console.log(drink);

    console.log("Order complete!");
}

main();



/*

Ordering...
    ↓
wait 2 seconds
    ↓
🍕 Pizza
    ↓
wait 1 second
    ↓
🥤 Coke
    ↓
Order complete!

*/
