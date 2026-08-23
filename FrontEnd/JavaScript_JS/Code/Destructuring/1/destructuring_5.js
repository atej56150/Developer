const colors = ["red", "green", "blue"];

// Array without Destructuring:
const a = colors[0];  
const b = colors[1];  
console.log(a, b)



/*

Output :- 
red green

*/



// Array with Destructuring:
const [first, second, third] = colors;
console.log(first);   
console.log(second);  
console.log(third);   



/*

Output :- 
red
green
blue

*/
