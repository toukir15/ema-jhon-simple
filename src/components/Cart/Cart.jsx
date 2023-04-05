import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
  let totalPrice = 0;
  let totalShipping = 0;
  let quantity = 0;

  for (const product of cart) {
    product.quantity = product.quantity || 1;
    totalPrice = totalPrice + product.price * product.quantity;
    totalShipping = totalShipping + product.shipping;
    quantity = quantity + product.quantity;
  }
  const tax = ((totalPrice * 7.5) / 100).toFixed(2);
  const taxNum = parseFloat(tax);
  const grandTotal = totalPrice + totalShipping + taxNum;
  return (
    <div>
      <h2 className="cart__header">Order Summary</h2>
      <p>Selected Items: {quantity}</p>
      <p>Total Price: ${totalPrice}</p>
      <p>Total Shipping Charge: ${totalShipping}</p>
      <p>Tax: {taxNum}</p>

      <h4>Grand Total: {grandTotal}</h4>
    </div>
  );
};

export default Cart;
