function ProductList() {
  const products = [
    { id: 101, name: "iPhone", price: 70000 },
    { id: 102, name: "Laptop", price: 60000 },
    { id: 103, name: "Headphones", price: 50000 }
  ];

  return (
    <div>
      <h1>ProductList_0</h1>

      {products.map(product => (
        <p key={product.id}>Price: ₹{product.price}</p>
      ))}
    </div>
  );
}

export default ProductList;
