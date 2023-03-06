import React, { useContext, useState, createContext, useEffect } from "react";
import fetchData from "../../utils/fetchData";
import discounts from "../../utils/discounts";
import IProduct from "../../models/IProduct";

interface Props {
  children: JSX.Element;
}

const ProductContext = createContext<Array<IProduct>>([]);

function ProductProvider({ children }: Props) {
  const [products, setProducts] = useState<Array<IProduct>>([]);

  useEffect(() => {
    fetchData()
      .then((data) => {
        const withDiscount = discounts(data);
        setProducts(withDiscount);
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
