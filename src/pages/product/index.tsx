import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../../features/cart/cartSlice";
import IProduct from "../../models/IProduct";
import "./product.scss";
import Rating from "../../components/rating";
import Price from "../../components/price";
import Review from "../../components/reviews";

function Product() {
  const { id } = useParams();
  const [showReviews, setShowReviews] = useState(false);
  let products;
  const value = localStorage.getItem("allProducts");
  const dispatch = useDispatch();

  const handleShowReviews = () => {
    setShowReviews(!showReviews);
  };

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
            <div className="rating-container">
              <Rating rating={rating} />({reviews.length})
            </div>
          ) : null}
          <h1>{title}</h1>
          <p>{description}</p>
          <div className="price-container">
            <Price discountedPrice={discountedPrice} price={price} />
          </div>
          <button
            type="button"
            className="btn"
            onClick={() => dispatch(addItem(product))}
          >
            Add to Cart
          </button>
          <div>
            {reviews.length ? (
              <div className="reviews-container">
                <button
                  type="button"
                  className="reviews-btn"
                  onClick={handleShowReviews}
                >
                  {showReviews ? "Hide Reviews" : "Show Reviews"}
                </button>

                {showReviews &&
                  reviews.map((review) => <Review review={review} />)}
              </div>
            ) : null}
            {}
          </div>
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
