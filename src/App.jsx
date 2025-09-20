import React from "react";
import { Routes, Route } from "react-router-dom";
import Todos from "./todos.jsx";

const App = () => (
  <div>
    <h1>Todo App</h1>
    <Todos />
  </div>
);

export default App;