function ProductList() {
  const products = [
    {
      id: 101,
      name: "iPhone",
      price: 70000
    },
    {
      id: 102,
      name: "Laptop",
      price: 60000
    },
    {
      id: 103,
      name: "Headphones",
      price: 5000
    }
  ];

  return (
    <div>
      <h1>ProductList_1</h1>

      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>

          <p>
            Price: ₹{product.price}
          </p>

          <button>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
