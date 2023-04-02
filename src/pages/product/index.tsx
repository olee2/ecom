import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../../features/cart/cartSlice";
import IProduct from "../../models/IProduct";
import "./product.scss";
import Rating from "../../components/rating";
import Price from "../../components/price";
import Review from "../../components/reviews";
import { fetchData } from "../../utils";

// Dear tutor, the solution on this page is sub-optimal due to me not seeing the requirement to fetch single product from the API
// before it was to late. I originally had a solution without the fetch, and the below code is a hybrid between solutions.

function Product() {
  const { id } = useParams();
  const [showReviews, setShowReviews] = useState(false);
  let products;
  const value = localStorage.getItem("allProducts");
  const dispatch = useDispatch();
  const [product, setProduct] = useState<any>();
  const [error, setError] = useState<any>(false);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setLoader(true);
    fetchData(id)
      .then((data) => {
        setProduct(data);
        setLoader(false);
      })
      .catch(() => {
        setError(true);
      });
  }, []);

  const handleShowReviews = () => {
    setShowReviews(!showReviews);
  };

  if (typeof value === "string") {
    products = JSON.parse(value);
  }

  const product1: IProduct = products.find((p: IProduct) => p.id === id);

  return (
    <main className="product-main">
      {loader ? (
        <div className="inner-container">
          <div className="loader" />
        </div>
      ) : error ? (
        <div className="inner-container">
          <p>An error occured</p>
        </div>
      ) : (
        <div className="inner-container">
          <div className="product-info">
            {" "}
            {product?.reviews?.length ? (
              <div className="rating-container">
                <Rating rating={product?.rating} />({product?.reviews?.length})
              </div>
            ) : null}
            <h1>{product?.title}</h1>
            <p>{product?.description}</p>
            <div className="price-container">
              <Price
                discountedPrice={product?.discountedPrice}
                price={product?.price}
              />
            </div>
            <button
              type="button"
              className="btn"
              onClick={() => dispatch(addItem(product))}
            >
              Add to Cart
            </button>
            <div>
              {product?.reviews?.length ? (
                <div className="reviews-container">
                  <button
                    type="button"
                    className="reviews-btn"
                    onClick={handleShowReviews}
                  >
                    {showReviews ? "Hide Reviews" : "Show Reviews"}
                  </button>

                  {showReviews &&
                    product?.reviews.map((review: any) => (
                      <Review review={review} key={review.id} />
                    ))}
                </div>
              ) : null}
              {}
            </div>
          </div>
          <div className="img-container">
            <img src={product?.imageUrl} alt={product?.title} />
            {product1.discountedPercent && (
              <p className="discount">{product1.discountedPercent}% Discount</p>
            )}
          </div>
        </div>
      )}
    </main>
  );
}

export default Product;
