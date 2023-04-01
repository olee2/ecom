import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import RootState from "../../models/RootState";
import CartItems from "../../components/cartItems";
import "./checkout.scss";

function Checkout() {
  const { total, amount } = useSelector((state: RootState) => state.cart);
  return (
    <main className="checkout-main">
      {amount ? (
        <div className="inner-container">
          <CartItems />
          <div className="checkout">
            <h1>Shopping Bag</h1>
            <div className="amount">
              <p>
                {amount} {amount > 1 ? "product(s)" : "product"}
              </p>
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
      ) : (
        <div className="empty">
          <h1>Empty Cart</h1>
          <Link to="/" className="btn">
            Go shopping
          </Link>
        </div>
      )}
    </main>
  );
}

export default Checkout;
