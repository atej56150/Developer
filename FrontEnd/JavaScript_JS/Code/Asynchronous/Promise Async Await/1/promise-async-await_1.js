function getData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data received");
        }, 2000);
    });
}

async function showData() {

    console.log("Starting...");

    const result = await getData();

    console.log(result);

    console.log("Finished");
}

showData();



/*

Output:

Starting...
      ↓  
After 2 seconds:
      ↓  
Data received
Finished

*/
