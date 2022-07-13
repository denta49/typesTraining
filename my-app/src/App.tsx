import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Todos from "./components/Todos";
import Todo from "./models/todo";

function App() {
  const todos = [new Todo("Learn react"), new Todo("Learn ts")];
  return (
    <div>
      <Todos items={["Learn react", "Learn Ts"]} />
    </div>
  );
}

export default App;
