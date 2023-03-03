import { useState } from "react";
import "./App.css";
import Profile from "./components/Profile";


function App() {
  // let somePerson = {firstname: 'Saule', surname: 'Doss', age: 22}

  return (
    <>
      <Profile person={{firstname: 'Saule', surname: 'Doss', age: 22}}/>
    </>
  );
}

export default App;

// {/* <button onClick={makeDark}>Mode</button> */}
