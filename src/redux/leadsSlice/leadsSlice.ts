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
  },
});

export const { addLead, updateLeadStatus } = leadsSlice.actions;

export default leadsSlice.reducer;
