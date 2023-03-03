import React from "react";

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
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
}

export default Card;
