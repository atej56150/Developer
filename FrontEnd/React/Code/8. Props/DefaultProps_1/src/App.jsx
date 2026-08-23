import UserDetails from "./Default";

function Product({ name, price = 0 }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Price: ${price}</p>
    </div>
  );
}

function App() {
  return (
    <>
      <UserDetails name="Arun" />

      <Product name="Laptop" />

      <UserDetails
        name="Theja"
        role="HelpDesk"
      />
    </>
  );
}

export default App;
