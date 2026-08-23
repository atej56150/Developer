// Callback Function
function greet(name) {
    console.log("Hello " + name);
}

function processUser(callback) {
    callback("Arun");
}

processUser(greet);

// Output :- Hello Arun



function processUser(callback) {
    callback();
}

processUser(function () {
    console.log("Hello Arun");
});



// Callback Function using Arrow Function
function processUser(callback) {
    callback();
}

processUser(() => {
    console.log("Hello Arun");
});
