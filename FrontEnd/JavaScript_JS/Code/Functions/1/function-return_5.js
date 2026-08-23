// Default Parameters
function calculatePrice(price, tax = 10) {
    return price + tax;
}

console.log(calculatePrice(100));     
console.log(calculatePrice(100, 20)); 



/*

Output :-
110
120

*/
