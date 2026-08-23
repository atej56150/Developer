function outer() {
    let name = "Arun";

    function inner() {
        console.log(name);
    }

    inner();
}

outer();



/*

Output :- Arun

Here, inner() can access name because name belongs to the outer function.

*/
