import React from "react";
import { ProductItem } from "../common";
import { products } from "../../assets/data/data";

const Product = () => {
  // console.log({ products });
  return (
    <section className="product-section section__padding">
      <div className="container">
        <div className="section__heading">
          <div className="section__title">Trendings Products</div>
          <p>
            Check the hottest designs of the week. These rising stars are worth
            your attention.
          </p>
        </div>
        <ProductItem data={products} />
      </div>
    </section>
  );
};

export default Product;
