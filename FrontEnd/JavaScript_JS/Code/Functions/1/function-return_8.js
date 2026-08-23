// Higher-Order Function with Arrow Function - RECEIVE a function
function calculate(a, b, operation) {
    return operation(a, b);
}

const result = calculate(10, 20, (x, y) => x * y);

console.log(result);



/*

Output :-
200

Flow :-
calculate(10, 20, (x, y) => x * y)
                 │
                 ↓
        ┌─────────────────┐
        │ a = 10          │
        │ b = 20          │
        │ operation =     │
        │ (x,y) => x * y  │
        └─────────────────┘
                 │
                 ↓
        operation(a, b)
                 │
                 ↓
        operation(10, 20)
                 │
                 ↓
        (x, y) => x * y
                 │
                 ↓
          x = 10, y = 20
                 │
                 ↓
             10 * 20
                 │
                 ↓
                200
                 │
                 ↓
        result = 200
                 │
                 ↓
           console.log()
                 │
                 ↓
               200

*/
