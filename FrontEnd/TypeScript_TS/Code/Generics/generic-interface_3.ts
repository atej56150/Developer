interface LenghtWise {
    length: number
}

function logLenght <T extends LenghtWise> (arg: T): T {
    console.log(arg.length);
    return arg
}

logLenght("hello");
logLenght([1, 2, 3]); 

console.log(logLenght("hellos"))
