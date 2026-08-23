// Promise Rejection: A Promise can also fail.

const promise = new Promise((resolve, reject) => {

    setTimeout(() => {
        reject("Something went wrong");
    }, 2000);

});

promise.catch((error) => {
    console.log(error);
});



/*

Output: Something went wrong

*/
