function makeCounter() {
  let count = 0;          // outer variable

  return function() {
    count++;             // inner fn "closes over" count
    return count;
  };
}

const counter = makeCounter();
console.log(counter());
console.log(counter());
console.log(counter());



/*

Output :-
1
2
3

*/
