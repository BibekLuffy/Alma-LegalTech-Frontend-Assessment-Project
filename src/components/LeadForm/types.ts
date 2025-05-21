export type FormDataType = {
  firstName: string;
  lastName: string;
  email: string;
  country: string;
  linkedIn: string;
  visas: string[];
  resume: File | null;
  additionalInfo: string;
};

export type FormErrorType = { [key: string]: string };

export type HandleChangeType = (
  e: React.ChangeEvent<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  >
) => void;

export type SetFormDataType = (name: string, value: string) => void;
