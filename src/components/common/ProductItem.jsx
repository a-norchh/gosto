import React from "react";
import { FiShoppingBag } from "react-icons/fi";

const ProductItem = ({ data }) => {
  return (
    <div className="product_items">
      {data.map((item) => (
        <div key={item.id} className="product">
          <div className="product__img">
            <img src={item.cover} alt="" />
            <div className="btn-add">
              <FiShoppingBag className="icon" />
              <div className="add-text">Add to cart</div>
            </div>
          </div>
          <div className="product__details">
            <h2 className="product__details__title">{item.title}</h2>
            <p className="product__details__author">{item.author}</p>
            <div className="product__details__price">${item.price}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductItem;
