import Image from "next/image";
import AlmaImg from "@/images/alma.png";
import { useRouter, useSearchParams } from "next/navigation";
import AdminButton from "./AdminButton";
import SidebarNavigationButton from "./SidebarNavigationButton";

const DashboardSidebar = () => {
  const router = useRouter();
  const pathname = useSearchParams();
  const isSettingsPage = pathname.get("setting");

  return (
    <div className="min-w-[200px] sm:flex h-full hidden flex-col border-r-[1.5px] pb-8 border-gray-100">
      <div className="w-fit pt-5 pl-8 relative">
        <Image src={AlmaImg} alt="Alma" height={25} className="z-10 relative" />
        <div className="size-2 absolute -top-24 -left-[40%]  shadow-[10px_10px_200px_120px_#D9DEA5] z-0" />
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
      <AdminButton />
    </div>
  );
};

export default DashboardSidebar;
