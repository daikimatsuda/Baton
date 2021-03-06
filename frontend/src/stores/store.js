import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./auth";

const reducer = combineReducers({
  user: userReducer,
});

const store = configureStore({ reducer });

export default store;