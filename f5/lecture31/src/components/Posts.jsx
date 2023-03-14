import { useEffect } from "react";
import { useState } from "react";

export const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);

  async function getPosts() {
    let response = await fetch(
      "https://my-json-server.typicode.com/sauledossymbekova/my-json-server/posts"
    );
    let json = await response.json();

    console.log(json);
    setPosts(json);
  }
  async function getUsers() {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let json = await response.json();

    console.log(json);
    setUsers(json);
  }

  useEffect(() => {
    getPosts();
    getUsers();
  }, []);

  return (
    <>
      <h1>List of posts:</h1>
        
      {/* <h4>List of Products:</h4>
      {posts.map((item) => (
        <p>
          {item.id} {item.title}
        </p>
      ))} */}
    <input/><button>Add New Task</button>
      <h4>List of Users:</h4>
      {users.map((item) => (
        <p>
          {item.id} {item.name}
        </p>
      ))}
    </>
  );
};
