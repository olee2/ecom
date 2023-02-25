import React from "react";
import cart from "../../assets/cart.svg";
import "./styles.scss";

function Cart() {
  return (
    <div className="cart-container">
      <img src={cart} alt="" className="cart-img" />
    </div>
  );
}

export default Cart;
