// String
let names: string = "ReactJS";
console.log(names);

// Number
let age: number = 10;
console.log(age)

// Boolean
let isLogin: boolean = true;
let isAdmin: boolean = false;
console.log(isLogin);
console.log(isAdmin);

// Array
let ary1: number[] = [1, 2, 3]
let ary2: number[] = [1, 2, 3, "abc"]
let ary3: string[] = ["abc", "def", "123"]
let ary4: string[] = ["abc", "123", 1]
console.log(ary1)
console.log(ary2)
console.log(ary3)
console.log(ary4)

var person0 = ["TypeScript", 27]
console.log(person0)

// Tuples
let person1: [string, number] = ["TypeScript", 27]
let person2: [string, number] = ["TypeScript", "27"]
console.log(person1)
console.log(person2)

// Enum
enum Color {
    Red,
    Black,
    Green
}
let favoriteColor: Color = Color.Black
console.log(favoriteColor)
console.log(Color[favoriteColor]);
let hatedColor = Color.Red;
console.log(hatedColor)

// Any (avoid Any)
let anyValue: any = 10;
anyValue = "javascript";
anyValue = true;
console.log(anyValue)

// Unknown (safer than Any)
let userInput: unknown;
userInput = 10
userInput = "html"
userInput = false
console.log(userInput)

// Void
function subscribe0(message0) {
    console.log(message0)
}
subscribe0("python")
subscribe0(10)
subscribe0(false)

function subscribe1(message1: string) {             
    console.log(message1)
}
subscribe1("python")
subscribe1(10)
subscribe1(false)

function subscribe2(message2: unknown) {             
    console.log(message2)
    return "unknown message"
}
subscribe2("python")
subscribe2(10)
subscribe2(false)
console.log(subscribe2("NextJS"));
console.log(subscribe2(100));
console.log(subscribe2(true));

function subscribe3(message3: any): void {             
    console.log(message3)
    return "unknown message"
}
subscribe3("python")
subscribe3(10)
subscribe3(false)

function subscribe4(message4: any): void {             
    console.log(message4)
}
subscribe4("python")
subscribe4(10)
subscribe4(false)

function subscribe5(message5: boolean): void {
    console.log(message5);
    return;                                                 // ✅ allowed (returns nothing)
}
subscribe5("python")
subscribe5(10)
subscribe5(false)
console.log(subscribe5("NextJS"));
console.log(subscribe5(100));
console.log(subscribe5(true));

function subscribe6(message6: string): string {
    console.log(message6);
    return message6;                                        // ✅
}
subscribe6("python")
subscribe6(10)
subscribe6(false)

// Undefined
let u: undefined = undefined;
console.log("Value of u:", u);
console.log(u === undefined);

// Null
let n: null = null;
console.log("Value of n:", n);
console.log(n === null);
