import { useEffect, useState } from "react";

interface Post {
    id: number,
    title: string,
    price: number,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "rating": {
      "rate": 3.9,
      "count": 120
    }
}

export const Posts = () => {
  const [count, setCount] = useState(0);
  const [posts, setPosts] = useState<Post[]>([]);

  const getPosts = async () => {
    try {
      let posts = await fetch(
        "https://my-json-server.typicode.com/sauledossymbekova/my-json-server/posts"
      );
      let json = await posts.json();
      console.log(json);

      setPosts(json);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Change State </button>
      <h1>Posts</h1>
      {posts.map((post) => 
        <p>{post.title}</p>
      )}
    </>
  );
};
