// Function Declaration
function calculateSalary(basic, bonus = 1000) {
    return basic + bonus;
}

// Function Expression
const showSalary = function (salary) {
    console.log("Salary:", salary);
};

// Arrow Function
const addTax = salary => salary + 500;

// Rest Parameter
function totalSalary(...salaries) {
    return salaries.reduce((total, salary) => total + salary, 0);
}

// Callback
function processSalary(salary, callback) {
    return callback(salary);
}

// Higher-Order Function
const finalSalary = processSalary(30000, addTax);

showSalary(finalSalary);

console.log(
    totalSalary(10000, 20000, 30000)
);

// IIFE
(() => {
    console.log("Salary calculation completed");
})();



/*

Output :-
Salary: 30500
60000
Salary calculation completed

*/
