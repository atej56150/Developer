interface Colorful {
    color: string;
}

interface Circle {
    radius: number
}

type ColorfulCircle = Colorful & Circle

let mycircle:ColorfulCircle = {
    color: "red",
    radius: 10
}

console.log(Object.keys(mycircle))
console.log(Object.values(mycircle))
