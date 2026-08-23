let x = 10;
let y = x++;

console.log(x+y)


// It declares a variable x and assigns it the value 10.
// The x++ operation first returns the current value of x (which is 10) and then increments x by 1.
// The y is assigned the value 10 (the value before the increment).
// After this line executes, x becomes 11 (because it was incremented by 1).
// y is assigned the value of x before the increment (10), and then x is incremented to 11.
// The sum x + y is 11 + 10 = 21.