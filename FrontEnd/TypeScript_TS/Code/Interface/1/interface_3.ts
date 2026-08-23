interface Address {
  street: string;
  city: string;
  zipCode: string;
}

interface User {
  id: number;
  name: string;
  address: Address;
}

const user: User = {
  id: 1,
  name: "John",
  address: {
    street: "123 Main St",
    city: "New York",
    zipCode: "10001"
  }
};

console.log("User:", user);

console.log("ID:", user.id);
console.log("Name:", user.name);

console.log("Address:", user.address);
console.log("Street:", user.address.street);
console.log("City:", user.address.city);
console.log("Zip Code:", user.address.zipCode);
