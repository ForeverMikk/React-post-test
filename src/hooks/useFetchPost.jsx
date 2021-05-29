import { useState, useEffect } from "react";

import { listPost } from "./../services/postService";

export const useFetchGifs = () => {
  const [dataState, setDataState] = useState({ post: [] });

  useEffect(() => {
    listPost().then((post) => {
      setDataState({
        postData: post,
      });
    });
  }, []);

  return dataState;
};
