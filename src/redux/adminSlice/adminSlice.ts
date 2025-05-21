import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialAdminState } from "./initialState";

const adminSlice = createSlice({
  name: "adminSlice",
  initialState: initialAdminState,
  reducers: {
    setIsLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;
    },
  },
});

export const { setIsLoggedIn } = adminSlice.actions;

export default adminSlice.reducer;
