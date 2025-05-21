import { RootState } from "../store";

export const selectIsLoggedIn = (state: RootState) =>
  state.admin.isLoggedIn || false;
