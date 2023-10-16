import React from "react";
import { Hero, Product, Banner, Blog, Footer } from "../sections";

const Home = () => {
  return (
    <>
      <div id="home-page">
        <Hero />
        <Banner />
        <Product />
        <Blog />
        <Footer />
      </div>
    </>
  );
};

export default Home;
