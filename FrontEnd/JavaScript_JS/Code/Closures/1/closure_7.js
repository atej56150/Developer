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

*/
