import React from "react";

const Cart = ({ cart }) => {
  let totalPrice = 0;
  for (const product of cart) {
    totalPrice = totalPrice + product.price;
  }
  return (
    <div>
      <h4>order summary</h4>
      <p>Selected Items: {cart.length}</p>
      <p>Total Price:{totalPrice}</p>
      <p>Total Shipping Charge: </p>
      <p>Tax: </p>
      <h6>Grand Total: </h6>
    </div>
  );
};

export default Cart;
