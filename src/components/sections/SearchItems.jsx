import React from "react";
import { ProductItem } from "../common";
import { products } from "../../assets/data/data";

const SearchItems = ({ search }) => {
  // const searchKey = search.toLowerCase();
  // const title = products.title.toLowerCase();

  // console.log(searchKey);

  const prodFilter = products.filter((item) => {
    const searchKey = search.toLowerCase();
    const title = item.title.toLowerCase();
    return title.includes(searchKey);
  });

  return (
    <section className="search-items">
      <div className="container">
        <div className="section__heading">
          <div className="section__title">Search Results "{search}"</div>
          {prodFilter.length === 0 && <p>- Search not founded -</p>}
        </div>
        <ProductItem data={prodFilter} />
      </div>
    </section>
  );
};

export default SearchItems;
