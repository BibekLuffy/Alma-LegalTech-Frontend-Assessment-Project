import { cntl } from "@/utils/cntl";

export const TitleCN = cntl`
    font-bold mt-1
`;

export const InputDefaultCN = cntl`
    block w-full p-2 mb-2.5 text-gray-900 border border-gray-200 rounded-lg placeholder:text-gray-300 text-xs focus:outline-violet-300
`;

export const InputErrorCN = cntl`
    text-red-600 text-sm -mt-2
`;

export const CheckboxCN = (checked: boolean) => cntl`
   appearance-none border w-4 h-4 border-gray-200 rounded ${
     checked && "bg-indigo-300"
   }
`;
