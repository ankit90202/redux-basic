import React from "react";
import { render } from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import counterReducer from "./reducers/counter";
import themeReducer from "./reducers/theme";

const entities = combineReducers({ counter: counterReducer, theme: themeReducer });
const rootReducer = combineReducers({ entities: entities });

const store = createStore(rootReducer, composeWithDevTools());

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
