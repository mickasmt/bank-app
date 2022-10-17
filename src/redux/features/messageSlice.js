import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  message: null,
};

const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    setMessage: (state, action) => {
      return { message: action.payload };
    },
    clearMessage: () => {
      return { message: "" };
    },
  },
});

export const { setMessage, clearMessage } = messageSlice.actions;

export default messageSlice.reducer;
