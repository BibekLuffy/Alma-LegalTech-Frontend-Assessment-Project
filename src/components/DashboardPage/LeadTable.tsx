import moment from "moment";
import Image from "next/image";
import { capitalize } from "lodash";
import {
  selectCurrentLeadPage,
  selectLeads,
} from "@/redux/leadsSlice/selectors";
import ArrowImg from "@/images/arrow_down.png";
import { LeadStatus } from "@/redux/leadsSlice/types";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { updateLeadStatus } from "@/redux/leadsSlice/leadsSlice";
import LeadTableBody from "./LeadTableBody";
import { TableHeadImgCN, TableHeadTitleCN } from "./dashborderPageStyles";

const LeadTable = () => {
  const dispatch = useAppDispatch();
  const leads = useAppSelector(selectLeads);
  const currentLeadPage = useAppSelector(selectCurrentLeadPage);

  return (
    <table className="w-full min-w-[700px] border-b border-gray-300">
      <thead className="border-b border-gray-300">
        <tr>
          <th scope="col">
            <div className={TableHeadTitleCN}>
              Name
              <Image src={ArrowImg} alt="dropdown" className={TableHeadImgCN} />
            </div>
          </th>

          <th scope="col">
            <div className={TableHeadTitleCN}>
              Submitted
              <Image src={ArrowImg} alt="dropdown" className={TableHeadImgCN} />
            </div>
          </th>

          <th scope="col">
            <div className={TableHeadTitleCN}>
              Status
              <Image src={ArrowImg} alt="dropdown" className={TableHeadImgCN} />
            </div>
          </th>

          <th scope="col">
            <div className={TableHeadTitleCN}>
              Country
              <Image src={ArrowImg} alt="dropdown" className={TableHeadImgCN} />
            </div>
          </th>

          <th scope="col">
            <p className="invisible">Buttons</p>
          </th>
        </tr>
      </thead>
      <tbody>
        {leads
          .slice((currentLeadPage - 1) * 10, currentLeadPage * 10)
          .map((lead) => (
            <LeadTableBody
              key={lead.id}
              name={`${lead.firstName} ${lead.lastName}`}
              status={capitalize(lead.status)}
              country={lead.country || "-"}
              onClick={() => {
                dispatch(
                  updateLeadStatus({
                    id: lead.id,
                    status:
                      lead.status === LeadStatus.REACHED_OUT
                        ? LeadStatus.PENDING
                        : LeadStatus.REACHED_OUT,
                  })
                );
              }}
              createdAt={moment(lead.createAt).format("L,LT")}
            />
          ))}
      </tbody>
    </table>
  );
};

export default LeadTable;
