import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./pages/home";
import Product from "./pages/product";
import Contact from "./pages/contact";
import ProductProvider from "./ProductProvider";

import "./styles/styles.scss";

function App() {
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
