import React, { useEffect, useState } from "react";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  console.log(products);
  return (
    <div>
      <div className="shop__container">
        <div className="products__container">
          <h2>Produnt comming here</h2>
        </div>
        <div className="cart__container">
          <h4>order summary</h4>
        </div>
      </div>
    </div>
  );
};

export default Shop;
