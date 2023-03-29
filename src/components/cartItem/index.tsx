import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import RootState from "../../models/RootState";
import upArrow from "../../assets/up.svg";
import downArrow from "../../assets/down.svg";
import {
  increamentItem,
  decreamentItem,
  verifyQuantity,
} from "../../features/cart/cartSlice";

import "./cartItems.scss";

function CartItems() {
  const { cartItems, amount } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(verifyQuantity());
  }, [amount]);

  return (
    <div className="cart-items">
      {cartItems.map((item) => (
        <div key={item.id} className="cart-item">
          <div className="cart-item-details">
            <div className="image-container">
              <img src={item.imageUrl} alt={item.title} />
            </div>
            <div>
              <h2>{item.title}</h2>
              <p>NOK {item.discountedPrice}</p>
            </div>
          </div>
          <div className="cart-item-quantity">
            <button
              type="button"
              onClick={() => dispatch(increamentItem(item))}
            >
              <img src={upArrow} alt={item.title} className="up-arrow" />
            </button>
            <p>{item.amount}</p>
            <button
              type="button"
              onClick={() => dispatch(decreamentItem(item))}
            >
              <img src={downArrow} alt={item.title} className="up-arrow" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CartItems;
