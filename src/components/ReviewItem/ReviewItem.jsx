import React from "react";
import "./ReviewItem.css";
import { AiOutlineDelete } from "react-icons/ai";

const ReviewItem = ({ product }) => {
  console.log(product);
  const { name, img, price, quantity } = product;
  return (
    <div className="review__item">
      <img src={img} alt="" />
      <div className="review__details">
        <p className="product__title">{name}</p>
        <p>
          Price:<span className="orange__color">${price}</span>{" "}
        </p>
        <p>
          Quantity: <span className="orange__color">{quantity}</span>{" "}
        </p>
      </div>
      <button className="delete__btn">
        <AiOutlineDelete className="delete__icon" />
      </button>
    </div>
  );
};

export default ReviewItem;
