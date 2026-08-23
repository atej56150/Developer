function orderFood(): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("🍕 Pizza is ready!");
        }, 10000);                                  // output after 10 seconds
    });
}

const food = orderFood();

food.then((result) => {
    console.log(result);
});



/*

Output after 10 seconds:

🍕 Pizza is ready!

*/
