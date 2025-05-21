import { RootState } from "../store";

export const selectIsSubmitted = (state: RootState) =>
  state.app.isSubmitted || false;
