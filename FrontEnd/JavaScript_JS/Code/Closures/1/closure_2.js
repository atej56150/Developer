function test() {
    return function() {
        console.log("Hello");
    };
}

const result = test();

result();
