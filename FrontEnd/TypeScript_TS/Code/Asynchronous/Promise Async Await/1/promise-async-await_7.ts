type Food = {
    name: string;
    price: number;
};

function orderFood(): Promise<Food> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                name: "Pizza",
                price: 250
            });
        }, 10000);
    });
}

async function main(): Promise<void> {
    console.log("🍕 Starting food order...");

    console.log("⏳ Preparing your food...");
    const food = await orderFood();

    console.log("✅ Food is ready!");
    console.log(`🍕 Food: ${food.name}`);
    console.log(`💰 Price: ₹${food.price}`);
    console.log("🎉 Order complete!");
}

main();



/*

🍕 Starting food order...
        ↓
⏳ Preparing your food...
        ↓
     await
        ↓
   Wait 10 seconds
        ↓
✅ Food is ready!
        ↓
🍕 Food: Pizza
💰 Price: ₹250
        ↓
🎉 Order complete!

*/
