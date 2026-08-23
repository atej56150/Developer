// Rest with Calculation

function add(...numbers) {
    let total = 0;

    for (let number of numbers) {
        total = total + number;
    }

    return total;
}

console.log(add(10, 20, 30));



/*

Output :-
60

*/
