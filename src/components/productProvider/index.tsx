import React, { useContext, useState, createContext, useEffect } from "react";
import fetchData from "../../utils/fetchData";

const ProductContext = createContext([]);

interface Props {
  children: JSX.Element;
}

function ProductProvider({ children }: Props) {
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
      {children}
    </ProductContext.Provider>
  );
}

export const useProductContext = () => useContext(ProductContext);

export default ProductProvider;
