// Promise with Number

function getPrice(): Promise<number> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(250);
        }, 10000);
    });
}

async function main(): Promise<void> {
    const price = await getPrice();

    console.log(price);
}

main();
