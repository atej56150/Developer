// Any
let randomValue1: any = 10;
randomValue1 = "Hello";
randomValue1 = true;

console.log(randomValue1);
console.log(typeof randomValue1);


// Unknown
var randomValue2: unknown = 10;
randomValue2 = "Hello";
randomValue2 = true;

console.log(randomValue2);
console.log(typeof randomValue2);


// Unknown
let randomValue3: unknown;
randomValue3 = "Hello";
randomValue3 = true;      
randomValue3 = 10;     

console.log(randomValue3);
console.log(typeof randomValue3);
