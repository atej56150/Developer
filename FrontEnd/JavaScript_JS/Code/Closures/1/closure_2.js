function test() {
    return function() {
        console.log("Hello");
    };
}

const result = test();

result();



/*

Flow :-
const result = test();
       ↓
     test()
       ↓
function test() {
    return function() {
        console.log("Hello");
    };
}
       ↓
test() is returning a function:
return function() {
    console.log("Hello");
};
       ↓
function() {
    console.log("Hello");
}
       ↓
Function Expression ➔ Store the returned function in result, result now contains a function, "Hello" has not been printed yet.
const result = function() {
    console.log("Hello");
};
       ↓
result();
       ↓
function() {
    console.log("Hello");
}
       ↓
console.log("Hello");
       ↓
     Hello

*/
