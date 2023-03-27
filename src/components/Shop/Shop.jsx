import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleAddToCart = (product) => {
    console.log(product);
  };
  console.log(products);
  return (
    <div>
      <div className="shop__container">
        <div className="products__container">
          {products.map((product) => (
            <Product handleAddToCart={handleAddToCart} product={product} />
          ))}
        </div>
        <div className="cart__container">
          <h4>order summary</h4>
        </div>
      </div>
    </div>
  );
};

export default Shop;
