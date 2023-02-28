import React, { createContext, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./pages/home";
import Contact from "./pages/contact";
import fetchData from "./utils/fetchData";
import "./styles/styles.scss";

const ProductContext = createContext([]);

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchData()
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <ProductContext.Provider value={products}>
      <div>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </div>
    </ProductContext.Provider>
  );
}

export default App;
