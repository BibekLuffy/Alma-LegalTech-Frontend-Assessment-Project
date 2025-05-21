"use client";
import Image from "next/image";
import { useState } from "react";
import AlmaImg from "@/images/alma.jpeg";
import LeadFrom from "@/components/LeadForm";
import SubmittedForm from "@/components/SubmittedForm";

export default function Home() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return <SubmittedForm setSubmitted={() => setSubmitted(false)} />;
  }

  return (
    <div>
      <div className="bg-[#D9DEA5] w-full relative flex">
        {/* Flower Background */}
        <div
          className={`relative overflow-hidden w-[20%] min-w-[50px] max-w-[130px] bg-[url(../images/flower.png)] bg-right bg-size-[auto_300px]`}
        />
        <div className="py-16 mx-0 ml-3 sm:mx-8 lg:mx-auto">
          {/* Logo */}
          <Image src={AlmaImg} alt="Alma" height={14} />
          <div>
            {/* Title */}
            <p className="pt-5 font-extrabold text-base sm:text-3xl text-wrap">
              Get An Assessment <br />
              Of Your Immigration Case
            </p>
          </div>
        </div>
      </div>
      <LeadFrom
        setSubmitted={() => {
          setSubmitted(true);
        }}
      />
    </div>
  );
}
