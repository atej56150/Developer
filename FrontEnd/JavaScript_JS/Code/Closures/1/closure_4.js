function outer0() {
    let x = 10;

    return function () {
        console.log(x);
    };
}

const result0 = outer0();

result0();


/*

Output :- 10

*/



function outer1() {
    let x = 120;

    return function () {
        console.log(x);
    };
}

outer1()();



/*

Output :- 120

*/



/*

outer1();         returns function, but doesn't execute it

outer1()();       returns AND executes the function

*/
