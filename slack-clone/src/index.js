import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { StateProvider } from "./context/StateProvider";
import reducer, { initialState } from "./context/reducer";

ReactDOM.render(
  <React.StrictMode>
    {/* initial state and the reducer is being passed to the StateProvider files where we have used the userReducers(initialState, reducer) */}
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
