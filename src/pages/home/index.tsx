import React, { useEffect, useState } from "react";
import Hero from "../../components/hero";
import { useProductContext } from "../../ProductProvider";
import Card from "../../components/card";
import "./home.scss";
import { fetchData, discounts, searchAlgo } from "../../utils";
import Search from "../../components/search";
import IProduct from "../../models/IProduct";

function Home() {
  const { products, setProducts } = useProductContext();
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetchData()
      .then((data) => {
        const withDiscount = discounts(data);
        setProducts(withDiscount);
        localStorage.setItem("allProducts", JSON.stringify(withDiscount));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    let match: IProduct[] = [];
    const allItems = JSON.parse(localStorage.getItem("allProducts") || "");

    if (query.length) {
      match = allItems.filter((p: any) => searchAlgo(p, query));
      if (match) {
        setProducts(match);
      }
    } else {
      setProducts(allItems);
    }

    console.log(match);
  }, [query]);

  const handleQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value.toLowerCase());
  };

  return (
    <main>
      <Hero />
      <Search query={query} handleQuery={handleQuery} />
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
