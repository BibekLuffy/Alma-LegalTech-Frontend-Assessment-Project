"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import FileImg from "@/images/file_error.webp";

import ResumeForm from "./ResumeForm";
import { FormErrorType } from "./types";
import Credentials from "./Credentials";
import VisaCategory from "./VisaCategory";
import AdditionalInfo from "./AdditionalInfo";
import { InputErrorCN, TitleCN } from "./leadFormStyles";

const LeadFrom = ({ setSubmitted }: { setSubmitted: () => void }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    linkedIn: "",
    visas: [] as string[],
    resume: null as File | null,
    additionalInfo: "",
  });

  const [errors, setErrors] = useState<FormErrorType>({});

  useEffect(() => {
    setErrors({});
  }, [formData]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({ ...prev, resume: file }));
  };

  const handleVisaChange = (visa: string) => {
    setFormData((prev) => ({
      ...prev,
      visas: prev.visas.includes(visa)
        ? prev.visas.filter((v) => v !== visa)
        : [...prev.visas, visa],
    }));
  };

  const validate = () => {
    const newErrors: typeof errors = {};
    if (!formData.firstName) newErrors.firstName = "First name is required";
    if (!formData.lastName) newErrors.lastName = "Last name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.linkedIn) newErrors.linkedIn = "LinkedIn profile is required";
    if (formData.visas.length === 0)
      newErrors.visas = "Select at least one visa";
    if (!formData.resume) newErrors.resume = "Resume is required";
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    const form = new FormData();
    for (const key in formData) {
      if (key === "visas") {
        form.append("visas", JSON.stringify(formData.visas));
      } else if (key === "resume") {
        if (formData.resume) {
          form.append("resume", formData.resume);
        }
      } else {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        form.append(key, (formData as any)[key]);
      }
    }

    // Simulate submission (replace with real API later)
    await new Promise((res) => setTimeout(res, 1000));
    setSubmitted();
  };

  return (
    <div className="flex flex-col items-center pt-10">
      <Image src={FileImg} alt="File" height={50} />
      <p className={TitleCN}>Want to understand your visa options?</p>
      <p className="font-bold text-xs mt-1 text-center max-w-[400px] leading-3">
        Submit the form below and our team of experienced attorneys will review
        your information and send a preliminary assessment of your case based on
        your goals.
      </p>
      <form
        autoComplete="off"
        onSubmit={handleSubmit}
        className="w-full max-w-[250px] mt-10"
      >
        <Credentials
          formData={formData}
          errors={errors}
          handleChange={handleChange}
          setFormData={(name, value) => {
            setFormData((prev) => ({ ...prev, [name]: value }));
          }}
        />

        <VisaCategory
          value={formData.visas}
          error={errors.visas}
          handleVisaChange={handleVisaChange}
        />

        <ResumeForm
          handleFileChange={handleFileChange}
          value={formData.resume}
        />
        {errors.resume && (
          <p className={`${InputErrorCN} mt-1`}>{errors.resume}</p>
        )}

        <AdditionalInfo
          value={formData.additionalInfo}
          setFormData={(name, value) => {
            setFormData((prev) => ({ ...prev, [name]: value }));
          }}
        />

        <button
          type="submit"
          className="rounded bg-[#1D1D1D] text-white w-full text-xs py-2 cursor-pointer hover:bg-black"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default LeadFrom;
