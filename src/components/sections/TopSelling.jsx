import React, { useState } from "react";
import { topProducts } from "../../assets/data/data";
import { ProductItem } from "../common";

const TopSelling = () => {
  const [data, setData] = useState(topProducts);
  const allCategories = [
    "all",
    ...new Set(topProducts.map((item) => item.category)),
  ];
  const fitlerHandler = (category) => {
    const itemFiltered = topProducts.filter(
      (item) => item.category === category
    );
    if (category === "all") {
      setData(topProducts);
    } else {
      setData(itemFiltered);
    }
  };

  return (
    <>
      <section className="topselling-section section__padding">
        <div className="container">
          <div className="section__heading">
            <div className="section__title">Top Selling</div>
            <p>
              Meet our newbies! The latest templates uploaded to the
              marketplace.
            </p>
          </div>
          <div className="filter-contain">
            {allCategories.map((item) => (
              <button
                key={item}
                className="btn"
                onClick={() => {
                  fitlerHandler(item.toLowerCase());
                }}
              >
                {item}
              </button>
            ))}
          </div>
          <div className="products-contain">
            <ProductItem data={data} />
          </div>
        </div>
      </section>
    </>
  );
};

export default TopSelling;
