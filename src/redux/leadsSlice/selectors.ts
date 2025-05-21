import { RootState } from "../store";

export const selectLeads = (state: RootState) => state.leads.leads || [];
