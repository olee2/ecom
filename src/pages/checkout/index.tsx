import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import RootState from "../../models/RootState";
import CartItems from "../../components/cartItem";
import "./checkout.scss";

function Checkout() {
  const { total, amount } = useSelector((state: RootState) => state.cart);
  return (
    <main className="checkout-main">
      <div className="inner-container">
        <CartItems />
        <div className="">
          <h1>Shopping Bag</h1>
          <div className="amount">
            <p>{amount} product(s)</p>
          </div>
          <div className="total">
            <p>Total:</p>
            <p>{total} NOK</p>
          </div>
          <Link className="btn" to="success">
            Checkout
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Checkout;
