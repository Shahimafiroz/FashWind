import { configureStore, combineReducers } from "@reduxjs/toolkit";
import productsReducer from "./Products/productsReducer";

const rootReducer = combineReducers({
  productsReducer: productsReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
