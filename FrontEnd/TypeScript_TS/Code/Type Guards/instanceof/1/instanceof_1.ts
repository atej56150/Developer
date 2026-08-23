class Dog {
    bark () {
        console.log("WoolF..!");
    }
}

class Cat {
    meow () {
        console.log("Meow..!")
    }
}

function makeSound(animal: Dog | Cat) {
    if (animal instanceof Dog) {
        animal.bark();
    } else {
        animal.meow();
    }
}

makeSound(new Dog());
makeSound(new Cat());