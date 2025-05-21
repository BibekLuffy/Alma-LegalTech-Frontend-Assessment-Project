import Image from "next/image";
import DiceImg from "@/images/dice.png";
import TickImg from "@/images/tick.png";
import { visaOptions } from "@/constants/arrays";

import { CheckboxCN, InputErrorCN, TitleCN } from "./leadFormStyles";

const VisaCategory = ({
  value,
  error,
  handleVisaChange,
}: {
  value: string[];
  error: string;
  handleVisaChange: (visa: string) => void;
}) => {
  return (
    <div>
      <Image src={DiceImg} alt="Dice" height={50} className="mx-auto" />

      <p className={`${TitleCN} text-center mb-2`}>
        Visa categories of interest?
      </p>
      {visaOptions.map((visa) => (
        <div key={visa} className="flex items-center mb-2 relative">
          <input
            id="default-checkbox"
            type="checkbox"
            checked={value.includes(visa)}
            onChange={() => handleVisaChange(visa)}
            className={CheckboxCN(value.includes(visa))}
          />
          {value.includes(visa) && (
            <Image
              src={TickImg}
              alt="tick"
              height={11}
              className="absolute left-[3px]"
            />
          )}
          <label
            className="ms-2 text-xs cursor-pointer"
            onClick={() => handleVisaChange(visa)}
          >
            {visa}
          </label>
        </div>
      ))}
      {error && <p className={InputErrorCN}>{error}</p>}
    </div>
  );
};

export default VisaCategory;
