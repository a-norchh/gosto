import React, { useState } from "react";
import logo from "../assets/images/logo.svg";
import { navlist } from "../assets/data/data";
import { NavLink } from "react-router-dom";
import { FiShoppingBag, FiMenu } from "react-icons/fi";
import { AiFillCloseSquare } from "react-icons/ai";

const Header = () => {
  const [menuToggle, setMenuToggle] = useState(false);

  const toggleMenuHandler = () => {
    setMenuToggle((prev) => !prev);
  };

  return (
    <>
      <header id="header">
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
                <img src={logo} alt="Gosto logo" />
              </div>
              <ul className="menu-list">
                {navlist.map((item) => (
                  <li key={item.text}>
                    <NavLink to={item.path}>{item.text}</NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className="navbar__right">
              <button className="btn btn-cart">
                <FiShoppingBag className="icon" />
                <div>MY CART</div>
                <div className="num-cart">0</div>
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
        </div>
      </header>
    </>
  );
};

export default Header;
