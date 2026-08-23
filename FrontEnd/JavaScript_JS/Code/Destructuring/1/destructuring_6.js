const user = {
  name: "Riya",
  age: 25,
  city: "Hyderabad"
};

// Object without Destructuring:
const a = user
let b = user.name
var c = user.city
console.log(a)
console.log(b)
console.log(c)


/*

Output :- 
{
  "name": "Riya",
  "age": 25,
  "city": "Hyderabad"
}
Riya
Hyderabad

*/



// Object with Destructuring:
const { name, age, city } = user;
console.log(name); 
console.log(age);  
console.log(city); 



/*

Output :- 
Riya
25
Hyderabad

*/
