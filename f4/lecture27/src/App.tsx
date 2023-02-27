import React from "react";
import "./App.css";
import GreetingComponent from "./components/GreetingComponent";
import { users } from "./data/mock";

function App() {

  return (
    <>
      {users.map((students) => {
        return <GreetingComponent key={students.id} user={students} />;
      })}
    </>
  );
}

export default App;
