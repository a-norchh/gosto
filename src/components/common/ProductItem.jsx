import React, { useState } from "react";
import { FiShoppingBag } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { addCart } from "../../controllers/cartSlice";
import { Modal } from "../common";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ProductItem = ({ data }) => {
  const dispatch = useDispatch();
  const [modalActive, setModalActive] = useState(false);

  const addCartHandler = (item) => {
    setModalActive(true);
    dispatch(addCart({ ...item, qty: 1 }));
    setTimeout(function () {
      setModalActive(false);
    }, 1000);
  };

  const fadeInUp = {
    initial: {
      opacity: 0,
      y: "5rem",
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <div className="product_items">
      {data.map((item) => (
        <motion.div
          key={item.id}
          className="product"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <div className="product__img">
            <Link to={`/product/${item.id}`}>
              <img src={item.cover} alt="" />
            </Link>
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
        </motion.div>
      ))}
      {modalActive && <Modal />}
    </div>
  );
};

export default ProductItem;
