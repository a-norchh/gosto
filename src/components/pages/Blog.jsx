import React from "react";
import { blog } from "../../assets/data/data";
import { BlogItem } from "../common";
import { Footer } from "../sections";

const Blog = () => {
  return (
    <>
      <div id="blog-page" className="heading__padding">
        <div className="container">
          <div className="section__heading">
            <div className="section__title">BLOG POSTS</div>
            <p>marketplace news, success stories and tutorials.</p>
          </div>
          <BlogItem data={blog} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blog;
