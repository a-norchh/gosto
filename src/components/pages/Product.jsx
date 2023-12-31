import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { products } from "../../assets/data/data";
import { Footer } from "../sections/";
import { useDispatch } from "react-redux";
import { addCart } from "../../controllers/cartSlice";
import { Modal } from "../common";

const Product = () => {
  const params = parseInt(useParams().prodId);
  const navigate = useNavigate();
  const checkProd = products.filter((item) => item.id === params);
  const prodSelected = checkProd[0];
  const [modalActive, setModalActive] = useState(false);

  const refreshPage = () => {
    navigate(0);
  };

  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();

  const increaseQty = () => {
    setQty(qty + 1);
  };

  const decreaseQty = () => {
    if (qty > 1) {
      setQty(qty - 1);
    }
  };

  const addCartHandler = (item) => {
    setModalActive(true);
    const temp = { ...item, qty: qty };
    dispatch(addCart({ ...temp, addQuantity: true }));
    setTimeout(function () {
      setModalActive(false);
    }, 1000);
  };

  useEffect(() => {
    setQty(1);
  }, [params]);

  return (
    <>
      <div className="product-page">
        <div className="container">
          <div className="section__header">
            <div className="section__title">Product Details Page</div>
          </div>
          <div className="prod-container">
            <div className="prod-container__img">
              <img src={prodSelected.cover} alt="product" />
            </div>
            <div className="prod-container__details">
              <div className="prod-title">{prodSelected.title}</div>
              <div className="prod-price">${prodSelected.price}</div>
              <div className="prod-author">{prodSelected.author}</div>
              {/* ADD  */}
              <div className="prod-qty">
                <div className="btn-qty" onClick={decreaseQty}>
                  -
                </div>
                <div className="qty">{qty}</div>
                <div className="btn-qty" onClick={increaseQty}>
                  +
                </div>
                <button
                  className="btn-add"
                  onClick={() => addCartHandler(prodSelected)}
                >
                  ADD TO CART
                </button>
              </div>
              {/* END ADD */}
              <div className="prod-desc">
                <h4>PRODUCTS DESCRIPTION</h4>
                <p>
                  Designed by Puik in 1949 as one of the first models created
                  especially for Carl Hansen & Son, and produced since 1950. The
                  last of a series of chairs wegner designed based on
                  inspiration from antique chinese armchairs.
                </p>
              </div>
              <div className="prod-material">
                <h4>PRODUCT DETAILS</h4>
                <ul>
                  <li>
                    <p>Material: Plastic, Wood</p>
                  </li>
                  <li>
                    <p>Legs: Lacquered oak and black painted oak</p>
                  </li>
                  <li>
                    <p>Dimensions and Weight: Height: 80 cm, Weight: 5.3 kg</p>
                  </li>
                  <li>
                    <p>Length: 48cm</p>
                  </li>
                  <li>
                    <p>Depth: 52 cm</p>
                  </li>
                  <li>
                    <p>Seat Height: 44 cm</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
      {modalActive && <Modal />}
    </>
  );
};

export default Product;
