import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import cart from "../../assets/cart.svg";
import RootState from "../../models/RootState";
import "./cart.scss";

function Cart() {
  const { amount } = useSelector((state: RootState) => state.cart);

  return (
    <Link to="checkout" className="cart-container">
      <div className="inner-cart">
        <div className="cart-amount">
          <p>{amount}</p>
        </div>
        <img src={cart} alt="shopping bag" className="cart-img" />
      </div>
    </Link>
  );
}

export default Cart;
