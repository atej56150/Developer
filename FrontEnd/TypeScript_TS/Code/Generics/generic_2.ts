// Generic with Arrays

function getFirstElement0(arr: any[]) {
    return arr[2];
}

let myNum0 = getFirstElement0([1, 2, 3])
let myNum1 = getFirstElement0(["JavaScript", "TypeScript"])

console.log(myNum0)
console.log(myNum1)


function getFirstElement1<T>(arr: T[]): T | undefined {
    return arr[2];
}

let myNum2 = getFirstElement1([1, 2, 3])
let myNum3 = getFirstElement1(["JavaScript", "TypeScript"])

console.log(myNum2)
console.log(myNum3)


function getFirstElement2<T>(arr: T[]): T | null {
    return arr[2] ?? null;
}

let myNum4 = getFirstElement2([1, 2, 3])
let myNum5 = getFirstElement2(["JavaScript", "TypeScript"])

console.log(myNum4)
console.log(myNum5)
