import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getProfile } from "./userSlice";

import AuthService from "redux/services/auth.service";

const token = JSON.parse(localStorage.getItem("bankToken"));

const initialState = token ? { isLoggedIn: true } : { isLoggedIn: false };

export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }, thunkAPI) => {
    try {
      await AuthService.login(email, password);

      return thunkAPI.dispatch(getProfile());
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async () => {
  await AuthService.logout();
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: {
    [login.fulfilled]: (state, action) => {
      state.isLoggedIn = true;
    },
    [login.rejected]: (state, action) => {
      state.isLoggedIn = false;
    },
    [logout.fulfilled]: (state, action) => {
      state.isLoggedIn = false;
    },
  },
});

export default authSlice.reducer;
