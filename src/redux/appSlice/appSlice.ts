import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialAppState } from "./initialState";

const appSlice = createSlice({
  name: "appSlice",
  initialState: initialAppState,
  reducers: {
    setIsSubmitted: (state, action: PayloadAction<boolean>) => {
      state.isSubmitted = action.payload;
    },
  },
});

export const { setIsSubmitted } = appSlice.actions;

export default appSlice.reducer;
