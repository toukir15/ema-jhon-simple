import React from "react";
import Cart from "../Cart/Cart";
import { useLoaderData } from "react-router-dom";
import ReviewItem from "../ReviewItem/ReviewItem";

const Order = () => {
  const cart = useLoaderData();
  return (
    <div className="shop__container">
      <div className="product__container">
        {cart.map((product) => (
          <ReviewItem key={product.id} product={product} />
        ))}
      </div>
      <div className="cart__container">
        <Cart cart={cart} />
      </div>
    </div>
  );
};

export default Order;
