const employees = [
  {
    id: 1,
    name: "Arun",
    role: "Developer"
  },
  {
    id: 2,
    name: "Rahul",
    role: "Tester"
  },
  {
    id: 3,
    name: "John",
    role: "Manager"
  }
];

const names = employees.map((employee) => {
  return employee.name;
});

console.log(names);
