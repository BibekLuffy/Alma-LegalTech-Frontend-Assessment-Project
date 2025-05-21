"use client";
import Image from "next/image";
import AlmaImg from "@/images/alma.png";
import LeadFrom from "@/components/LeadForm";
import { useAppSelector } from "@/redux/hooks";
import SubmittedForm from "@/components/SubmittedForm";
import { selectIsSubmitted } from "@/redux/appSlice/selectors";

export default function Home() {
  const submitted = useAppSelector(selectIsSubmitted);

  if (submitted) {
    return <SubmittedForm />;
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
          <Image src={AlmaImg} alt="Alma" height={25} />
          <div>
            {/* Title */}
            <p className="pt-5 font-extrabold text-base sm:text-3xl text-wrap">
              Get An Assessment <br />
              Of Your Immigration Case
            </p>
          </div>
        </div>
      </div>
      <LeadFrom />
    </div>
  );
}
