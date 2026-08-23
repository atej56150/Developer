function greet0(name: string, greeting: string): string {
    return `Hello, ${name}`
}
console.log(greet0("Hi", "World"))


function greet1(name: string, greeting?: string): string {
    if (greeting) {
        return `${name}, with ${greeting}`
    }
    return `Hello, ${name}`
}
console.log(greet1("World"))
console.log(greet1("Hi", "World"))
