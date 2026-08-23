function subscribe1(message1) {
    console.log(message1);
}
subscribe1("Hello");


function subscribe2(message2: string) {
    console.log(message2);
}
subscribe2("World");


function subscribe3(message3: string) {
    console.log(message3);
    return message3;
}
subscribe3("HelloWorld");


function subscribe4(message4: string): void {
    console.log(message4);
}
subscribe4("Accenture");

function subscribe5(message5: string): void {
    console.log(message5);
    return message5;
}
subscribe5("Accenture-BNG");

function subscribe6(message6: string): void {
    console.log(message6);
    return message6;
}
subscribe6("Accenture-HYD");
console.log(subscribe6("Accenture"))
