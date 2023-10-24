import React, { useState } from "react";
import logo from "../../assets/images/logo.svg";
import { navlist } from "../../assets/data/data";
import { NavLink } from "react-router-dom";
import { FiShoppingBag, FiMenu } from "react-icons/fi";
import { RiDeleteBin2Line } from "react-icons/ri";
import { AiFillCloseSquare } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { removeCart, addCart } from "../../controllers/cartSlice";

const Header = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const [stickyMenu, setStickyMenu] = useState(false);
  const [cartActive, setCartActive] = useState(false);

  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    setMenuToggle((prev) => !prev);
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const stickyActive = () => {
    if (window.scrollY > 0) {
      setStickyMenu(true);
    } else {
      setStickyMenu(false);
    }
  };

  window.addEventListener("scroll", stickyActive);

  const addProdHandler = (item) => {
    dispatch(addCart({ ...item, addQuantity: false }));
  };
  const decreaseProdHandler = (item) => {
    dispatch(removeCart({ ...item, clear: false }));
  };
  const removeProdHandler = (item) => {
    dispatch(removeCart({ ...item, clear: true }));
  };

  const cartData = useSelector((state) => state.cart.carts);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  let cartContent = (
    <div className="empty-cart">
      <div className="cart-icon">
        <FiShoppingBag />
      </div>
      <div>Your cart is empty</div>
    </div>
  );

  if (cartData.length !== 0) {
    cartContent = (
      <div className="prods-cart">
        <div className="cart-header">
          <div>Product</div>
          <div>Details</div>
        </div>
        <div className="prod-list">
          {cartData.map((item) => (
            <ul key={item.id} className="prod-details">
              <li>
                <img src={item.cover} alt="product" />
              </li>
              <li>
                <div className="prod-title">
                  {item.title.slice(0, 15)}
                  {item.title.length >= 15 && " . . ."}
                </div>
                <div>price : ${item.prodTotalPrice}</div>
                <div className="qty-controller">
                  quantity :{" "}
                  <span
                    className="decrease-qty btn-qty"
                    onClick={() => decreaseProdHandler(item)}
                  >
                    -
                  </span>
                  <span className="qty">{item.qty}</span>
                  <span
                    className="decrease-qty btn-qty"
                    onClick={() => addProdHandler(item)}
                  >
                    +
                  </span>
                </div>
              </li>
              <li
                className="remove-btn"
                onClick={() => removeProdHandler(item)}
              >
                <RiDeleteBin2Line />
              </li>
            </ul>
          ))}
        </div>
        <div className="cart-footer">
          <div className="total-prices">
            Total Prices : <span>${totalPrice}</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <header id="header" className={`${stickyMenu ? "sticky" : ""}`}>
        <div className="container">
          <nav className="navbar">
            <div className="navbar__left">
              <div className="menu-btn">
                <FiMenu
                  className="menu-btn__icon"
                  onClick={toggleMenuHandler}
                />
              </div>
              <div className="logo">
                <NavLink to="/" onClick={scrollToTop}>
                  <img src={logo} alt="Gosto logo" />
                </NavLink>
              </div>
              <ul className="menu-list">
                {navlist.map((item) => (
                  <li key={item.text}>
                    <NavLink to={item.path} onClick={scrollToTop}>
                      {item.text}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className="navbar__right">
              <button
                className="btn btn-cart"
                onClick={() => setCartActive(!cartActive)}
              >
                <FiShoppingBag className="icon" />
                <div>MY CART</div>
                <div className="num-cart">{cartData.length}</div>
              </button>
            </div>
            <div className={`navbar__small ${menuToggle ? "active" : ""}`}>
              <div className="menu-overlay" onClick={toggleMenuHandler}></div>
              <div className="menu-bar">
                <AiFillCloseSquare
                  className="btn-close"
                  onClick={toggleMenuHandler}
                />
                <ul className="menu-list">
                  {navlist.map((item) => (
                    <li key={item.text}>
                      <NavLink
                        to={item.path}
                        onClick={() => {
                          setMenuToggle(false);
                        }}
                      >
                        {item.text}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </nav>
          <div className={`cart-contain ${cartActive ? "active" : ""}`}>
            <div className="cart__inner">{cartContent}</div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
