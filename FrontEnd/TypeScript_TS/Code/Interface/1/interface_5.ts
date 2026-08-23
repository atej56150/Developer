interface Animal0 {
    name: string;
}

interface Animal1 extends Animal0 {
    type: string;
    count: number
}

let Dog: Animal1 = {
    name: "Buddy",
    type: "Golden Retriever",
    count: 2
}

console.log (Dog)