import React from "react";
import Hero from "../../components/hero";
import { useProductContext } from "../../components/productProvider";
import Card from "../../components/card";
import "./styles.scss";

function Home() {
  const products = useProductContext();

  console.log(products);

  return (
    <main>
      <Hero />
      <div>
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
            />
          );
        })}
      </div>
    </main>
  );
}

export default Home;
