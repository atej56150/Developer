// Rest Parameters
function add(...numbers) {
    let total = 0;

    for (let number of numbers) {
        total = total + number;
    }

    return total;
}

console.log(add(10, 20));        
console.log(add(10, 20, 30));    
console.log(add(10, 20, 30, 40));

/*

Output :-
30
60
100

*/
