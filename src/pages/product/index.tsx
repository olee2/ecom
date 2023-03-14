import React from "react";
import { useParams } from "react-router-dom";
import IProduct from "../../models/IProduct";
import "./product.scss";
import Rating from "../../components/rating";
import Price from "../../components/price";

function Product() {
  const { id } = useParams();
  let products;
  const value = localStorage.getItem("allProducts");

  if (typeof value === "string") {
    products = JSON.parse(value);
  }

  const product: IProduct = products.find((p: IProduct) => p.id === id);

  const {
    title,
    description,
    discountedPrice,
    rating,
    imageUrl,
    reviews,
    price,
    discountedPercent,
  } = product;

  return (
    <main className="product-main">
      <div className="inner-container">
        <div className="product-info">
          {" "}
          {reviews.length ? (
            <Rating rating={rating} numReviews={reviews.length} />
          ) : null}
          <h1>{title}</h1>
          <p>{description}</p>
          <Price discountedPrice={discountedPrice} price={price} />
        </div>
        <div className="img-container">
          <img src={imageUrl} alt={title} />
          {discountedPercent && (
            <p className="discount">{discountedPercent}% Discount</p>
          )}
        </div>
      </div>
    </main>
  );
}

export default Product;
