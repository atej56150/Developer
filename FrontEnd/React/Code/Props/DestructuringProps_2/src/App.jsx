import ProductCard from "./ProductCard";
import Mail from "./Details"

function App() {
  return (
    <div>
      <ProductCard
        name="iPhone"
        price={999}
        category="Mobile"
      />

      <ProductCard
        name="MacBook"
        price={1999}
        category="Laptop"
      />

      <Mail emailID="admin@admin.com" />
    </div>
  );
}

export default App;
