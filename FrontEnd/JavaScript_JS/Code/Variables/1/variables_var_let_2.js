// function {} scope

function example() {
    if (true) {
        var a = 10;                                 // var is function-scoped, not block-scoped
        let b = 20;                                 // let is block-scoped
    }
    console.log(a);                                 // ✅ Works (a is accessible anywhere in the function)
    console.log(b);                                 // ❌ Fails (b is block-scoped to the if-statement)
}

example();
