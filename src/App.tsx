import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./pages/home";
import Contact from "./pages/contact";
import ProductProvider from "./components/productProvider";

import "./styles/styles.scss";

function App() {
  return (
    <div>
      <ProductProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </ProductProvider>
    </div>
  );
}

export default App;
