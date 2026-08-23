// Error Handling with try/catch

function getData() {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            reject("Failed to get data");
        }, 2000);

    });
}

async function showData() {

    try {

        const result = await getData();

        console.log(result);

    } catch (error) {

        console.log(error);

    }
}

showData();



/*

Output: after 2secs → Failed to get data

try       → successful async code
catch     → failure async error

*/
