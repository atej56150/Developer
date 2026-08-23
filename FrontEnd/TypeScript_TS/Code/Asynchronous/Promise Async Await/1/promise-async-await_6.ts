// Error Handling with try/catch

function orderFood(): Promise<string> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = false;

            if (success) {
                resolve("🍕 Pizza is ready!");
            } else {
                reject("❌ Food order failed");
            }
        }, 2000);
    });
}

async function main(): Promise<void> {
    try {
        const food = await orderFood();

        console.log(food);
    } catch (error) {
        console.log(error);
    }
}

main();



/*

success = false, should get after 2sec: ❌ Food order failed
success = true, should get after 2sec: 🍕 Pizza is ready!

try       → successful async code
catch     → failure async error

*/
