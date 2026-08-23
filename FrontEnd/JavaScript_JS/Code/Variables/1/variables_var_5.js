var yGlobal = 200;                      // Global Variable (accessible everywhere)

function test() {                       // function {} scope
    var yLocal = 100;                   

    console.log (yGlobal)
}

test()

console.log(yGlobal);                   // ✅ Works (global)
console.log(yLocal);                    // ❌ Fails (function {} scope)
