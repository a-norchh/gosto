import React from "react";
import { Hero, Product, Banner, Blog, Footer, TopSelling } from "../sections";

const Home = () => {
  return (
    <>
      <div id="home-page">
        <Hero />
        <Banner />
        <Product />
        <TopSelling />
        <Blog />
        <Footer />
      </div>
    </>
  );
};

export default Home;
