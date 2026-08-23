function greet(greeting: string, ...names: string[]): void {
  // greeting = first arg (a single string)
  // names = the REST of the args, collected into an array

  console.log("Greeting:", greeting);
  console.log("Names array:", names);
  console.log("---");

  // forEach — just loops, doesn't return anything
  console.log("Using forEach:");
  names.forEach((name) => {
    console.log(`${greeting}, ${name}!`);
  });

  console.log("---");

  // map — creates a NEW array of greeting strings
  console.log("Using map:");
  console.log(names.map((name) => `${greeting}, ${name}!`))
  const greetings: string[] = names.map((name) => `${greeting}, ${name}!`);
  console.log(greetings);

  console.log("---");

  // map + join to print as one clean line
  console.log("Using map + join:");
  console.log(names.map((name) => `${greeting}, ${name}!`).join(" | "));
}

greet("Hello", "Alice", "Bob", "Charlie");



/*

greet( "Hello" ,  "Alice" ,  "Bob" ,  "Charlie" )
          ↓          ↓         ↓         ↓
       greeting    ⬇︎         ⬇︎        ⬇︎
       (1st arg)   collected into names[]
                   ["Alice", "Bob", "Charlie"]


ArgumentPosition    Value       Goes
1st                 "Hello"     greeting 
2nd                 "Alice"     names[0]
3rd                 "Bob"       names[1]
4th                 "Charlie"   names[2]

*/