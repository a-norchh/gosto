import React from "react";
import { FiSearch } from "react-icons/fi";

const Hero = () => {
  return (
    <>
      <section id="hero" className="heading__padding">
        <div className="container">
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
            <input type="text" placeholder="Search Products..." />
            <FiSearch className="search-icon" />
          </div>
          {/* Products Search */}
          <p className="example-text">
            Examples: Mockup, PSD, Theme Design, Image…
          </p>
        </div>
      </section>
    </>
  );
};

export default Hero;
