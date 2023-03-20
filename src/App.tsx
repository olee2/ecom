import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Layout from "./components/layout";
import Home from "./pages/home";
import Product from "./pages/product";
import Contact from "./pages/contact";
import ProductProvider from "./ProductProvider";
import { calculateTotal } from "./features/cart/cartSlice";
import RootState from "./models/RootState";

import "./styles/styles.scss";

function App() {
  const { cartItems } = useSelector((state: RootState) => state.cart);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateTotal());
  }, [cartItems]);

  return (
    <div>
      <ProductProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="product/:id" element={<Product />} />
          </Route>
        </Routes>
      </ProductProvider>
    </div>
  );
}

export default App;
