// Promise with Objects

type Food = {
    name: string;
    price: number;
};

function orderFood() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                name: "Pizza",
                price: 250
            });
        }, 2000);
    });
}

async function main(): Promise<void> {
    const food = await orderFood();

    console.log(food);

}

main();
