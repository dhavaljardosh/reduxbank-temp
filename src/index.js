import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { combineReducers, createStore } from "redux";

const balanceReducer = (balance = 1000, action) => {
  switch (action.type) {
    case "WITHDRAW_MONEY": {
      console.log(balance);
      let newTotal = balance - action.amount;
      return newTotal < 0 ? 0 : newTotal;
    }

    case "DEPOSIT_MONEY": {
      let newTotal = balance + action.amount;
      return newTotal < 0 ? 0 : newTotal;
    }

    default:
      console.log("UNKNOWN");
      return balance;
  }
};

const reducer = combineReducers({ balanceReducer });

export const store = createStore(reducer, { balanceReducer: 1000 });
console.log(store.getState());
const render = () => {
  return ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById("root")
  );
};
render();
store.subscribe(render);
