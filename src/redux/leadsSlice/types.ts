export enum LeadStatus {
  PENDING = "Pending",
  REACHED_OUT = "Reached out",
}

export type Lead = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  linkedIn: string;
  country?: string;
  visas: string[];
  resumeUrl: string;
  additionalInfo: string;
  status: LeadStatus;
  createAt: Date;
};

export type LeadsState = {
  leads: Lead[];
  currentLeadPage: number;
};
