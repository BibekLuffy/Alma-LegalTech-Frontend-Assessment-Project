import Image from "next/image";
import {
  selectCurrentLeadPage,
  selectLeads,
} from "@/redux/leadsSlice/selectors";
import LeftArrowImg from "@/images/left_arrow.png";
import RightArrowImg from "@/images/right_arrow.png";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import LeftArrowActiveImg from "@/images/left_arrow_active.png";
import RightArrowActiveImg from "@/images/right_arrow_active.png";
import { setCurrentLeadPage } from "@/redux/leadsSlice/leadsSlice";

const TablePagination = () => {
  const dispatch = useAppDispatch();
  const leads = useAppSelector(selectLeads);
  const currentLeadPage = useAppSelector(selectCurrentLeadPage);

  const totalPages = Math.max(Math.ceil(leads.length / 10), 1);
  const newButtons = new Array(totalPages).fill("Buttons");
  return (
    <div className="py-2 flex justify-end pr-8">
      <div className="flex items-center gap-2">
        <button
          type="button"
          disabled={currentLeadPage == 1}
          onClick={() => {
            dispatch(setCurrentLeadPage(currentLeadPage - 1));
          }}
          className={`${
            currentLeadPage > 1 ? "cursor-pointer" : "cursor-not-allowed"
          }`}
        >
          <Image
            src={currentLeadPage > 1 ? LeftArrowActiveImg : LeftArrowImg}
            alt="Left Arrow"
            height={10}
          />
        </button>

        {newButtons.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              dispatch(setCurrentLeadPage(index + 1));
            }}
            className={`rounded-[2px] text-xs flex justify-center items-center cursor-pointer size-5 ${
              currentLeadPage === index + 1 ? "border" : ""
            } ${
              // Show current page
              index + 1 === currentLeadPage ||
              //   Show first page
              index === 0 ||
              //   Show last page
              index === totalPages - 1 ||
              //   Show any 3 pages in between first and last pages with respect to current page
              (currentLeadPage < 3 && index + 1 < 5) ||
              (totalPages - currentLeadPage > 1 &&
                (index + 1 === currentLeadPage + 1 ||
                  index + 1 === currentLeadPage - 1)) ||
              (totalPages - currentLeadPage === 1 &&
                index + 1 > currentLeadPage - 3) ||
              (totalPages === currentLeadPage &&
                index + 1 > currentLeadPage - 4)
                ? ""
                : "hidden"
            }`}
          >
            {index + 1}
          </button>
        ))}

        <button
          type="button"
          disabled={currentLeadPage == totalPages}
          onClick={() => {
            dispatch(setCurrentLeadPage(currentLeadPage + 1));
          }}
          className={`${
            currentLeadPage < totalPages
              ? "cursor-pointer"
              : "cursor-not-allowed"
          }`}
        >
          <Image
            src={
              currentLeadPage < totalPages ? RightArrowActiveImg : RightArrowImg
            }
            alt="Right Arrow"
            height={10}
          />
        </button>
      </div>
    </div>
  );
};

export default TablePagination;
