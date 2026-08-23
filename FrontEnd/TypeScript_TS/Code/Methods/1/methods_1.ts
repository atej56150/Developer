interface Product {
    name: string;
    price: number;
    getDiscount(percent: number): number;
}


let Laptop0: Product = {
    name: "Mac Book 0",
    price: 10000,
    getDiscount(percent: number): number {
        return this.price * (percent / 10);
    }
}

console.log(Laptop0.name);
console.log(Laptop0.price);

const finalPrice0 = Laptop0.getDiscount(10);

console.log("Final Price:", finalPrice0);


let Laptop1: Product = {
    name: "Mac Book 1",
    price: 20000,
    getDiscount(percent: number): number {
        const discountAmount = this.price * (percent / 20);
        return this.price - discountAmount;
    }
}

console.log(Laptop1.name);
console.log(Laptop1.price);

const finalPrice1 = Laptop0.getDiscount(10);

console.log("Final Price:", finalPrice1);
