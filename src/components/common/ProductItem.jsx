import React, { useState } from "react";
import { FiShoppingBag } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { addCart } from "../../controllers/cartSlice";
import { Modal } from "../common";

const ProductItem = ({ data }) => {
  const dispatch = useDispatch();
  const [modalActive, setModalActive] = useState(false);
  let allBtn = document.querySelector(".btn-add");

  const addCartHandler = (item) => {
    setModalActive(true);
    dispatch(addCart(item));
    setTimeout(function () {
      setModalActive(false);
    }, 1000);
  };

  return (
    <div className="product_items">
      {data.map((item) => (
        <div key={item.id} className="product">
          <div className="product__img">
            <img src={item.cover} alt="" />
            <button
              className="btn-add"
              onClick={() => {
                addCartHandler(item);
              }}
            >
              <FiShoppingBag className="icon" />
              <div className="add-text">Add to cart</div>
            </button>
          </div>
          <div className="product__details">
            <h2 className="product__details__title">{item.title}</h2>
            <p className="product__details__author">{item.author}</p>
            <div className="product__details__price">${item.price}</div>
          </div>
        </div>
      ))}
      {modalActive && <Modal />}
    </div>
  );
};

export default ProductItem;
