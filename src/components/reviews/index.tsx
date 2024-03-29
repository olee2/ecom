import React from "react";
import Rating from "../rating";
import "./reviews.scss";

interface IReview {
  id: string;
  username: string;
  rating: number;
  description: string;
}

function Review({ review }: { review: IReview }) {
  const { username, description, rating } = review;
  return (
    <div className="review">
      <div className="user-rating">
        <p>{username}</p>
        <Rating rating={rating} />
      </div>
      <p className="review-description">{description}</p>
    </div>
  );
}

export default Review;
