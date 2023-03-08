import React from "react";
import "./search.scss";

interface IProps {
  query: string;
  handleQuery: Function;
}

function Search({ query, handleQuery }: IProps) {
  return (
    <div className="search-container">
      <p className="search-label">Search products: </p>
      <input
        value={query}
        onChange={(v) => handleQuery(v)}
        type="text"
        className="search"
      />
    </div>
  );
}

export default Search;
