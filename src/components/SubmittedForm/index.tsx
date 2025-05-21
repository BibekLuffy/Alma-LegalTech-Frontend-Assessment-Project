import React from "react";
import Image from "next/image";
import FileImg from "@/images/file_error.webp";
import { useAppDispatch } from "@/redux/hooks";
import { setIsSubmitted } from "@/redux/appSlice/appSlice";

import { TitleCN } from "../LeadForm/leadFormStyles";

const SubmittedForm = () => {
  const dispatch = useAppDispatch();

  return (
    <div className="h-[100dvh] flex flex-col items-center justify-center">
      <Image src={FileImg} alt="File" height={50} />
      <p className={TitleCN}>Thank You</p>
      <p className="font-bold text-xs mt-1 text-center max-w-[350px] leading-3">
        Your information was submitted to our team of immigration attorneys.
        Expect an email from hello@tryalma.ai.
      </p>

      <button
        type="button"
        onClick={() => dispatch(setIsSubmitted(false))}
        className="rounded bg-[#1D1D1D] text-white w-[90%] max-w-[240px] mt-10 text-xs py-2 cursor-pointer hover:bg-black"
      >
        Go Back to Homepage
      </button>
    </div>
  );
};

export default SubmittedForm;
