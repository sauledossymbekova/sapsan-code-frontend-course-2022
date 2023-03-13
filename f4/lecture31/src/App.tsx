import React from "react";
import "./App.css";
import { Counter } from "./components/Counter";
import { List } from "./components/List";
import { Posts } from "./components/Posts";

function App() {
  return (
    <div className="App">
      <Posts />
    </div>
  );
}

export default App;
