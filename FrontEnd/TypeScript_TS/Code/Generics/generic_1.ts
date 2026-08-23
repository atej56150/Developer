function identity0(arg: any) {
    return arg;
}

let output1 = identity0("subscription")
let output2 = identity0(224)

console.log(output1)
console.log(output2)


function identity1<MyType>(arg: MyType): MyType {
    return arg;
}

let output3 = identity1("subscription")
let output4 = identity1(224)

console.log(output3)
console.log(output4)


function identity2<MyType>(arg: MyType): MyType {
    return arg;
}

let output5 = identity2<boolean>(true)
let output6 = identity2<boolean>(1.2)
let output7 = identity2<number>(1.2)

console.log(output5)
console.log(output6)
console.log(output7)
