import React from "react";
import "./price.scss";

interface IProps {
  price: number;
  discountedPrice: number;
}

function Price({ price, discountedPrice }: IProps) {
  return (
    <>
      {" "}
      {discountedPrice !== price ? (
        <div>
          {" "}
          <p className="old-price">NOK {price}</p>
          <p className="price">NOK {discountedPrice}</p>
        </div>
      ) : (
        <p className="price">NOK {price}</p>
      )}
    </>
  );
}

export default Price;
