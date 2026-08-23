const getLength = (param: string | string[]) => {
    return param.length;
}

console.log(getLength("Hello")); 
// Output: 5

console.log(getLength(["Hello", "World"]));
// Output: 2

console.log(getLength(5))
