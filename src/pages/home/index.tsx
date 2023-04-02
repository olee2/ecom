import React, { useEffect, useState } from "react";
import Hero from "../../components/hero";
import { useProductContext } from "../../ProductProvider";
import Card from "../../components/card";
import "./home.scss";
import { fetchData, discounts, searchAlgo } from "../../utils";
import Search from "../../components/search";
import IProduct from "../../models/IProduct";

function Home() {
  const [loader, setLoader] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const { products, setProducts } = useProductContext();
  const [query, setQuery] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoader(true);
    fetchData()
      .then((data) => {
        const withDiscount = discounts(data);
        setProducts(withDiscount);
        setLoader(false);
        localStorage.setItem("allProducts", JSON.stringify(withDiscount));
      })
      .catch(() => {
        setError(true);
        setLoader(false);
      });
  }, []);

  useEffect(() => {
    let match: IProduct[] = [];
    let allItems: IProduct[] = [];
    const value = localStorage.getItem("allProducts");

    if (typeof value === "string") {
      allItems = JSON.parse(value);
    }

    if (query.length) {
      match = allItems.filter((p) => searchAlgo(p, query));
      if (match.length) {
        setNotFound(false);
        setProducts(match);
      } else {
        setNotFound(true);
      }
    } else {
      setProducts(allItems);
      setNotFound(false);
    }
  }, [query]);

  const handleQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value.toLowerCase());
  };

  return (
    <main>
      <Hero />
      <Search query={query} handleQuery={handleQuery} />
      {loader ? (
        <div className="loader" />
      ) : notFound ? (
        <div className="not-found">
          <p>No products found.</p>
          <button type="button" className="btn" onClick={() => setQuery("")}>
            Reset
          </button>
        </div>
      ) : error ? (
        <div className="not-found">
          <p>An error occured.</p>
        </div>
      ) : (
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
      )}
    </main>
  );
}

export default Home;
