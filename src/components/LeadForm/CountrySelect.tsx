import Image from "next/image";
import { useState } from "react";
import DropdownImg from "@/images/dropdown.png";
import { countryOptions } from "@/constants/arrays";

import { InputDefaultCN } from "./leadFormStyles";
import { SetFormDataType } from "./types";

const CountrySelect = ({
  value,
  handleChange,
}: {
  value: string;
  handleChange: SetFormDataType;
}) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const shownCountries =
    value.length > 0
      ? countryOptions.filter((country) =>
          country.toLowerCase().includes(value.toLowerCase())
        )
      : countryOptions;

  return (
    <div className="relative">
      <input
        type="text"
        id="small-input"
        placeholder="Country of Citizenship"
        value={value}
        autoComplete="off"
        onFocus={() => {
          setShowDropdown(true);
        }}
        onBlur={(e) => {
          if (!countryOptions.includes(e.target.value)) {
            handleChange("country", "");
          }
          setTimeout(() => {
            setShowDropdown(false);
          }, 100);
        }}
        onChange={(e) => {
          handleChange("country", e.target.value);
        }}
        className={InputDefaultCN}
      />
      <Image
        src={DropdownImg}
        alt="dropdown"
        className="absolute size-3 right-3 top-3"
      />
      {showDropdown && (
        <div className="absolute top-8 border w-full rounded border-gray-300 bg-white">
          {shownCountries.map((country) => (
            <div
              key={country}
              onClick={() => {
                handleChange("country", country);
              }}
              className="cursor-pointer hover:bg-indigo-300 hover:text-white p-1"
            >
              {country}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CountrySelect;
