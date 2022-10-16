import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setMessage } from "./messageSlice";

import UserService from "redux/services/user.service";

const initialState = {
  firstName: null,
  lastName: null
};

export const getProfile = createAsyncThunk(
  "user/profile",
  async ({ email, password }, thunkAPI) => {
    try {
      const data = await UserService.getUser();
      return { user: data };
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue();
    }
  }
);

export const updateProfile = createAsyncThunk(
  "user/profile",
  async ({ email, password }, thunkAPI) => {
    try {
      const data = await UserService.getUser();
      return { user: data };
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue();
    }
  }
);


export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
    [getProfile.fulfilled]: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload.user;
    },
    [getProfile.rejected]: (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
    },
    [updateProfile.fulfilled]: (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
    },
    [updateProfile.rejected]: (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
    },
  },
});

// export const { updateProfile } = userSlice.actions;

export default userSlice.reducer;
