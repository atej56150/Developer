// function scope - by using let variable with in block {} scope

function test() {
  let x = 10;
  console.log(x);                  // ✅ Works (inside block)
}
test()
console.log(x);                   // ❌ ReferenceError (outside block)
