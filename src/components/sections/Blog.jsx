import React from "react";
import { blog } from "../../assets/data/data";
import { BlogItem } from "../common";

const Blog = () => {
  const blogLatest = blog.slice(0, 3);

  return (
    <section className="blog-section section__padding">
      <div className="container">
        <div className="section__heading">
          <div className="section__title">LATEST BLOG POSTS</div>
          <p>Latest marketplace news, success stories and tutorials.</p>
        </div>
        <BlogItem data={blogLatest} />
      </div>
    </section>
  );
};

export default Blog;
