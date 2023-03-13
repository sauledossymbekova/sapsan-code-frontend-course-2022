// map
// conditional rendering = условный рендеринг

import "./App.css";
import Profile from "./components/Profile";
import { currentUser, users } from "./data";

function App() {
  // console.log(users)
  for(let i = 0; i< users.length; i++){
    console.log(users[i])
  }

  return (
    <div className="App">
      {/* <Profile user={currentUser} /> */}
      {/* {for(let i = 0; i< users.length; i++){
        <Profile user={users[i]} /> 
      }} */}
      {users.map(function(item){
        return <Profile user={item}/>
      })}
    </div>
  );
}

export default App;
