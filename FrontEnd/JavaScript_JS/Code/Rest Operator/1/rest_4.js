// Rest with Array Destructuring

const numbers = [10, 20, 30, 40, 50];

const [first, ...rest] = numbers;

console.log(first);
console.log(rest);



/*

Output :-
10
[20, 30, 40, 50]

Here :-
numbers
↓
[10, 20, 30, 40, 50]
first
↓
10
rest
↓
[20, 30, 40, 50]

*/
