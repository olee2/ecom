import React, { useContext, useState, createContext } from "react";
import IProduct from "./models/IProduct";
import testProduct from "./constants/dummyData";

interface IProps {
  children: JSX.Element;
}

interface IValue {
  products: IProduct[];
  setProducts: React.Dispatch<React.SetStateAction<Array<IProduct>>>;
}

const initialValue = {
  products: [testProduct],
  setProducts: () => {},
};

const ProductContext = createContext<IValue>(initialValue);

function ProductProvider({ children }: IProps) {
  const [products, setProducts] = useState<Array<IProduct>>([testProduct]);

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
}

export const useProductContext = () => useContext(ProductContext);

export default ProductProvider;
