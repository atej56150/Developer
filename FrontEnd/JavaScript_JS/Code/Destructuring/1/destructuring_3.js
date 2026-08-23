const fruits = ["Apple", "Banana", "Mango", "Orange"];

// Array without Destructuring

const first = fruits[0];
const second = fruits[1];

console.log(first);
console.log(second);



/*

Output :-
Apple
Banana

*/



// Array with Destructuring

const [firsts, seconds, thrids] = fruits;

console.log(firsts);
console.log(seconds);
console.log(thrids);



/*

Output :-
Apple
Banana
Mango

*/
