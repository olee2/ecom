import React from "react";
import Hero from "../../components/hero";
import { useProductContext } from "../../components/productProvider";
import Card from "../../components/card";
import "./home.scss";

function Home() {
  const products = useProductContext();

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
