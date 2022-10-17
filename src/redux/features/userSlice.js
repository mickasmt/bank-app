import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setMessage } from "./messageSlice";

import UserService from "redux/services/user.service";

const user = JSON.parse(localStorage.getItem("bankUser"));

const initialState = user
  ? {
      firstName: user.firstname,
      lastName: user.lastname,
    }
  : {
      firstName: null,
      lastName: null,
    };

export const getProfile = createAsyncThunk(
  "user/fetchUserProfile",
  async (_, thunkAPI) => {
    try {
      const response = await UserService.getUser();
      return thunkAPI.fulfillWithValue(response.body);
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
  "user/updateUserProfile",
  async ({ firstname, lastname }, thunkAPI) => {
    try {
      const data = await UserService.updateUserProfile();
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
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
    },
    [getProfile.rejected]: (state, action) => {
      state.firstName = null;
      state.lastName = null;
    },
    [updateProfile.fulfilled]: (state, action) => {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
    },
    [updateProfile.rejected]: (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
    },
  },
});

// export const { updateProfile } = userSlice.actions;

export default userSlice.reducer;
