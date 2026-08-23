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

Flow :-
const increment = counter();
       ↓
counter()
       ↓
function counter() {
    let count = 0;

initially: count = 0
       ↓
return function () {
    count++;
    console.log(count);
};
       ↓
So increment receives the returned function, this function remembers count = 0, That is the closure.
const increment = function () {
    count++;
    console.log(count);
};
       ↓
calls the returned function:
       ↓
increment() first time: increment();
Current count is already: count = 0
Then: count++; means: count = count + 1;
So: count = 0 + 1 = 1
Then: console.log(count); & Output: 1
Now the stored value is: count = 1
       ↓
increment() second time: increment();
Current count is already: count = 1
Then: count++; means: count = 1 + 1 = 2
Output: 2
Now the stored value is: count = 2
       ↓
increment() third time: increment();
Current value is already: count = 2
Then: count++; means: count = 2 + 1 = 3
Output: 3

*/
