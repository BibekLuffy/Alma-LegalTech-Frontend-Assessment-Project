import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Lead, LeadStatus } from "./types";
import { initialLeadsState } from "./initialState";

const leadsSlice = createSlice({
  name: "leadsSlice",
  initialState: initialLeadsState,
  reducers: {
    addLead: (state, action: PayloadAction<Lead>) => {
      state.leads.push(action.payload);
    },
    updateLeadStatus: (
      state,
      action: PayloadAction<{ id: string; status: LeadStatus }>
    ) => {
      const lead = state.leads.find((l) => l.id === action.payload.id);
      if (lead) {
        lead.status = action.payload.status;
      }
    },
    setCurrentLeadPage: (state, action: PayloadAction<number>) => {
      state.currentLeadPage = action.payload;
    },
  },
});

export const { addLead, updateLeadStatus, setCurrentLeadPage } =
  leadsSlice.actions;

export default leadsSlice.reducer;
