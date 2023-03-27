import React from "react";
import "./Produnct.css";

const Product = (props) => {
  const { name, img, price, ratings, seller } = props.product;
  const handleAddToCart = props.handleAddToCart;
  return (
    <div className="product">
      <div className="img__container">
        <img src={img} alt="" />
      </div>
      <div className="product__info">
        <h3 className="product__name">{name}</h3>
        <p className="product__data">Price: {price}</p>
        <p className="product__data">Manufacturer: {seller}</p>
        <p id="product__ratings" className="product__data">
          Rating: {ratings} star
        </p>
      </div>
      <button
        onClick={() => handleAddToCart(props.product)}
        className="product__btn"
      >
        Add To Cart
      </button>
    </div>
  );
};

export default Product;
