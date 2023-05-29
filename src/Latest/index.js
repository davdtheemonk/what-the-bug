import React, { useEffect, useState } from "react";
import "./styles.css";
import Cards from "../Cards";
import Loader from "../Loader";

export default function Latest(props) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);
  const displayBlogs = props.posts.map((blog) => {
    return <Cards loading={loading} blog={blog} key={blog.pk} />;
  });
  return (
    <div>
      <div className="featured1-header">
        <div className="featured1">
          <h3 className="featured1-head">Latest Posts</h3>
          <hr className="hr"></hr>
        </div>
      </div>
      {loading && <Loader />}
      {!loading && <div className="latest-stories">{displayBlogs}</div>}
    </div>
  );
}
