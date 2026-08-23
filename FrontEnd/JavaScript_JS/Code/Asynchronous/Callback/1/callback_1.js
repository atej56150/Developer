function greet(name, callback) {
    console.log(`Hello ${name}`);

    callback();
}

function finished() {
    console.log("Greeting finished");
}

greet("Arun", finished);



/*

Hello Arun
Greeting finished

greet() runs first  →  then finished() runs later

*/
