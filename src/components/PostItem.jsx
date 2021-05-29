import axios from "axios";
import React from "react";

/* Post Item Component */
export const PostItem = ({ post, setPosts, posts }) => {
  const deletePost = async () => {
    try {
      /* API Request Funtion */
      const { data } = await axios.delete(`${URL}/${post.id}`);
      console.log(data);

      /* This is just a Simulation to Delete the Post */
      const filtredPost = posts.filter((x) => {
        console.log(x);
        return x.id !== post.id;
      });

      //   console.log(filtredPost);
      setPosts(filtredPost);
    } catch (error) {
      console.log(error);
    }
  };

  const { id, title, body } = post;

  return (
    <>
      <div className="container">
        <div className="post">
          <div className="post-title">
            <h2>{title}</h2>
          </div>

          <div className="post-info">
            <h2>Post Number {id}</h2>
            <p>{body}</p>
            <button onClick={deletePost}>Delete</button>
          </div>
        </div>
      </div>
    </>
  );
};
