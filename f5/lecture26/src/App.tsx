import "./App.css";
import UserInfo from "./components/UserInfo";
import { users } from "./data/data";

function App() {
  console.log(users[0]);

  return (
    <div className="App">
      {/* <UserInfo user={users[0]}></UserInfo>
      <UserInfo user={users[1]}></UserInfo> */}

      {/* {users.map((myUser) => {
        return <UserInfo user={myUser}></UserInfo>;
      })} */}

      {users.map((myUser) => (
        <UserInfo user={myUser}></UserInfo>
      ))}
    </div>
  );
}

export default App;
