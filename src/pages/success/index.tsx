import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import RootState from "../../models/RootState";
import { clearCart } from "../../features/cart/cartSlice";
import "./success.scss";

function Success() {
  const { cartItems, total } = useSelector((state: RootState) => state.cart);
  const [cart, setCart] = useState<any>([]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!cartItems.length) {
      navigate("/");
    }
    setCart(cartItems);
    dispatch(clearCart());
  }, []);

  return (
    <main>
      <div className="inner-container">
        {" "}
        <h1>Your order was successful!</h1>
        <p>A confirmation is sent to your email. </p>
        <h2>Order Details</h2>
        <div className="order-details">
          <div className="order-details-items">
            {cart.map((item: any) => (
              <div className="order-details-item">
                <p>
                  - {item.title}
                  {item.amount !== undefined && item.amount > 1
                    ? ` (${item.amount})`
                    : null}
                </p>
                <p>
                  {item.amount
                    ? (item.discountedPrice * item.amount).toFixed(2)
                    : item.discountedPrice}{" "}
                  NOK
                </p>
              </div>
            ))}
          </div>
          <div>Total: {total} NOK</div>
        </div>
      </div>
    </main>
  );
}

export default Success;
