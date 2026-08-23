// Default Parameters - without Default Value
function greet(name) {
    console.log("Hello " + name);
}

greet();

// Output :- Hello undefined



// Default Parameters - with Default Value
function greet(name = "Guest") {
    console.log("Hello " + name);
}

greet();

// Output :- Hello Guest



// Default Parameters - Override the Default Value
function greet(name = "Guest") {
    console.log("Hello " + name);
}

greet("Family");

// Output :- Hello Family
