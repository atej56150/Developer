function ProductCard(props) {
  return (
    <div>
      <h5>{props.product.country}</h5>

      <p>Discount: {props.product.discount}%</p>

      <button>
        Apply Discount
      </button>
    </div>
  );
}

export default ProductCard;
