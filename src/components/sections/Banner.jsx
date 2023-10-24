import React from "react";
import { banner } from "../../assets/data/data";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <>
      <section className="banner section__padding">
        <div className="container">
          <div className="banner__content">
            {banner.map((item) => (
              <div key={item.id} className="banner__content__item">
                <img src={item.cover} alt="" />
                <div className="banner__content__details">
                  <h3>{item.title1}</h3>
                  <h3>{item.title2}</h3>
                  <p>{item.desc}</p>
                  <button className="btn">shop now</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
