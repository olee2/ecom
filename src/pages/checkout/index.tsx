import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import RootState from "../../models/RootState";
import "./checkout.scss";

function Checkout() {
  const { cartItems, total, amount } = useSelector(
    (state: RootState) => state.cart
  );
  return (
    <main className="checkout-main">
      <div className="inner-container">
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
