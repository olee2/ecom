import React from "react";
import { Link } from "react-router-dom";
import "./card.scss";

interface IProduct {
  id: string;
  title: string;
  description: string;
  price: number;
  discountedPrice: number;
  imageUrl: string;
  rating: number;
  tags: object;
  reviews: object;
}

function Card({
  id,
  title,
  description,
  price,
  discountedPrice,
  imageUrl,
  rating,
  tags,
  reviews,
}: IProduct) {
  console.log(
    id,
    title,
    description,
    price,
    discountedPrice,
    rating,
    tags,
    reviews
  );
  return (
    <div className="card">
      <div
        className="image-container"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="info-container">
        <Link to={`/product/${id}`} />
        <h2>{title}</h2>
        <p className="description">{description}</p>
        <p className="price">$ {price}</p>
      </div>
    </div>
  );
}

export default Card;
