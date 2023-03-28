import React from "react";
import "./Cart.css";

const Cart = ({ cart, shipping }) => {
  console.log(cart);
  let totalPrice = 0;
  let totalShipping = 0;
  for (const product of cart) {
    totalPrice = totalPrice + product.price;
    totalShipping = totalShipping + product.shipping;
  }
  const tax = ((totalPrice * 7.5) / 100).toFixed(2);
  const grandTotal = totalPrice + totalShipping + tax;
  return (
    <div>
      <h2 className="cart__header">Order Summary</h2>
      <p>Selected Items: {cart.length}</p>
      <p>Total Price: ${totalPrice}</p>
      <p>Total Shipping Charge: ${totalShipping}</p>
      <p>Tax: {tax}</p>
      <h4>Grand Total: {grandTotal}</h4>
    </div>
  );
};

export default Cart;
