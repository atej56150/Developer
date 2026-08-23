import ProductCard from "./ProductCard_DestructuringProps";

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
      <h1>ProductList_2</h1>

      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
}

export default ProductList;



/*

product={product}
   ↑         ↑
prop name  value

left side: product is the prop name, creating a prop called product.
right side: {product} is the JavaScript variable containing the current product object from :- products.map((product) => ...).

means: Send this current product object to ProductCard using a prop name called product.

*/
