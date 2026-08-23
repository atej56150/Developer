// Ternary Operator

function getUser(id: number): string | undefined {
  return id === 1 ? "Ravi" : undefined;
}

const user1 = getUser(1);
const user2 = getUser(2);

console.log("User1:", user1);
console.log("User2:", user2);



// User1: Ravi
// User2: undefined