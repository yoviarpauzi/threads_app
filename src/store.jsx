import { configureStore } from "@reduxjs/toolkit";
import { loadingBarReducer } from "react-redux-loading-bar";
import userReducer from "./states/user/reducer";

const store = configureStore({
  reducer: {
    loadingBar: loadingBarReducer,
    user: userReducer,
  },
});

export default store;
