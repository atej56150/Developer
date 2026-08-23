function Cart() {
  const cartItems = ["Laptop", "Mouse"];

  return (
    <div>
      <h1>AND(&&)_2</h1>

      <p>Items: {cartItems.length}</p>

      {cartItems.length > 0 && (
        <button>Proceed to Checkout</button>
      )}
    </div>
  );
}

export default Cart;
