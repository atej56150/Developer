type Address = {
  street: string;
  city: string;
  zipCode: string;
};

type User = {
  id: number;
  name: string;
  address: Address;
};

const user: User = {
  id: 2,
  name: "Cena",
  address: {
    street: "456 Elm St Main St",
    city: "Brooklyn",
    zipCode: "10002"
  }
};

console.log("User:", user);

console.log("ID:", user.id);
console.log("Name:", user.name);

console.log("Address:", user.address);
console.log("Street:", user.address.street);
console.log("City:", user.address.city);
console.log("Zip Code:", user.address.zipCode);
