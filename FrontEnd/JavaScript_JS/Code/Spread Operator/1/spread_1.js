// Spread with Array

const numbers = [10, 20, 30];

console.log(numbers)
console.log(numbers[1])
console.log(...numbers);

const newNumbers = [...numbers];

console.log(newNumbers);
console.log(newNumbers[1])



/*

Output :-
[10, 20, 30]
20
[10, 20, 30]
20

*/

/*

Think :-
numbers
   ↓
[10, 20, 30]

...numbers
   ↓
10, 20, 30

*/
