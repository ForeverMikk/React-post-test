import React, { useEffect, useState } from "react";
import axios from "axios";

import { PostItem } from "./PostItem";
import "./post.css";

const URL = "https://jsonplaceholder.typicode.com/posts";

/* POST LIST COMPONENT */
const PostList = ({ posts, setPosts }) => {
  return (
    <>
      {posts &&
        posts.map((post) => (
          <PostItem
            key={post.id}
            post={post}
            setPosts={setPosts}
            posts={posts}
          />
        ))}
    </>
  );
};

/* ADD POST COMPONENT */
/* 
I have an issue here, I try to push my new post into the post
array but for some reason it didn't work. 
But the API Request works pretty good 
*/
const AddPost = ({ setUpdate, setPosts, posts }) => {
  const [post, setPost] = useState({ title: "", body: "" });

  const handleChange = (event) => {
    setPost({ ...post, [event.target.name]: event.target.value });
  };

  const createPost = async (event) => {
    event.preventDefault();

    try {
      const response2 = await axios.post(
        URL,
        {
          ...post,
          userId: 1,
        },
        {
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
      console.log(response2);
      setPosts([...posts, post]);
      setUpdate(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={createPost}>
      <h1 className="create-title"> Post Data </h1>
      <input
        type="text"
        onChange={handleChange}
        value={post.title}
        name="title"
      />
      <input
        type="text"
        onChange={handleChange}
        value={post.body}
        name="body"
      />
      <button>Create Post</button>
    </form>
  );
};

/* MAIN POST COMPONENT */
export const Post = () => {
  const [update, setUpdate] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPost = async () => {
      console.log("getPost init");
      try {
        /* API Request to Create a Post */
        const response = await fetch(URL);
        const postsData = await response.json();
        /* To look only the last 5 Posts */
        const data = postsData.slice(-5).reverse();

        setPosts(data);
        console.log({ data });
      } catch (error) {
        console.log(error);
      }
    };

    getPost();
  }, [update]);

  return (
    <section>
      <AddPost setUpdate={setUpdate} posts={posts} setPosts={setPosts} />
      <PostList update={update} posts={posts} setPosts={setPosts} />
    </section>
  );
};
