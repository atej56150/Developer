// Higher-Order Function - RETURN a function
function test() {
    return function() {
        console.log("Hello");
    };
}

const result = test();

result();



// Output :- Hello

/*

Here :- 
test() → returns a function  
result() → calls that function

*/
