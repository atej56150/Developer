function add(a:number, b:number): number {
    return a + b;
}
console.log(add (5, 6))


function sub(a:number, b:number = 10): number {
    return a - b;
}
let output = sub(12, 3);
output = sub(4, 14)
console.log(output)
