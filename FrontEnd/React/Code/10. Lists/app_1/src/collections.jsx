function Collections() {
  const products = [
    { id: 101, name: "Laptop", price: 50000 },
    { id: 102, name: "Mobile", price: 20000 },
    { id: 103, name: "Headphones", price: 3000 }
  ];

  return (
    <div>
      <h1>Collections</h1>

      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>Price: ₹{product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default Collections;
