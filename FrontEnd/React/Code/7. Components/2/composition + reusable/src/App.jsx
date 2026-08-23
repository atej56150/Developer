import ProductCard from "./ProductCard";

function App() {
  return (
    <div>
      <h1>Products</h1>

      <ProductCard
        name="Laptop"
        price={50000}
      />

      <ProductCard
        name="Mobile"
        price={25000}
      />

      <ProductCard
        name="Headphones"
        price={5000}
      />

      <button>OK</button>
    </div>
  );
}

export default App;
