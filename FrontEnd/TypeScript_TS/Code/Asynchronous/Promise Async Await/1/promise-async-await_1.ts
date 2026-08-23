// Promise with String

function orderFoods(): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("🍕 Pizza is ready!");
        }, 15000);                              // output after 15 seconds
    });
}

async function main(): Promise<void> {
    console.log("Ordering food...");

    const food = await orderFoods();

    console.log(food);
}

main();



/*

Output after 15 seconds:

🍕 Pizza is ready!

*/
