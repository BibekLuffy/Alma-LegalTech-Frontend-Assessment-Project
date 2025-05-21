import React from "react";
import { TableBodyCN } from "./dashborderPageStyles";

const LeadTableBody = ({
  name,
  createdAt,
  status,
  country,
  onClick,
  hideButton = false,
}: {
  name: string;
  createdAt: string;
  status: string;
  country: string;
  onClick?: () => void;
  hideButton?: boolean;
}) => {
  return (
    <tr className="border-b border-gray-300">
      <td scope="col">
        <div className={TableBodyCN}>{name}</div>
      </td>
      <td scope="col">
        <div className={TableBodyCN}>{createdAt}</div>
      </td>
      <td scope="col">
        <div className={TableBodyCN}>{status}</div>
      </td>
      <td scope="col">
        <div className={TableBodyCN}>{country}</div>
      </td>
      {!hideButton && (
        <td scope="col">
          <button
            type="button"
            className="text-xs text-indigo-300 hover:text-indigo-500 cursor-pointer"
            onClick={onClick}
          >
            Change Status
          </button>
        </td>
      )}
    </tr>
  );
};

export default LeadTableBody;
