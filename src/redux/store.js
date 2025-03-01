import covidReducer from "./covidSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({ reducer: covidReducer });

export default store;
