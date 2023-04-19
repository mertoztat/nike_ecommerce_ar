import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import cartReducer from "./redux";

const store = configureStore({
  reducer: { cart: cartReducer },
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
