import Image from "next/image";
import HeartImg from "@/images/heart.png";
import { InputDefaultCN, TitleCN } from "./leadFormStyles";
import { SetFormDataType } from "./types";

const AdditionalInfo = ({
  value,
  setFormData,
}: {
  value: string;
  setFormData: SetFormDataType;
}) => {
  return (
    <div className="mt-4">
      <Image src={HeartImg} alt="Dice" height={50} className="mx-auto" />
      <p className={`${TitleCN} text-center mb-2`}>How can we help you?</p>

      <textarea
        value={value}
        onChange={(e) => {
          setFormData("additionalInfo", e.target.value);
        }}
        rows={4}
        className={`${InputDefaultCN} placeholder:text-[10px]`}
        placeholder="What is your current status and when does it expire? What is your past immigration history? Are you looking for long-term permanent residency or short-term employment visa or both? Are there any timeline considerations?"
      />
    </div>
  );
};

export default AdditionalInfo;
