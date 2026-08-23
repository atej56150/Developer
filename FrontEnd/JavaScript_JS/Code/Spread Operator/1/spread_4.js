// Combine Arrays

const fruits = ["Apple", "Banana"];
const vegetables = ["Carrot", "Potato"];

const food = [...fruits, ...vegetables];

console.log(food);

// Output :- ["Apple", "Banana", "Carrot", "Potato"]



const shelf1 = ['Book A', 'Book B'];
const shelf2 = ['Book D', 'Book E'];

const allBooks = [...shelf1, 'Book C', ...shelf2];
console.log(allBooks); 

// Output :- ['Book A', 'Book B', 'Book C', 'Book D', 'Book E']
