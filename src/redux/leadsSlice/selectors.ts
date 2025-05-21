import { RootState } from "../store";

export const selectLeads = (state: RootState) => state.leads.leads || [];

export const selectCurrentLeadPage = (state: RootState) =>
  state.leads.currentLeadPage || 1;
