import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counter.slice";
import userReducer from "./slices/user.slice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
  },
});
