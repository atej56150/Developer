const promise = new Promise((resolve, reject) => {

    const success = true;                           // change to false to test .catch()

    setTimeout(() => {

        if (success) {
            resolve("Data received ✅");           // triggers .then()
        } else {
            reject("Something went wrong ❌");     // triggers .catch()
        }

    }, 2000);

});

promise
    .then((result) => {
        console.log(result);                        // prints "Data received ✅"
    })
    .catch((error) => {
        console.log(error);                         // prints "Something went wrong ❌"
    });
