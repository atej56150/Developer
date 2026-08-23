const promise = new Promise((resolve, reject) => {

    setTimeout(() => {                              // this is the async task
        resolve("Data received");
    }, 2000);

});

promise.then((result) => {
    console.log(result);
});

console.log("I run immediately!");                  // doesn't wait for the 2 seconds

/*

.then() is used to handle the result of a Promise once it has resolved successfully — it says "when this async task finishes, do this next.

Promise created → waits 2 seconds → resolve("Data received") → .then() runs → logs "Data received"

Output:
I run immediately!       // prints right away
Data received            // prints after 2 seconds

*/
