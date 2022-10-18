import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/authSlice";
import userReducer from "./features/userSlice";

/** Configure redux store for whole app */
export default configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
  },
  devTools: true,
});
