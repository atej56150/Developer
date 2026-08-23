const product = { title: "Laptop", price: 50000 };

console.log(product.title)



// Output :- Laptop

// Rename: title → productName
// Default: stock = 10 (if missing)



const { title: productName, price, stock = 10 } = product;

console.log(productName);
console.log(price);       
console.log(stock);       



/*

productName is a variable, and whatever value is assigned to title will be assigned to productName.
title → object property
productName → variable
Whatever value is inside title gets assigned to productName.

Output :-
Laptop
50000
10

*/
