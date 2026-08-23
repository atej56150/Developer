// promise_1 code converted to a Function

function getData() {                                            // SYNC — function definition
    return new Promise((resolve, reject) => {
        setTimeout(() => {                                      // this is the async task
            resolve("Data received");
        }, 2000);
    });
}

getData().then((result) => {                                    // SYNC — function is called immediately
    console.log(result);                                        // ASYNC — waits for resolve
});

console.log("I run immediately!");                              // this is the sync task, doesn't wait for the 2 seconds



/*

.then() is used to handle the result of a Promise once it has resolved successfully — it says "when this async task finishes, do this next.

Promise created → waits 2 seconds → resolve("Data received") → .then() runs → logs "Data received"

Output:
I run immediately!       // prints right away
Data received            // prints after 2 seconds

*/
