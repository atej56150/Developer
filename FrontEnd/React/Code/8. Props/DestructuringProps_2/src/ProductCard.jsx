function ProductCard({ name, price, category }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Price: ${price}</p>
      <p>Category: {category}</p>
    </div>
  );
}

export default ProductCard;
