import Image from "next/image";
import { useEffect } from "react";
import SearcgImg from "@/images/search.png";
import DropdownImg from "@/images/dropdown.png";
import { selectLeads } from "@/redux/leadsSlice/selectors";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setCurrentLeadPage } from "@/redux/leadsSlice/leadsSlice";
import LeadTable from "./LeadTable";
import TablePagination from "./TablePagination";
import { LeadInputDefaultCN } from "./dashborderPageStyles";

const LeadsPage = () => {
  const dispatch = useAppDispatch();
  const leads = useAppSelector(selectLeads);

  useEffect(() => {
    // Reset current lead page number on each visit of the page
    dispatch(setCurrentLeadPage(1));
  }, []);

  return (
    <div className="px-4 pt-6 w-full overflow-x-auto pb-10">
      <p className="font-bold text-xl relative">Leads</p>

      <div className="mt-5 flex gap-2">
        <div className="relative">
          {/* TODO implement search */}
          <Image
            src={SearcgImg}
            alt="Search"
            className="absolute size-4 left-2 top-2"
          />
          <input
            disabled
            placeholder="Search"
            className={`${LeadInputDefaultCN} pl-7 w-50`}
          />
        </div>
        <div className="relative">
          {/* TODO implement sort */}
          <input
            disabled
            className={`${LeadInputDefaultCN} w-18`}
            placeholder="Status"
          />
          <Image
            src={DropdownImg}
            alt="dropdown"
            className="absolute size-2 right-3 top-3"
          />
        </div>
      </div>

      <div className="border w-full border-gray-200 rounded-lg">
        <div className=" overflow-x-auto">
          <LeadTable />
        </div>

        {leads.length === 0 && (
          <p className="text-sm py-4 text-center">No leads added.</p>
        )}
        <TablePagination />
      </div>
    </div>
  );
};

export default LeadsPage;
