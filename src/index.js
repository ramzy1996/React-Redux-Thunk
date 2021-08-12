import React from "react";
import ReactDOM from "react-dom";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import App from "./App";
import thunk from "redux-thunk";

const init = {
  loading: false,
  data: [],
  error: ""
};

//Reducer
const LoginReducer = (state = init, action) => {
  switch (action.type) {
    case "Login_Start":
      return {
        ...state,
        loading: true
      };
    case "Login_Success":
      return {
        loading: false,
        data: action.payload,
        error: ""
      };
    case "Login_Fail":
      return {
        loading: false,
        data: [],
        error: action.error
      };

    default:
      return {
        ...state
      };
  }
};

//store
let store = createStore(LoginReducer, applyMiddleware(thunk));

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
