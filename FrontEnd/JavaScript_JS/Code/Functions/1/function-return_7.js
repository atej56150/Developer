// Higher-Order Function - RECEIVE a function
function calculate(a, b, operation) {
    return operation(a, b);
}

function add(x, y) {
    return x + y;
}

console.log(calculate(10, 20, add));



/*

Output :-
30

Flow :-
calculate(10, 20, add)
          │
          ↓
   a = 10
   b = 20
   operation = add
          │
          ↓
   operation(a, b)
          │
          ↓
      add(10, 20)
          │
          ↓
      10 + 20
          │
          ↓
         30

*/
