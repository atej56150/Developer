let num = 42;
let bool = true;

let str0 = num as unknown as string;
let str1 = bool as any as string;

console.log(str0);                        // "42"
console.log(str1);                        // "true"
