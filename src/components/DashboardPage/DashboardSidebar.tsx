import Image from "next/image";
import AlmaImg from "@/images/alma.png";
import { useAppDispatch } from "@/redux/hooks";
import { useRouter, useSearchParams } from "next/navigation";
import { setIsLoggedIn } from "@/redux/adminSlice/adminSlice";
import SidebarNavigationButton from "./SidebarNavigationButton";

const DashboardSidebar = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const pathname = useSearchParams();
  const isSettingsPage = pathname.get("setting");

  const adminClick = () => {
    const signOut = window.confirm("Would you like to sign out?");
    if (signOut) {
      dispatch(setIsLoggedIn(false));
    }
  };

  return (
    <div className="min-w-[200px] h-full flex flex-col border-r-[1.5px] pb-8 border-gray-100">
      <div className="w-fit pt-5 pl-8 relative">
        <Image src={AlmaImg} alt="Alma" height={25} className="z-10 relative" />
        <div className="size-2 absolute -top-20 left-5  shadow-[10px_10px_200px_120px_#D9DEA5] z-0" />
      </div>
      <div className="flex-1 pl-8 pt-16 flex-col flex z-10 relative">
        <SidebarNavigationButton
          name="Leads"
          isSelected={!isSettingsPage}
          onClick={() => router.push("/admin/dashboard")}
        />
        <SidebarNavigationButton
          name="Settings"
          isSelected={Boolean(isSettingsPage && isSettingsPage.length > 0)}
          onClick={() => router.push("/admin/dashboard?setting=true")}
        />
      </div>
      <button
        type="button"
        onClick={adminClick}
        className="appearance-none pl-8 py-1 cursor-pointer flex items-center gap-2 hover:bg-gray-100"
      >
        <div className="size-8 bg-gray-200 rounded-full flex justify-center items-center text-xs font-bold">
          A
        </div>
        <p className="font-bold text-sm">Admin</p>
      </button>
    </div>
  );
};

export default DashboardSidebar;
