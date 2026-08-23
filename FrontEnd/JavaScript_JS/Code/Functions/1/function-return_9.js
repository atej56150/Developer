// Higher-Order Function - RETURN a function
function createGreeting() {

    return function () {
        console.log("Hello Arun");
    };

}

const greet = createGreeting();

greet();



/*

Output :-
Hello Arun

*/
