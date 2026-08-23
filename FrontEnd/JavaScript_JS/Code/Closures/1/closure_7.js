function makeGreeter(name) {
  return function() {
    return `Hello, ${name}!`; // name is "remembered"
  };
}

const greetAli  = makeGreeter("Ali");
const greetSara = makeGreeter("Sara");

console.log(greetAli());  
console.log(greetSara()); 


/*

Output :-
Hello, Ali!
Hello, Sara!

Flow :-
const greetAli = makeGreeter("Ali");
       ↓
JavaScript calls: makeGreeter("Ali")
       ↓
name = "Ali"
       ↓
Inside the function: It returns the inner function.
return function() {
    return `Hello, ${name}!`;
};
       ↓
function() {
    return `Hello, ${name}!`;
}
       ↓
const greetAli = function() {
    return `Hello, ${name}!`;
}
       ↓
Then: console.log(greetAli());
JavaScript calls: greetAli();
Function Returns: `Hello, ${name}!`
Closure Remembers: name = "Ali"
Output: Hello, Ali!
       ↓
const greetSara = makeGreeter("Sara");
       ↓
JavaScript calls: makeGreeter("Sara");
       ↓
name = "Sara"
       ↓
Inside the function: It returns the inner function.
return function() {
    return `Hello, ${name}!`;
};
       ↓
function() {
    return `Hello, ${name}!`;
}
       ↓
const greetSara = function() {
    return `Hello, ${name}!`;
}
       ↓
Then: console.log(greetSara());
JavaScript calls: greetSara();
Function Returns: `Hello, ${name}!`
Closure Remembers: name = "Sara"
Output: Hello, Sara!

*/
