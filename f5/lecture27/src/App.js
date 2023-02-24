import "./App.css";
import UserInfo from "./components/UserInfo";
import { users } from "./data/data";

function App() {
  console.log(users[0]);

  return (
    <div className="App">
      {/* <button className="btn btn-primary"> Click me</button> */}

      {users.map((myUser) => (
        <UserInfo key={myUser.id} user={myUser}></UserInfo>
      ))}
    </div>
  );
}

export default App;


// let a = 0;
// return (
//   <div>
//     <h1>Hello</h1>
//     <h2>Welcome Student</h2>
//     <h3>{true}</h3>
//     <img
//       style={{ width: "200px", borderRadius: "50%" }}
//       src="https://avatars.githubusercontent.com/u/44088023?v=4"
//       alt="myPhoto"
//     />
//     <button onClick={() => {}}>Click me</button>
//     <input onChange={() => console.log(++a)}></input>
//   </div>
// );