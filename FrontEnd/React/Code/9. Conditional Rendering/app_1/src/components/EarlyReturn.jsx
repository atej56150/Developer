// EXAMPLE1
function Products() {
  const isLoading = true;

  if (isLoading) {
    return <h1>EarlyReturn - Products</h1>;
  }

  return (
    <div>
      <h1>Products</h1>
    </div>
  );
}

export default Products;



// EXAMPLE2
function ProductList() {
  const loading = false;
  const error = false;
  const products = ["Laptop", "Mobile", "Mouse"];

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>Something went wrong!</h2>;
  }

  return (
    <div>
      <h1>EarlyReturn - ProductList</h1>

      {products.map((product) => (
        <p key={product}>{product}</p>
      ))}
    </div>
  );
}

export { ProductList };



// EXAMPLE3
function UserStatus() {
  const condition1 = true;
  const condition2 = true;

  if (condition1) {
    return <h2>EarlyReturn ... 1</h2>;
  }

  if (condition2) {
    return <h2>EarlyReturn ... 2</h2>;
  }

  return <h2>Normal UI</h2>;
}

export { UserStatus };
