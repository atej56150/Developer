import React from "react";
import { Fragment } from "react"

import ProductCard_DP from "./ProductCard_DestructuringProps";
import ProductCard_P from "./ProductCard_Props";

function ProductList() {
  const products = [
    {
      id: 101,
      name: "iPhone",
      price: 70000,
      country: "UK",
      discount: 10
    },
    {
      id: 102,
      name: "Laptop",
      price: 60000,
      country: "USA",
      discount: 20
    },
    {
      id: 103,
      name: "Headphones",
      price: 5000,
      country: "India",
      discount: 30
    }
  ];

{/*

  return (
    <div>
      <h1>ProductList_3</h1>

      {products.map((product) => (
        <>
          <ProductCard_DP
            key={product.id}
            product={product}
          />
          <ProductCard_P
            key={product.id}
            product={product}
          />
        </>
      ))}
    </div>
  );

*/}

{/*

  return (
    <div>
      <h1>ProductList_3</h1>

      {products.map((product) => (
        <Fragment key={product.id}>
          <ProductCard_DP product={product} />
          <ProductCard_P product={product} />
        </Fragment>
      ))}
    </div>
  );

*/}

{/*

  return (
    <div>
      <h1>ProductList_3</h1>

      {products.map((product) => (
        <div key={product.id}>
          <ProductCard_DP product={product} />
          <ProductCard_P product={product} />
        </div>
      ))}
    </div>
  );

*/}

  return (
    <div>
      <h1>ProductList_3</h1>

      {products.map((product) => (
        <React.Fragment key={product.id}>
          
          <ProductCard_DP
            product={product}
          />

          <ProductCard_P
            product={product}
          />

        </React.Fragment>
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

means: Send this current product object to ProductCard_DP, ProductCard_P using a prop name called product.

*/
