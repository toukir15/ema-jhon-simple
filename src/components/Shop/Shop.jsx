import React, { useEffect, useState } from "react";
import { addToDb, getShoppingCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    // console.log(products);
    const storedCart = getShoppingCart();
    for (const id in storedCart) {
      const savedProduct = products.find((product) => product.id == id);
      console.log(savedProduct);
    }
  }, [products]);

  const handleAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    addToDb(product.id);
  };
  return (
    <div>
      <div className="shop__container">
        <div className="products__container">
          {products.map((product) => (
            <Product handleAddToCart={handleAddToCart} product={product} />
          ))}
        </div>
        <div className="cart__container">
          <Cart cart={cart} />
        </div>
      </div>
    </div>
  );
};

export default Shop;
