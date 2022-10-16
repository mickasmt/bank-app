import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
  },
  reducers: {
    updateProfile: (state, action) => {
      state.user = {
        firstname: "Tony",
        lastname: "Stark",
      };
    },
  },
});

export const { updateProfile } = userSlice.actions;

export default userSlice.reducer;
