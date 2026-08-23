interface Task  {
    title: string;
    description: string;
    completed: boolean;
    createdAt: Date;
    assignedTo?: string;
}

type ReadonlyTask = Readonly<Task>

let List: ReadonlyTask = {
    title: "SpringBoot",
    description: "Java",
    completed: true,
    assignedTo: "Ravi",
    createdAt: new Date(),  
}

List.completed = false

console.log(List)