import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import App from "./App";
import store from "./redux/store";




const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
);