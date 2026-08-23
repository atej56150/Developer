let tuple1: [string, number] = ["TypeScript", 27]
let tuple2: [string, number] = ["TypeScript", "27"]
console.log(tuple1)
console.log(tuple2)

let x: [string, number];
x = ["hello", 10];                  // Initialize it - OK
console.log(x)
x = [10, "hello"];                  // Initialize it incorrectly - Error
console.log(x)

type tuple3 = [number, boolean]
let details0: tuple3 = [1, true]
let details1: tuple3 = [1, "true"]
console.log(details0)
console.log(details1)
