// Rest with Normal Parameters

function showUser0(name, ...skills) {
    console.log(name);
    console.log(skills);
}

showUser0("Arun", "React", "JavaScript", "NodeJS");



/*

Output :-
Arun
["React", "JavaScript", "NodeJS"]

Here :-
name
  ↓
"Arun"
...skills
  ↓
["React", "JavaScript", "NodeJS"]

*/



function showUser1(firstname, lastname, ...skills) {
    console.log(firstname + lastname);
    console.log(skills);
}

showUser1("Arun", "Theja", "React", "JavaScript", "NodeJS");



/*

Output :-
ArunTheja
["React", "JavaScript", "NodeJS"]

*/
