interface Task  {
    title: string;
    description: string;
    completed: boolean;
    createdAt: Date;
    assignedTo?: string;
}

// all properties of type set to optional
type PartialTask = Partial<Task>;           

let List: PartialTask = {
    completed: true,
}

console.log(List)
console.log(List.completed)
