function ProductCard({ name, price }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Price: ₹{price}</p>

      <button>Add to Cart</button>
    </div>
  );
}

export default ProductCard;
