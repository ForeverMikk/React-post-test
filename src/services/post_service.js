const url = "https://jsonplaceholder.typicode.com/posts";

export const listPost = async () => {
  await fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((json) => console.log(json));
};

export const createPost = async (title, body) => {
  await fetch(url, {
    method: "POST",
    body: JSON.stringify({
      title: title,
      body: body,
      userID: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      console.log(json);
    });
};

export const DeletePost = async (postId) => {
  await fetch(url + "/" + postId, {
    method: "DELETE",
  }).then((response) => {
    return "Method Deleted";
  });
};
