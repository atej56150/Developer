// Promise Chaining

const promise = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve("Data received");
    }, 2000);

});

promise
    .then((result) => {
        console.log(result);                 // "Data received"
        return result + " ✅";              // passes to next .then()
    })
    .then((modified) => {
        console.log(modified);              // "Data received ✅"
        return modified + " Done";          // passes to next .then()
    })
    .then((final) => {
        console.log(final);                 // "Data received ✅ Done"
    })
    .catch((error) => {
        console.log(error);                 // catches any error from above chain
    });



/*

Data received
Data received ✅
Data received ✅ Done

*/
