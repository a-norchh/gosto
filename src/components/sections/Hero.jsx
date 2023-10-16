import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import SearchItems from "./SearchItems";

const Hero = () => {
  const [searchProduct, setSearchProduct] = useState("");
  const onChangeHandler = (event) => {
    setSearchProduct(event.target.value);
  };

  return (
    <>
      <section id="hero" className="heading__padding">
        <div className="container container--hero">
          <h1>
            Over<span className="text-primary-color"> 6,500 </span>Curated
            Design Resources,
            <span className="text-primary-color"> Graphic & Website </span>
            Templates
          </h1>
          <p>
            High-quality Design Themes for personal or commercial use contains
            6k+ items in 100 categories.
          </p>
          <div className="search-contain">
            <div className="search-title">All Categories</div>
            <hr />
            <input
              type="text"
              placeholder="Search Products..."
              onChange={onChangeHandler}
            />
            <FiSearch className="search-icon" />
          </div>
          <p className="example-text">
            Examples: Mockup, PSD, Theme Design, Image…
          </p>
        </div>

        {/* Products Search */}
        {searchProduct ? <SearchItems search={searchProduct} /> : ""}
      </section>
    </>
  );
};

export default Hero;
