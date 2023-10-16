import React from "react";

const BlogItem = ({ data }) => {
  return (
    <>
      <div className="blog_items">
        {data.map((item) => (
          <div key={item.id} className="blog">
            <div className="blog__img">
              <img src={item.cover} alt="" />
            </div>
            <div className="blog__details">
              <button className="btn">
                <span>{item.category}</span>
              </button>
              <div className="blog__date">
                Post Date :
                <span className="text-primary-color"> {item.date}</span>
              </div>
              <div className="blog__title">{item.title}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default BlogItem;
