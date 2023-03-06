import React from "react";
import { Link } from "react-router-dom";
import "./card.scss";
import IProduct from "../../models/IProduct";

function Card(props: IProduct) {
  const { id, title, description, price, imageUrl, discountedPercent } = props;
  return (
    <div className="card">
      <div
        className="image-container"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      {discountedPercent && (
        <p className="discount">{discountedPercent}% Discount</p>
      )}
      <div className="info-container">
        <div>
          <h2>{title}</h2>
          <p className="description">{description}</p>
        </div>
        <div className="priceBtnContainer">
          <p className="price">$ {price}</p>
          <Link className="btn" to={`/product/${id}`}>
            View Product
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
