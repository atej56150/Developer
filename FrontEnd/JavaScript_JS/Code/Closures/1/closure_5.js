function counter() {
    let count = 0;

    return function () {
        count++;                                // count = count + 1;
        console.log(count);
    };
}

const increment = counter();

increment();
increment();
increment();



/*

Output :-
1
2
3

Inner function remembers variables from its outer function.

*/
