import React from "react";
import { useParams } from "react-router-dom";

function Product() {
  const { id } = useParams();
  return (
    <main>
      <h1>{id}</h1>
    </main>
  );
}

export default Product;
