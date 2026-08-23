// Array with Destructuring - Skipping Values

const numbers = [10, 20, 30];

const [first, , third] = numbers;

console.log(first); 
console.log(third); 



/*

Output :-
10
30

The empty position skips 20

*/
