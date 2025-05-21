import Image from "next/image";
import AlmaImg from "@/images/alma.png";
import { useRouter, useSearchParams } from "next/navigation";
import AdminButton from "./AdminButton";
import SidebarNavigationButton from "./SidebarNavigationButton";

const DashboardTopBar = () => {
  const router = useRouter();
  const pathname = useSearchParams();
  const isSettingsPage = pathname.get("setting");

  return (
    <div className="sm:hidden sticky top-0 bg-white z-20 px-4 py-1 border-b border-gray-200 flex items-center">
      <Image
        src={AlmaImg}
        alt="Alma"
        className="h-7 w-16 object-contain mb-2"
      />
      <div className="pl-8 pt-1 gap-2 flex flex-1">
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

export default DashboardTopBar;
