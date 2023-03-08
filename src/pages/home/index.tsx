import React, { useEffect } from "react";
import Hero from "../../components/hero";
import { useProductContext } from "../../ProductProvider";
import Card from "../../components/card";
import "./home.scss";
import fetchData from "../../utils/fetchData";
import discounts from "../../utils/discounts";

function Home() {
  const { products, setProducts } = useProductContext();

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
    <main>
      <Hero />
      <div className="grid">
        {products.map((product) => {
          const {
            id,
            title,
            description,
            price,
            discountedPrice,
            imageUrl,
            rating,
            tags,
            reviews,
            discountedPercent,
          } = product;
          return (
            <Card
              id={id}
              title={title}
              description={description}
              price={price}
              discountedPrice={discountedPrice}
              imageUrl={imageUrl}
              rating={rating}
              tags={tags}
              reviews={reviews}
              discountedPercent={discountedPercent}
              key={id}
            />
          );
        })}
      </div>
    </main>
  );
}

export default Home;
