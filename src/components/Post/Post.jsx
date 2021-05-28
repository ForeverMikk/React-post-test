import React from "react";

import add from "./../../assets/add.png";
import "./post.css";
import { listPost } from "./../../services/post_service";

export const Post = () => {
  return (
    <section>
      <div className="new-post">
        <img src={add} alt="" />
      </div>

      <div className="container">
        <div className="post">
          <div className="post-title">
            <h5>API Test</h5>
            <h2>Example Post</h2>
          </div>

          <div className="post-info">
            <h2>Post Info</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint
              fugiat, magni explicabo cum ad illum deserunt maiores ipsum
              accusantium!
            </p>
            <button>Delete</button>
          </div>
        </div>
      </div>
    </section>
  );
};
