import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [users, setUsers] = useState([]);

  const setNewUser = async () => {
    console.log("Функция для добавления нового пользователя");

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: users.length + 1, name: "NewUser" }),
    };

    fetch("http://localhost:5000/users", requestOptions);
    getUsers();
  };

  const changeLastUserToSaule = async () => {
    console.log("Функция для изменения последнего пользователя");

    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: users.length + 1, name: "Saule" }),
    };

    fetch(`http://localhost:5000/users/${users.length}`, requestOptions);
    getUsers();
  };

  const deleteLastUser = async () => {
    console.log("последний пользователь удален");

    const requestOptions = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    };

    fetch(`http://localhost:5000/users/${users.length}`, requestOptions);
    getUsers();
  };

  const getUsers = async () => {
    let requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("http://localhost:5000/users", requestOptions)
      .then((response) => response.json())
      .then((result) => setUsers(result))
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="App">
      <button onClick={setNewUser}>Add user</button>
      <button onClick={deleteLastUser}> Delete last user</button>
      <button onClick={changeLastUserToSaule}>Change last user name to Saule</button>
      {users.map((user) => (
        <div>
          {user.id} - {user.name}
        </div>
      ))}
    </div>
  );
}

export default App;
