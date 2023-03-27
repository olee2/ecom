import React from "react";
import { useSelector } from "react-redux";
import RootState from "../../models/RootState";

import "./cartItems.scss";

function CartItems() {
  const { cartItems } = useSelector((state: RootState) => state.cart);

  return (
    <div className="cart-items">
      {cartItems.map((item) => (
        <div key={item.id} className="cart-item">
          <div className="image-container">
            <img src={item.imageUrl} alt={item.title} />
          </div>
          <div>
            <h2>{item.title}</h2>
            <p>NOK {item.discountedPrice}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CartItems;
