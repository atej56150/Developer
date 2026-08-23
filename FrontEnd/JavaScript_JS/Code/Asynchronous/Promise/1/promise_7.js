// Promise Chaining

function step1() {
    return Promise.resolve("Step 1 completed");
}

function step2(message) {
    return Promise.resolve(`${message} → Step 2 completed`);
}

function step3(message) {
    return Promise.resolve(`${message} → Step 3 completed`);
}

step1()
    .then((result) => {
        return step2(result);
    })
    .then((result) => {
        return step3(result);
    })
    .then((result) => {
        console.log(result);
    });



/*

Output: Step 1 completed → Step 2 completed → Step 3 completed

*/
